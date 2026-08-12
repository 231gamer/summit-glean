import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { announcements } from "@/data/updates";

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="News"
        description="The latest news and announcements from Liberia Christian College."
      />
      <Header />

      <PageHero
        eyebrow="Updates"
        title="News"
        description="Announcements, milestones, and stories from across Liberia Christian College."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Updates", href: "/updates" },
          { label: "News" },
        ]}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full overflow-hidden card-hover">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={item.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="purple" className="mb-3 text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="font-heading font-bold text-foreground leading-snug mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
