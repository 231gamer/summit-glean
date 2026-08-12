import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Link } from "react-router-dom";
import { Newspaper, CalendarDays, ArrowRight, Calendar, MapPin } from "lucide-react";
import { announcements, upcomingEvents } from "@/data/updates";

export default function Updates() {
  const latestNews = announcements.slice(0, 3);
  const nextEvents = upcomingEvents.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Updates"
        description="The latest news and upcoming events from Liberia Christian College."
      />
      <Header />

      <PageHero
        title="Updates"
        description="Stay connected with the latest news and upcoming events from Liberia Christian College."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Updates" }]}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container grid lg:grid-cols-2 gap-12">
          {/* News preview */}
          <ScrollReveal direction="up">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-heading font-bold text-foreground">News</h2>
              </div>
              <Link to="/updates/news" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <StaggerContainer className="space-y-4">
              {latestNews.map((item) => (
                <StaggerItem key={item.title}>
                  <Card className="overflow-hidden card-hover">
                    <div className="flex gap-4">
                      <img src={item.image} alt="" className="w-28 h-28 object-cover flex-shrink-0" loading="lazy" />
                      <CardContent className="p-4 flex-1">
                        <Badge variant="purple" className="mb-2 text-xs">
                          {item.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground text-sm leading-snug mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </CardContent>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          {/* Events preview */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-heading font-bold text-foreground">Events</h2>
              </div>
              <Link to="/updates/events" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <StaggerContainer className="space-y-4">
              {nextEvents.map((event) => (
                <StaggerItem key={event.title}>
                  <Card className="card-hover">
                    <CardContent className="p-4">
                      <Badge variant="gold" className="mb-2 text-xs">
                        {event.type}
                      </Badge>
                      <h3 className="font-semibold text-foreground text-sm leading-snug mb-2">{event.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {event.date} &middot; {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {event.location}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
