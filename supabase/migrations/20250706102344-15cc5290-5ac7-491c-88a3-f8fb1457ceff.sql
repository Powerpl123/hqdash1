-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM (
  'system_admin',
  'it_manager', 
  'it_officer',
  'it_support',
  'hr_manager',
  'hr_officer', 
  'gm_assistant',
  'external_admin',
  'operator',
  'maintenance',
  'driver'
);

-- Create enum for departments
CREATE TYPE public.department_type AS ENUM (
  'IT',
  'HR', 
  'Administration',
  'Operators',
  'Maintenance',
  'Drivers'
);

-- Create enum for attendance status
CREATE TYPE public.attendance_status AS ENUM ('present', 'absent', 'late', 'half_day');

-- Create enum for leave types
CREATE TYPE public.leave_type AS ENUM ('sick', 'annual', 'emergency', 'maternity', 'paternity', 'unpaid');

-- Create enum for request status
CREATE TYPE public.request_status AS ENUM ('pending', 'approved', 'rejected', 'cancelled');

-- Create enum for insurance types
CREATE TYPE public.insurance_type AS ENUM ('health', 'life', 'accident', 'vehicle', 'property');

-- Update profiles table to use enums and add missing columns
ALTER TABLE public.profiles 
DROP CONSTRAINT IF EXISTS profiles_role_check,
DROP CONSTRAINT IF EXISTS profiles_department_check,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Temporarily disable RLS to modify the table structure
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;

-- Add new columns with proper types
ALTER TABLE public.profiles 
ALTER COLUMN role TYPE public.user_role USING role::public.user_role,
ALTER COLUMN department TYPE public.department_type USING department::public.department_type;

-- Re-enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create attendance table
CREATE TABLE public.attendance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  date DATE NOT NULL,
  status public.attendance_status NOT NULL DEFAULT 'present',
  uploaded_by UUID,
  department public.department_type,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, date)
);

-- Create leave_requests table
CREATE TABLE public.leave_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  type public.leave_type NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status public.request_status NOT NULL DEFAULT 'pending',
  reason TEXT,
  attachment_url TEXT,
  approved_by UUID,
  approved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create insurance_requests table
CREATE TABLE public.insurance_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  type public.insurance_type NOT NULL,
  reason TEXT NOT NULL,
  status public.request_status NOT NULL DEFAULT 'pending',
  attachment_url TEXT,
  response_url TEXT,
  processed_by UUID,
  processed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create system_logs table
CREATE TABLE public.system_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  action TEXT NOT NULL,
  performed_by UUID NOT NULL,
  target_user UUID,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  notes TEXT,
  metadata JSONB
);

-- Create permissions table for fine-grained access control
CREATE TABLE public.permissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  access_area TEXT NOT NULL,
  can_view BOOLEAN DEFAULT FALSE,
  can_edit BOOLEAN DEFAULT FALSE,
  can_upload BOOLEAN DEFAULT FALSE,
  can_delete BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, access_area)
);

-- Enable RLS on all tables
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leave_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.insurance_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.permissions ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID DEFAULT auth.uid())
RETURNS public.user_role AS $$
  SELECT role FROM public.profiles WHERE id = user_uuid;
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create security definer function to check if user is system admin
CREATE OR REPLACE FUNCTION public.is_system_admin(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_uuid AND role = 'system_admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create security definer function to check if user has HR role
CREATE OR REPLACE FUNCTION public.is_hr_user(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_uuid AND role IN ('hr_manager', 'hr_officer', 'gm_assistant')
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create security definer function to check if user has IT role
CREATE OR REPLACE FUNCTION public.is_it_user(user_uuid UUID DEFAULT auth.uid())
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_uuid AND role IN ('system_admin', 'it_manager', 'it_officer', 'it_support')
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- RLS Policies for profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "System admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.is_system_admin());

CREATE POLICY "HR can view all profiles" ON public.profiles
  FOR SELECT USING (public.is_hr_user());

CREATE POLICY "System admins can update profiles" ON public.profiles
  FOR UPDATE USING (public.is_system_admin());

CREATE POLICY "System admins can insert profiles" ON public.profiles
  FOR INSERT WITH CHECK (public.is_system_admin());

-- RLS Policies for attendance
CREATE POLICY "Users can view their own attendance" ON public.attendance
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "IT and HR can view all attendance" ON public.attendance
  FOR SELECT USING (public.is_it_user() OR public.is_hr_user());

CREATE POLICY "IT can manage attendance" ON public.attendance
  FOR ALL USING (public.is_it_user());

-- RLS Policies for leave_requests
CREATE POLICY "Users can view their own leave requests" ON public.leave_requests
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create leave requests" ON public.leave_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "HR can view all leave requests" ON public.leave_requests
  FOR SELECT USING (public.is_hr_user());

CREATE POLICY "HR can update leave requests" ON public.leave_requests
  FOR UPDATE USING (public.is_hr_user());

-- RLS Policies for insurance_requests
CREATE POLICY "Users can view their own insurance requests" ON public.insurance_requests
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create insurance requests" ON public.insurance_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "HR can view all insurance requests" ON public.insurance_requests
  FOR SELECT USING (public.is_hr_user());

CREATE POLICY "HR can update insurance requests" ON public.insurance_requests
  FOR UPDATE USING (public.is_hr_user());

-- RLS Policies for system_logs
CREATE POLICY "System admins can view all logs" ON public.system_logs
  FOR SELECT USING (public.is_system_admin());

CREATE POLICY "Authenticated users can create logs" ON public.system_logs
  FOR INSERT WITH CHECK (auth.uid() = performed_by);

-- RLS Policies for permissions
CREATE POLICY "System admins can manage permissions" ON public.permissions
  FOR ALL USING (public.is_system_admin());

CREATE POLICY "Users can view their own permissions" ON public.permissions
  FOR SELECT USING (auth.uid() = user_id);

-- Create function to log system actions
CREATE OR REPLACE FUNCTION public.log_system_action(
  action_text TEXT,
  target_user_id UUID DEFAULT NULL,
  notes_text TEXT DEFAULT NULL,
  metadata_json JSONB DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  log_id UUID;
BEGIN
  INSERT INTO public.system_logs (action, performed_by, target_user, notes, metadata)
  VALUES (action_text, auth.uid(), target_user_id, notes_text, metadata_json)
  RETURNING id INTO log_id;
  
  RETURN log_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_attendance_updated_at
  BEFORE UPDATE ON public.attendance
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_leave_requests_updated_at
  BEFORE UPDATE ON public.leave_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_insurance_requests_updated_at
  BEFORE UPDATE ON public.insurance_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_permissions_updated_at
  BEFORE UPDATE ON public.permissions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();