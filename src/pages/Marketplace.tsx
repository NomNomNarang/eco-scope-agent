import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, TrendingUp, CheckCircle, Clock } from "lucide-react";

const carbonCredits = [
  {
    id: "1",
    name: "Mangrove Blue Carbon Credits",
    location: "Southeast Asia",
    price: "$25/ton",
    available: "500 tons",
    verified: true,
    rating: 4.8
  },
  {
    id: "2",
    name: "Rainforest Conservation Credits",
    location: "Amazon Basin",
    price: "$32/ton",
    available: "1,200 tons",
    verified: true,
    rating: 4.9
  },
  {
    id: "3",
    name: "Seagrass Restoration Credits",
    location: "Pacific Coast",
    price: "$28/ton",
    available: "350 tons",
    verified: true,
    rating: 4.7
  },
  {
    id: "4",
    name: "Coastal Wetland Credits",
    location: "Gulf of Mexico",
    price: "$30/ton",
    available: "800 tons",
    verified: false,
    rating: 4.5
  }
];

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Carbon Credits Marketplace
          </h1>
          <p className="text-lg text-muted-foreground">
            Trade verified carbon credits from community-led restoration projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <ShoppingBag className="h-8 w-8 text-primary mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Total Volume</p>
            <p className="text-2xl font-bold">45,890 tons</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <TrendingUp className="h-8 w-8 text-success mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Avg. Price</p>
            <p className="text-2xl font-bold">$28.50/ton</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <CheckCircle className="h-8 w-8 text-accent mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Verified Credits</p>
            <p className="text-2xl font-bold">89%</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <Clock className="h-8 w-8 text-secondary mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Active Listings</p>
            <p className="text-2xl font-bold">247</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {carbonCredits.map((credit) => (
            <Card key={credit.id} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-medium transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{credit.name}</h3>
                  <p className="text-sm text-muted-foreground">{credit.location}</p>
                </div>
                {credit.verified ? (
                  <Badge className="bg-success text-success-foreground gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </Badge>
                ) : (
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    Pending
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price per ton</p>
                  <p className="text-xl font-bold text-primary">{credit.price}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Available</p>
                  <p className="text-xl font-bold">{credit.available}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-muted-foreground">Rating:</span>
                  <span className="text-sm font-medium text-accent">{credit.rating}/5.0</span>
                </div>
                <Button>Purchase Credits</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
