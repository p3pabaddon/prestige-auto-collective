import { Link } from "react-router-dom";
import { ArrowRight, Shield, Eye, Search, Wrench, FileCheck, Car } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import qualityDetailImg from "@/assets/quality-detail.jpg";
import showroomImg from "@/assets/showroom.jpg";

export default function Quality() {
  return (
    <main>
      <PageHeader
        title="Our Quality Standards"
        subtitle="The Standard of Selection"
        description="We do not list vehicles that fail to meet our standards. Every car in our showroom has earned its place through rigorous evaluation."
      />

      {/* Philosophy */}
      <section className="section-padding gradient-radial-right">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              Quality Over Quantity
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our inventory is deliberately small. We believe that every vehicle presented to our buyers should meet a standard of excellence that justifies the trust placed in us. We source with intention, evaluate with rigour, and present with pride.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We reject the volume-driven model that dominates the used car market. Instead, we apply strict criteria to every vehicle we consider — assessing condition, provenance, specification, and presentation potential before any commitment is made.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="premium-card overflow-hidden rounded-3xl">
              <img src={qualityDetailImg} alt="Premium vehicle detail" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Vehicle Selection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              What We Look For
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Condition Assessment", desc: "Interior and exterior condition must meet our visual standards. We look for vehicles that have been cared for, not just maintained." },
              { icon: FileCheck, title: "Service History", desc: "Documented maintenance records are prioritized. A complete service history tells us the vehicle has been treated with respect." },
              { icon: Shield, title: "Mechanical Confidence", desc: "Mechanical integrity is non-negotiable. Every system must function as intended, from engine performance to braking efficiency." },
              { icon: Search, title: "Ownership Profile", desc: "We consider the vehicle's ownership history, including the number of previous keepers and the nature of its use." },
              { icon: Car, title: "Specification Quality", desc: "We favor well-specified vehicles that offer genuine value. The right options make the difference between good and exceptional." },
              { icon: Wrench, title: "Presentation Potential", desc: "Every vehicle must be capable of being presented to showroom standard. If it cannot look exceptional, it does not belong here." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  <item.icon size={24} className="text-muted-foreground mb-4" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 150-Point Inspection */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">150-Point Inspection</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
                Comprehensive Evaluation
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every vehicle undergoes our 150-point inspection process, covering six critical areas to ensure it meets the standards our buyers expect.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mechanical Systems", points: ["Engine performance and condition", "Transmission operation", "Suspension and steering", "Braking system integrity", "Cooling and exhaust systems"] },
              { title: "Electrical & Electronic", points: ["Battery and charging system", "Lighting and visibility", "Infotainment and connectivity", "Driver assistance systems", "Climate control operation"] },
              { title: "Exterior Assessment", points: ["Paintwork condition and consistency", "Panel alignment and gaps", "Glass and trim integrity", "Wheel and tyre condition", "Underside inspection"] },
              { title: "Interior Evaluation", points: ["Upholstery condition", "Dashboard and controls", "Carpet and headlining", "Storage and cargo areas", "Odour and cleanliness"] },
              { title: "Safety Systems", points: ["Airbag system verification", "Seatbelt condition", "Structural integrity", "ADAS calibration check", "Emergency equipment"] },
              { title: "Documentation & History", points: ["Service record verification", "MOT history analysis", "Previous ownership review", "Outstanding finance check", "Mileage verification"] },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="premium-card overflow-hidden rounded-3xl">
              <img src={showroomImg} alt="Showroom preparation" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Preparation</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              Showroom-Ready, Every Time
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Once a vehicle passes our inspection, it enters our preparation process. Professional detailing restores the vehicle to its best possible presentation, while accurate photography ensures that what you see online matches what you find in our showroom.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Professional exterior and interior detailing",
                "Paint correction where necessary",
                "Accurate, high-quality photography",
                "Comprehensive listing with honest descriptions",
                "Final quality review before presentation",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-radial-right">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter max-w-xl mx-auto">
              See Our Standards in Action
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Browse our current inventory and see the results of our quality-first approach.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/inventory" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale">
                Browse Inventory <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
