import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PlayCircle, Award, Clock } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Understanding Digital Carbon Footprint",
    description: "Learn how your digital activities contribute to carbon emissions",
    duration: "15 min",
    level: "Beginner",
    badge: "Climate Basics"
  },
  {
    id: "2",
    title: "Blue Carbon Ecosystems Explained",
    description: "Explore mangroves, seagrass, and coastal wetlands",
    duration: "25 min",
    level: "Intermediate",
    badge: "Ocean Guardian"
  },
  {
    id: "3",
    title: "Carbon Credit Verification Process",
    description: "How blockchain ensures transparency in carbon markets",
    duration: "20 min",
    level: "Advanced",
    badge: "Verification Expert"
  },
  {
    id: "4",
    title: "AI-Powered Emission Reduction",
    description: "Automate your carbon reduction with AI workflows",
    duration: "30 min",
    level: "Intermediate",
    badge: "Automation Pro"
  },
  {
    id: "5",
    title: "Community-Led Restoration",
    description: "Best practices for local climate action projects",
    duration: "35 min",
    level: "Advanced",
    badge: "Community Leader"
  },
  {
    id: "6",
    title: "ESG Reporting Standards",
    description: "Navigate CSRD, ISO 14064, and global frameworks",
    duration: "40 min",
    level: "Advanced",
    badge: "Policy Navigator"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-success text-success-foreground";
    case "Intermediate": return "bg-warning text-warning-foreground";
    case "Advanced": return "bg-destructive text-destructive-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Climate Learning Hub
          </h1>
          <p className="text-lg text-muted-foreground">
            Expand your knowledge and earn badges through interactive courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <BookOpen className="h-8 w-8 text-primary mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Courses Available</p>
            <p className="text-2xl font-bold">24</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <Award className="h-8 w-8 text-accent mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Badges Earned</p>
            <p className="text-2xl font-bold">3/12</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <Clock className="h-8 w-8 text-secondary mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Learning Time</p>
            <p className="text-2xl font-bold">2.5 hours</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-medium transition-all">
              <div className="flex items-start justify-between mb-4">
                <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{course.badge}</span>
                </div>
                <Button size="sm" className="gap-2">
                  <PlayCircle className="h-4 w-4" />
                  Start
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Learn;
