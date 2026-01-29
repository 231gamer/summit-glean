import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Clock, TrendingUp, BookOpen, Users } from "lucide-react";
import { announcements, upcomingEvents } from "@/data/updates";

// Extended announcements data - you'll need to update your data file
const extendedAnnouncements = [
  ...announcements,
  // {
  //   title: "New Scholarship Opportunities Available",
  //   date: "January 15, 2025",
  //   category: "Financial Aid",
  //   image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop&q=80",
  // },
  // {
  //   title: "Campus Infrastructure Upgrades Complete",
  //   date: "January 5, 2025",
  //   category: "Campus",
  //   image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=400&fit=crop&q=80",
  // },
  // {
  //   title: "Faculty Excellence Awards 2024",
  //   date: "December 28, 2024",
  //   category: "Academic",
  //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&q=80",
  // },
];

export function NewsEventsSection() {
  return (
    <section className="pt-16 lg:pt-20 pb-20 lg:pb-28 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4" />
            Campus Updates
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 tracking-tight">
            News & Events
            <span className="block text-primary text-3xl md:text-4xl mt-3">
              Stay Connected
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Latest announcements, campus events, and important dates for the LCC community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Announcements - 6 cards */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Latest Announcements
                </h2>
                <p className="text-muted-foreground mt-2">Important updates from campus</p>
              </div>
              <Button 
                variant="outline" 
                className="hidden sm:flex hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
              >
                View All Updates
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extendedAnnouncements.map((item, index) => (
                <Card 
                  key={`${item.title}-${index}`} 
                  className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Gold accent bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge 
                        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-foreground border-0"
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                    
                    <h3 className="font-heading font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                      {item.title}
                    </h3>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 h-auto text-primary hover:text-amber-600 hover:bg-transparent group/read"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1 group-hover/read:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Button for mobile */}
            <div className="mt-8 text-center sm:hidden">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
              >
                View All Updates
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">Upcoming Events</h2>
                    <p className="text-sm text-muted-foreground">Mark your calendar</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <Card
                      key={event.title}
                      className={`group relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 ${
                        index === 0 ? "border-l-4 border-l-amber-500" : ""
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          {/* Date Box */}
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex flex-col items-center justify-center group-hover:scale-105 transition-transform">
                              <span className="text-lg font-bold text-primary">
                                {new Date(event.date).getDate()}
                              </span>
                              <span className="text-xs text-muted-foreground uppercase">
                                {new Date(event.date).toLocaleString("default", {
                                  month: "short",
                                })}
                              </span>
                            </div>
                          </div>
                          
                          {/* Event Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <Badge
                                variant={index === 0 ? "default" : "outline"}
                                className={`text-xs ${
                                  index === 0 
                                    ? "bg-amber-500 text-white" 
                                    : "bg-primary/10 text-primary"
                                }`}
                              >
                                {event.type}
                              </Badge>
                              {index === 0 && (
                                <span className="text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                            
                            <h4 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                              {event.title}
                            </h4>
                            
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span className="line-clamp-1">{event.location}</span>
                              </div>
                            </div>
                            
                            {index === 0 && (
                              <Button 
                                size="sm" 
                                className="w-full mt-3 bg-amber-500 hover:bg-amber-600 text-white text-xs"
                              >
                                Register Now
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-6 hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
                >
                  View Full Calendar
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <p className="text-xs text-muted-foreground">Events Yearly</p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <p className="text-xs text-muted-foreground">Open to Public</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}