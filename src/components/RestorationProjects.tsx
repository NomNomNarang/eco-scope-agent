import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trees, MapPin, CheckCircle, Clock } from "lucide-react";

interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  verified: boolean;
  carbonOffset: string;
  image: string;
  status: "verified" | "pending" | "active";
}

const projects: Project[] = [
  {
    id: "1",
    name: "Sundarbans Mangrove Restoration",
    location: "West Bengal, India",
    type: "Blue Carbon",
    verified: true,
    carbonOffset: "125 tons/year",
    image: "mangrove",
    status: "verified"
  },
  {
    id: "2",
    name: "Amazon Rainforest Conservation",
    location: "Acre, Brazil",
    type: "Forest Conservation",
    verified: true,
    carbonOffset: "380 tons/year",
    image: "rainforest",
    status: "active"
  },
  {
    id: "3",
    name: "Coastal Seagrass Meadows",
    location: "Queensland, Australia",
    type: "Blue Carbon",
    verified: false,
    carbonOffset: "95 tons/year",
    image: "seagrass",
    status: "pending"
  }
];

const getStatusBadge = (status: Project["status"]) => {
  switch (status) {
    case "verified":
      return <Badge className="bg-success text-success-foreground gap-1"><CheckCircle className="h-3 w-3" /> Verified</Badge>;
    case "pending":
      return <Badge variant="outline" className="gap-1"><Clock className="h-3 w-3" /> Pending</Badge>;
    case "active":
      return <Badge className="bg-secondary text-secondary-foreground gap-1">Active</Badge>;
  }
};

export const RestorationProjects = () => {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Restoration Projects</h3>
        <p className="text-sm text-muted-foreground">
          Community-verified ecological restoration initiatives
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border border-border/50 overflow-hidden hover:shadow-medium transition-all bg-card"
          >
            <div className="h-48 bg-gradient-primary flex items-center justify-center">
              <Trees className="h-20 w-20 text-primary-foreground opacity-50" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-sm leading-tight">{project.name}</h4>
                {getStatusBadge(project.status)}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{project.type}</span>
                  <span className="text-sm font-medium text-primary">{project.carbonOffset}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
