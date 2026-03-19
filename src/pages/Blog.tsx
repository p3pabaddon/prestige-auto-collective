import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { getVehicleImage } from "@/components/VehicleCard";
import { blogPosts } from "@/data/vehicles";

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main>
      <PageHeader
        title="The Journal"
        subtitle="Insight & Expertise"
        description="Expert perspectives on premium vehicles, ownership, and the automotive market — written to inform, not to sell."
      />

      <section className="section-padding-sm">
        <div className="max-w-[1400px] mx-auto">
          {/* Featured */}
          <ScrollReveal>
            <div className="premium-card overflow-hidden rounded-3xl mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={getVehicleImage(featured.image)}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span>{featured.category}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <div className="group premium-card overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getVehicleImage(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
