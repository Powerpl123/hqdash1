import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const DashboardLayout = ({ children, title, description }: DashboardLayoutProps) => {
  const { profile, signOut } = useAuth();

  const getRoleBadgeVariant = (role: string | null) => {
    switch (role) {
      case 'system_admin':
      case 'admin_officer':
        return 'destructive';
      case 'hr_manager':
      case 'hr_officer':
        return 'secondary';
      case 'it_manager':
      case 'it_officer':
        return 'default';
      default:
        return 'outline';
    }
  };

  const formatRole = (role: string | null) => {
    if (!role) return 'User';
    return role.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">HQ Power EOAMS</h1>
              <p className="text-sm text-muted-foreground">Enterprise Operations & Attendance Management</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Card className="p-3 bg-background/50">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {profile?.name?.charAt(0) || profile?.email?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">{profile?.name || 'User'}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant={getRoleBadgeVariant(profile?.role)} className="text-xs">
                        {formatRole(profile?.role)}
                      </Badge>
                      {profile?.department && (
                        <Badge variant="outline" className="text-xs">
                          {profile.department}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">⋮</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                      <DropdownMenuItem>Preferences</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={signOut} className="text-destructive">
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        
        <Separator className="mb-8" />
        
        {children}
      </main>
    </div>
  );
};