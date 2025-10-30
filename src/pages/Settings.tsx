import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, Lock, Link, Database } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage your account, preferences, and integrations
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="gap-2">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="gap-2">
              <Link className="h-4 w-4" />
              <span className="hidden sm:inline">Integrations</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Data</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Your Company" />
                </div>
                <Button>Save Changes</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-6">Notification Preferences</h3>
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Carbon Reduction Alerts</p>
                    <p className="text-sm text-muted-foreground">Get notified of automation opportunities</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Project Updates</p>
                    <p className="text-sm text-muted-foreground">News from restoration projects you support</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Achievement Badges</p>
                    <p className="text-sm text-muted-foreground">Celebrate your climate milestones</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-6">Privacy & Security</h3>
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Public Profile</p>
                    <p className="text-sm text-muted-foreground">Show your achievements on leaderboards</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Data Sharing</p>
                    <p className="text-sm text-muted-foreground">Share anonymized data for climate research</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Button variant="outline">Change Password</Button>
                </div>
                <div className="space-y-2">
                  <Button variant="outline">Two-Factor Authentication</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="integrations">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-6">Connected Integrations</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                  <div>
                    <p className="font-medium">Google Workspace</p>
                    <p className="text-sm text-muted-foreground">Email and Drive tracking</p>
                  </div>
                  <Button variant="outline">Connected</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                  <div>
                    <p className="font-medium">Microsoft 365</p>
                    <p className="text-sm text-muted-foreground">Teams and OneDrive monitoring</p>
                  </div>
                  <Button>Connect</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                  <div>
                    <p className="font-medium">AWS Cloud</p>
                    <p className="text-sm text-muted-foreground">Cloud infrastructure tracking</p>
                  </div>
                  <Button>Connect</Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                  <div>
                    <p className="font-medium">Slack</p>
                    <p className="text-sm text-muted-foreground">Workspace activity monitoring</p>
                  </div>
                  <Button>Connect</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="data">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-6">Data Management</h3>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <p className="font-medium mb-2">Export Your Data</p>
                  <p className="text-sm text-muted-foreground mb-4">Download all your carbon tracking data and reports</p>
                  <Button variant="outline">Download Data</Button>
                </div>
                <div className="pt-6 border-t border-border/50">
                  <p className="font-medium mb-2 text-destructive">Delete Account</p>
                  <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all associated data</p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;
