import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const news = [
  {
    category: "Research",
    title: "Breakthrough in Renewable Energy Storage Achieved by Research Team",
    excerpt: "University scientists have developed a revolutionary battery technology that could transform how we store renewable energy.",
    date: "December 18, 2024",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
    featured: true,
  },
  {
    category: "Campus",
    title: "New Student Center Opens Spring 2025",
    excerpt: "The state-of-the-art facility will include study spaces, dining options, and recreational areas.",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    featured: false,
  },
  {
    category: "Achievement",
    title: "Alumni Receives Nobel Prize in Chemistry",
    excerpt: "Dr. Sarah Chen, Class of 1998, honored for groundbreaking work in molecular synthesis.",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    featured: false,
  },
];

const events = [
  {
    title: "Open House for Prospective Students",
    date: "January 15, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Main Campus",
    type: "Admissions",
  },
  {
    title: "Guest Lecture: Future of AI in Healthcare",
    date: "January 20, 2025",
    time: "4:00 PM",
    location: "Science Center Auditorium",
    type: "Academic",
  },
  {
    title: "Winter Career Fair 2025",
    date: "January 25, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Student Center",
    type: "Career",
  },
  {
    title: "Research Symposium",
    date: "February 1, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Research Center",
    type: "Research",
  },
];

export function NewsEventsSection() {
  return (
    <section className="py-20 lg:py-28 gradient-subtle">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* News Column */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                  Latest News
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  What's Happening
                </h2>
              </div>
              <Button variant="tertiary" className="hidden sm:flex">
                All News
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Featured News */}
              <Card className="overflow-hidden card-hover" featured>
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img
                      src={news[0].image}
                      alt={news[0].title}
                      className="h-48 md:h-full w-full object-cover"
                    />
                    <Badge variant="gold" className="absolute top-4 left-4">
                      Featured
                    </Badge>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <Badge variant="purple" className="mb-3">
                      {news[0].category}
                    </Badge>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {news[0].title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{news[0].excerpt}</p>
                    <span className="text-sm text-muted-foreground">{news[0].date}</span>
                  </div>
                </div>
              </Card>

              {/* Other News */}
              <div className="grid sm:grid-cols-2 gap-6">
                {news.slice(1).map((item) => (
                  <Card key={item.title} className="overflow-hidden card-hover">
                    <div className="relative h-40">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <Badge variant="purple" className="mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="font-heading font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {item.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Events Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-2">
                  Upcoming
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Events
                </h2>
              </div>
              <Button variant="tertiary" className="hidden sm:flex">
                Full Calendar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <Card
                  key={event.title}
                  className={`p-4 card-hover ${index === 0 ? "border-l-4 border-l-accent" : ""}`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase">
                        {new Date(event.date).toLocaleString("default", { month: "short" })}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge
                        variant={index === 0 ? "gold" : "purple"}
                        className="mb-1 text-xs"
                      >
                        {event.type}
                      </Badge>
                      <h4 className="font-medium text-foreground mb-1 line-clamp-1 hover:text-primary transition-colors cursor-pointer">
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6">
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
