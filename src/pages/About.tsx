import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import showroomImg from "@/assets/showroom.jpg";
import qualityDetailImg from "@/assets/quality-detail.jpg";

export default function About() {
  return (
    <main>
      <PageHeader
        title="About Prestige Auto"
        subtitle="Our Story"
        description="Built on automotive passion, guided by integrity, and driven by the belief that every vehicle purchase should feel secure, exciting, and elevated."
      />

      {/* Intro */}
      <section className="section-padding gradient-radial-right">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="premium-card overflow-hidden rounded-3xl">
              <img src={showroomImg} alt="Prestige Auto showroom" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              Quality Over Quantity, Always
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Prestige Auto was founded on a simple conviction: the premium used car market deserves better. Too often, exceptional vehicles are presented without the care, transparency, or professionalism they warrant.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We established our showroom to change that narrative — creating a space where carefully selected vehicles are presented with the same attention to detail and respect that defined them when they first left the factory.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over a decade of automotive experience, our team understands that buying a premium vehicle is more than a transaction. It is a decision that deserves confidence, clarity, and a genuine commitment to the buyer's best interests.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Our Philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              Every Vehicle Should Earn Its Place
            </h2>
          </ScrollReveal>
          <div className="mt-12 space-y-8">
            {[
              { title: "Curation, Not Collection", desc: "We reject the high-volume model. Every vehicle in our showroom has been individually assessed against strict condition, specification, and value criteria. We turn away far more than we accept — because our reputation depends on what we choose to present." },
              { title: "Transparency as Foundation", desc: "Trust is built through clarity, not claims. We provide honest, detailed descriptions, accurate photography, documented histories, and straightforward pricing. If a vehicle has a concern, we disclose it. Our relationship with each buyer is more valuable than any single sale." },
              { title: "Presentation Reflects Standards", desc: "The way a vehicle is prepared and presented tells you everything about the business behind it. Every car in our showroom receives professional detailing, careful photography, and a presentation standard that we believe matches the vehicle's pedigree." },
              { title: "The Purchase Should Feel Right", desc: "We believe a vehicle purchase should feel exciting and secure — never pressured or uncertain. Our team provides professional guidance, clear information, and genuine support throughout the process, from first inquiry to collection day." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="border-t border-subtle pt-8">
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Our Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              From Source to Showroom
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Vehicle Sourcing", desc: "We identify vehicles that meet our condition, specification, and provenance requirements from trusted channels." },
              { step: "02", title: "Comprehensive Inspection", desc: "Every vehicle undergoes our 150-point evaluation covering mechanical, electrical, aesthetic, and safety systems." },
              { step: "03", title: "Professional Preparation", desc: "Detailing, photography, and presentation to showroom standards. Every vehicle is prepared as if for its first owner." },
              { step: "04", title: "Customer Experience", desc: "From inquiry to collection, our team provides clear communication, professional guidance, and genuine support." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  <span className="font-display text-3xl font-bold text-muted-foreground/30">{item.step}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Our Showroom</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              A Space That Reflects Our Standards
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our showroom is designed to provide a comfortable, professional environment where you can explore our curated inventory without pressure. Each vehicle is presented in the best possible light, allowing you to appreciate the quality and condition that defines our selection.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team is available to answer questions, provide vehicle histories, and guide you through the process at your own pace. We believe in informed decisions, not hurried ones.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Schedule a Visit <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="premium-card overflow-hidden rounded-3xl">
              <img src={qualityDetailImg} alt="Premium vehicle interior detail" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-radial-right">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter max-w-xl mx-auto">
              Experience the Difference
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Explore our inventory or visit our showroom to see our standards firsthand.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/inventory" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale">
                Browse Inventory <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-subtle text-foreground font-medium text-sm hover:bg-secondary transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
