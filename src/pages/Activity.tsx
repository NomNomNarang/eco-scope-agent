import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingDown, Mail, Cloud, Video, FileText } from "lucide-react";

const activityData = [
  { date: "Today", count: 8, savings: "3.2 kg CO₂" },
  { date: "Yesterday", count: 12, savings: "4.8 kg CO₂" },
  { date: "This Week", count: 47, savings: "18.5 kg CO₂" },
  { date: "This Month", count: 203, savings: "78.3 kg CO₂" },
];

const Activity = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Activity Timeline
          </h1>
          <p className="text-lg text-muted-foreground">
            Track all your carbon reduction activities and automated workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activityData.map((stat) => (
            <Card key={stat.date} className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{stat.date}</span>
              </div>
              <p className="text-2xl font-bold mb-1">{stat.count} actions</p>
              <p className="text-sm text-success flex items-center gap-1">
                <TrendingDown className="h-4 w-4" />
                {stat.savings}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
          
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <h3 className="text-xl font-semibold mb-4">Activity Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Email Optimization</span>
                </div>
                <Badge>89 actions</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Cloud className="h-5 w-5 text-secondary" />
                  <span>Cloud Storage</span>
                </div>
                <Badge>64 actions</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-accent" />
                  <span>Video Streaming</span>
                </div>
                <Badge>38 actions</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-success" />
                  <span>Document Management</span>
                </div>
                <Badge>12 actions</Badge>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Activity;
