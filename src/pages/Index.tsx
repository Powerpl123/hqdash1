import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const { user, profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Redirect authenticated users to their appropriate dashboard
  if (user && profile) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-accent/30">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">HQ Power EOAMS</h1>
            <p className="text-muted-foreground">Enterprise Operations & Attendance Management System</p>
          </div>
          <Button 
            onClick={() => window.location.href = '/auth'}
            className="px-6"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Streamline Your 
            <span className="text-primary"> Enterprise Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive solution for attendance management, leave requests, insurance processing, and role-based access control across all departments.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/auth'}
              style={{ background: 'var(--gradient-primary)' }}
            >
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 Attendance Management
              </CardTitle>
              <CardDescription>
                Real-time attendance tracking with Excel upload capabilities and department-wise monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Excel Import</Badge>
                <Badge variant="outline">Real-time</Badge>
                <Badge variant="secondary">Multi-Department</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏢 Role-Based Access
              </CardTitle>
              <CardDescription>
                Secure, permission-controlled system with admin impersonation and fine-grained access control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="destructive">Admin Control</Badge>
                <Badge variant="secondary">HR Access</Badge>
                <Badge variant="outline">IT Management</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📋 Leave & Insurance
              </CardTitle>
              <CardDescription>
                Streamlined leave request processing and insurance claim management with document uploads
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Leave Approval</Badge>
                <Badge variant="outline">Insurance Claims</Badge>
                <Badge variant="secondary">Document Upload</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                👥 User Management
              </CardTitle>
              <CardDescription>
                Complete user lifecycle management with department assignment and role modification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">User Creation</Badge>
                <Badge variant="secondary">Role Assignment</Badge>
                <Badge variant="outline">Department Sync</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📈 Analytics & Reports
              </CardTitle>
              <CardDescription>
                Comprehensive reporting with audit trails and system performance monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">System Logs</Badge>
                <Badge variant="outline">Performance</Badge>
                <Badge variant="secondary">Audit Trail</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔄 Real-time Updates
              </CardTitle>
              <CardDescription>
                Live notifications and real-time data synchronization across all departments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Live Sync</Badge>
                <Badge variant="secondary">Notifications</Badge>
                <Badge variant="outline">Real-time</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8" style={{ background: 'var(--gradient-secondary)' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Join HQ Power's integrated operations management system today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg"
                className="px-8"
                onClick={() => window.location.href = '/auth'}
                style={{ background: 'var(--gradient-primary)' }}
              >
                Access Your Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 HQ Power EOAMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
