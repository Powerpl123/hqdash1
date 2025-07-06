import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Users, Calendar } from 'lucide-react';

const ITDashboard = () => {
  return (
    <DashboardLayout 
      title="IT Management Dashboard" 
      description="Manage attendance uploads, system operations, and technical support"
    >
      {/* IT Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Uploads</CardTitle>
            <file-text className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.2%</div>
            <p className="text-xs text-muted-foreground">
              Uptime today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">134</div>
            <p className="text-xs text-muted-foreground">
              Currently online
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Processing</CardTitle>
            <calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3k</div>
            <p className="text-xs text-muted-foreground">
              Records processed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* IT Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <file-text className="h-5 w-5 text-primary" />
              Excel Upload Center
            </CardTitle>
            <CardDescription>Upload and process attendance data from Excel files</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Bulk Import</Badge>
              <Badge variant="outline">Auto-Validate</Badge>
            </div>
            <Button className="w-full" style={{ background: 'var(--gradient-primary)' }}>
              Upload Data
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <calendar className="h-5 w-5 text-primary" />
              Attendance Management
            </CardTitle>
            <CardDescription>Monitor and manage attendance across all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">All Departments</Badge>
              <Badge variant="outline">Real-time</Badge>
            </div>
            <Button variant="secondary" className="w-full">
              View Attendance
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <users className="h-5 w-5 text-primary" />
              System Analytics
            </CardTitle>
            <CardDescription>View system usage and performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Performance</Badge>
              <Badge variant="secondary">Usage Stats</Badge>
            </div>
            <Button variant="outline" className="w-full">
              View Analytics
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Data Validation</CardTitle>
            <CardDescription>Verify and clean attendance data integrity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">Auto-Check</Badge>
              <Badge variant="secondary">Error Detection</Badge>
            </div>
            <Button variant="outline" className="w-full">
              Run Validation
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Backup & Recovery</CardTitle>
            <CardDescription>Manage system backups and data recovery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Daily Backup</Badge>
              <Badge variant="outline">Secure</Badge>
            </div>
            <Button variant="secondary" className="w-full">
              Manage Backups
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="text-lg">Technical Support</CardTitle>
            <CardDescription>Handle user support tickets and system issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="destructive">3 Urgent</Badge>
              <Badge variant="secondary">12 Open</Badge>
            </div>
            <Button variant="outline" className="w-full">
              Support Queue
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent IT Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent IT Operations</CardTitle>
          <CardDescription>Latest system and data management activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <div>
                <p className="text-sm font-medium">Attendance data uploaded: Maintenance Department</p>
                <p className="text-xs text-muted-foreground">156 records processed • 30 minutes ago</p>
              </div>
              <Badge variant="secondary">Upload</Badge>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <div>
                <p className="text-sm font-medium">System backup completed successfully</p>
                <p className="text-xs text-muted-foreground">All data secured • 2 hours ago</p>
              </div>
              <Badge variant="outline">Backup</Badge>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-border/50">
              <div>
                <p className="text-sm font-medium">Data validation report generated</p>
                <p className="text-xs text-muted-foreground">No errors found • 4 hours ago</p>
              </div>
              <Badge variant="secondary">Validation</Badge>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium">Support ticket resolved: Login issue for HR team</p>
                <p className="text-xs text-muted-foreground">Ticket #2024-156 • 6 hours ago</p>
              </div>
              <Badge variant="outline">Support</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ITDashboard;