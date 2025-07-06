import { useAuth } from '@/hooks/useAuth';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const { profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Role-based routing
  useEffect(() => {
    if (profile?.role && !loading) {
      switch (profile.role) {
        case 'system_admin':
        case 'admin_officer':
          // Redirect to admin dashboard
          break;
        case 'hr_manager':
        case 'hr_officer':
        case 'gm_assistant':
          // Redirect to HR dashboard
          break;
        case 'it_manager':
        case 'it_officer':
        case 'it_support':
          // Redirect to IT dashboard
          break;
        default:
          // External users - stay on general dashboard
          break;
      }
    }
  }, [profile, loading]);

  // Redirect based on role
  if (profile?.role) {
    switch (profile.role) {
      case 'system_admin':
      case 'admin_officer':
        return <Navigate to="/admin/dashboard" replace />;
      case 'hr_manager':
      case 'hr_officer':
      case 'gm_assistant':
        return <Navigate to="/hr/dashboard" replace />;
      case 'it_manager':
      case 'it_officer':
      case 'it_support':
        return <Navigate to="/it/dashboard" replace />;
    }
  }

  return (
    <DashboardLayout 
      title="Employee Dashboard" 
      description="Access your attendance, leave requests, and company information"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Quick Actions for External Users */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="font-semibold mb-4">My Attendance</h3>
          <p className="text-sm text-muted-foreground mb-4">View your attendance records and statistics</p>
          <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            View Attendance
          </button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h3 className="font-semibold mb-4">Leave Request</h3>
          <p className="text-sm text-muted-foreground mb-4">Submit new leave requests and track status</p>
          <button className="w-full py-2 px-4 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80">
            New Request
          </button>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h3 className="font-semibold mb-4">Insurance</h3>
          <p className="text-sm text-muted-foreground mb-4">Manage insurance requests and documents</p>
          <button className="w-full py-2 px-4 bg-accent text-accent-foreground rounded-md hover:bg-accent/80">
            View Insurance
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card p-6 rounded-lg border">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <span className="text-sm">No recent activity</span>
            <span className="text-xs text-muted-foreground">Welcome to HQ Power EOAMS!</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;