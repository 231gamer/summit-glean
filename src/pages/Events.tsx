import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { Calendar, Clock, MapPin, Archive } from "lucide-react";
import { upcomingEvents } from "@/data/updates";

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Events"
        description="Upcoming events and campus gatherings at Liberia Christian College."
      />
      <Header />

      <PageHero
        eyebrow="Updates"
        title="Events"
        description="Campus gatherings, admissions events, and institutional milestones at LCC."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Updates", href: "/updates" },
          { label: "Events" },
        ]}
      />

      {/* Upcoming Events */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Upcoming Events</h2>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.title}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <Badge variant="gold" className="mb-3">
                      {event.type}
                    </Badge>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-2xl text-center">
          <Archive className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Past Events</h2>
          <p className="text-muted-foreground">
            A record of past LCC events will be published here as our events archive is built out.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
