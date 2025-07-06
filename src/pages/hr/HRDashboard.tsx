import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, Calendar } from 'lucide-react';

const HRDashboard = () => {
  return (
    <DashboardLayout 
      title="HR Management Dashboard" 
      description="Manage employee relations, leave requests, and HR operations"
    >
      {/* HR Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Leaves</CardTitle>
            <calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Need approval
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Insurance Claims</CardTitle>
            <file-text className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              In processing
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employee Count</CardTitle>
            <users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              Active employees
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <div className="h-4 w-4 rounded-full bg-blue-500"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">
              Requests processed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* HR Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <calendar className="h-5 w-5 text-primary" />
              Leave Management
            </CardTitle>
            <CardDescription>Review and approve employee leave requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive">12 Pending</Badge>
              <Badge variant="secondary">34 This Month</Badge>
            </div>
            <Button className="w-full" style={{ background: 'var(--gradient-primary)' }}>
              Review Requests
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <file-text className="h-5 w-5 text-primary" />
              Insurance Claims
            </CardTitle>
            <CardDescription>Process employee insurance requests and forms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">8 Processing</Badge>
              <Badge variant="outline">23 Completed</Badge>
            </div>
            <Button variant="secondary" className="w-full">
              Manage Claims
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <users className="h-5 w-5 text-primary" />
              Employee Records
            </CardTitle>
            <CardDescription>Access and manage all employee information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">156 Employees</Badge>
              <Badge variant="secondary">6 Departments</Badge>
            </div>
            <Button variant="outline" className="w-full">
              View Records
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Attendance Reports</CardTitle>
            <CardDescription>Generate and export attendance reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Export Excel</Badge>
              <Badge variant="secondary">All Departments</Badge>
            </div>
            <Button variant="outline" className="w-full">
              Generate Reports
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Form Templates</CardTitle>
            <CardDescription>Create and manage HR form templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Leave Forms</Badge>
              <Badge variant="outline">Insurance</Badge>
            </div>
            <Button variant="secondary" className="w-full">
              Manage Forms
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Department Overview</CardTitle>
            <CardDescription>View department-wise employee statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">6 Departments</Badge>
              <Badge variant="secondary">Full Access</Badge>
            </div>
            <Button variant="outline" className="w-full">
              View Overview
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Pending Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Pending HR Actions</CardTitle>
          <CardDescription>Items requiring your immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <div>
                <p className="text-sm font-medium">Leave Request: Maria Garcia (Annual Leave)</p>
                <p className="text-xs text-muted-foreground">Requested: Dec 15-22, 2024 • Operators Department</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Reject</Button>
                <Button size="sm" style={{ background: 'var(--gradient-primary)' }}>Approve</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <div>
                <p className="text-sm font-medium">Insurance Claim: David Kim (Health Insurance)</p>
                <p className="text-xs text-muted-foreground">Submitted: 2 days ago • Maintenance Department</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Review</Button>
                <Button size="sm" variant="secondary">Process</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium">Emergency Leave: Sarah Johnson (Family Emergency)</p>
                <p className="text-xs text-muted-foreground">Urgent request • IT Department</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Contact</Button>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">Urgent</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default HRDashboard;