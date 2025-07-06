import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, FileText } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <DashboardLayout 
      title="System Administrator Dashboard" 
      description="Full system control and user management"
    >
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              Currently online
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <file-text className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              Require attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.9%</div>
            <p className="text-xs text-muted-foreground">
              Uptime
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Admin Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <users className="h-5 w-5 text-primary" />
              User Management
            </CardTitle>
            <CardDescription>Create, edit, and manage user accounts and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">156 Users</Badge>
              <Badge variant="outline">12 Departments</Badge>
            </div>
            <Button className="w-full" style={{ background: 'var(--gradient-primary)' }}>
              Manage Users
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <calendar className="h-5 w-5 text-primary" />
              Attendance Overview
            </CardTitle>
            <CardDescription>Monitor attendance across all departments and users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">89% Present</Badge>
              <Badge variant="destructive">3 Absent</Badge>
            </div>
            <Button variant="secondary" className="w-full">
              View Attendance
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <file-text className="h-5 w-5 text-primary" />
              System Logs
            </CardTitle>
            <CardDescription>View detailed system activity and audit trail</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">247 Today</Badge>
              <Badge variant="secondary">No Errors</Badge>
            </div>
            <Button variant="outline" className="w-full">
              View Logs
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Permission Manager</CardTitle>
            <CardDescription>Control user access and impersonation settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive">Admin Access</Badge>
              <Badge variant="warning">Full Control</Badge>
            </div>
            <Button variant="destructive" className="w-full">
              Manage Permissions
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Leave & Insurance</CardTitle>
            <CardDescription>Oversee all leave and insurance request processing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">23 Pending</Badge>
              <Badge variant="outline">156 Processed</Badge>
            </div>
            <Button variant="secondary" className="w-full">
              Review Requests
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Excel Upload</CardTitle>
            <CardDescription>Upload and process attendance data from Excel files</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Bulk Import</Badge>
              <Badge variant="secondary">Auto-Process</Badge>
            </div>
            <Button variant="outline" className="w-full">
              Upload Data
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Admin Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Administrative Actions</CardTitle>
          <CardDescription>Latest system administration activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <div>
                <p className="text-sm font-medium">User Created: John Smith (IT Department)</p>
                <p className="text-xs text-muted-foreground">System Admin • 2 hours ago</p>
              </div>
              <Badge variant="secondary">Create</Badge>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <div>
                <p className="text-sm font-medium">Attendance data uploaded for Maintenance team</p>
                <p className="text-xs text-muted-foreground">IT Manager • 4 hours ago</p>
              </div>
              <Badge variant="outline">Upload</Badge>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium">Leave request approved for Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">HR Manager • 6 hours ago</p>
              </div>
              <Badge variant="secondary">Approve</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AdminDashboard;