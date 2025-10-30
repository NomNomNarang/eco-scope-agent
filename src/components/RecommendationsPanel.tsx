import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ChevronRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
  difficulty: "easy" | "medium" | "hard";
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    title: "Enable Smart Email Scheduling",
    description: "Automatically batch non-urgent emails to reduce server load",
    impact: "~2.5 kg CO₂/month",
    difficulty: "easy"
  },
  {
    id: "2",
    title: "Optimize Video Streaming Quality",
    description: "AI adjusts video quality based on your network and device",
    impact: "~4.2 kg CO₂/month",
    difficulty: "easy"
  },
  {
    id: "3",
    title: "Archive Old Cloud Files",
    description: "Move inactive files to cold storage automatically",
    impact: "~3.8 kg CO₂/month",
    difficulty: "medium"
  }
];

const getDifficultyColor = (difficulty: Recommendation["difficulty"]) => {
  switch (difficulty) {
    case "easy": return "text-success";
    case "medium": return "text-warning";
    case "hard": return "text-destructive";
  }
};

export const RecommendationsPanel = () => {
  const handleEnable = (title: string) => {
    toast.success(`${title} enabled!`, {
      description: "Your carbon reduction workflow is now active.",
    });
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-semibold">AI Recommendations</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Personalized suggestions to reduce your carbon footprint
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-soft bg-muted/20"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Lightbulb className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{rec.title}</h4>
                  <span className={`text-xs uppercase font-medium ${getDifficultyColor(rec.difficulty)}`}>
                    {rec.difficulty}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    Impact: {rec.impact}
                  </span>
                  <Button 
                    size="sm" 
                    className="gap-1"
                    onClick={() => handleEnable(rec.title)}
                  >
                    Enable
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
