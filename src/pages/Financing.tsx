import { Link } from "react-router-dom";
import { ArrowRight, CreditCard, FileText, Shield, Users, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function Financing() {
  return (
    <main>
      <PageHeader
        title="Financing Support"
        subtitle="Purchase Planning"
        description="We work with trusted finance partners to make premium vehicles accessible through transparent, flexible financing solutions."
      />

      {/* Intro */}
      <section className="section-padding gradient-radial-right">
        <div className="max-w-[1400px] mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              Making Premium Accessible
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A premium vehicle should never feel out of reach simply because of how the purchase is structured. Our financing support is designed to bridge the gap between aspiration and ownership, with clarity and professionalism at every step.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We partner with established, regulated finance providers to offer competitive rates across multiple structures — ensuring you find the arrangement that genuinely suits your circumstances, not just the one that suits us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">How It Works</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              A Clear, Simple Process
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Choose Your Vehicle", desc: "Browse our curated inventory and identify the vehicle that meets your needs. Our team can help narrow the options based on your requirements." },
              { step: "02", title: "Discuss Your Options", desc: "Speak with our finance advisors about your budget, preferred structure, and timeline. We will outline the available options clearly and honestly." },
              { step: "03", title: "Review & Apply", desc: "Once you have chosen your preferred financing structure, we guide you through the application process with full support and transparency." },
              { step: "04", title: "Receive Your Decision", desc: "Our finance partners process applications efficiently. We keep you informed at every stage and work to resolve any queries promptly." },
              { step: "05", title: "Finalize Your Purchase", desc: "With finance approved, we prepare your vehicle for collection. All paperwork is handled professionally to ensure a smooth handover." },
              { step: "06", title: "Drive Away with Confidence", desc: "Collect your vehicle knowing that your purchase is structured properly, your financing is competitive, and your investment is protected." },
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

      {/* Benefits */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">Why Finance With Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              The Prestige Advantage
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: "Competitive Rates", desc: "Access to market-leading rates from our panel of trusted, regulated finance partners." },
              { icon: FileText, title: "Full Transparency", desc: "Clear terms, no hidden fees, and honest guidance about costs and commitments." },
              { icon: Shield, title: "Regulated Partners", desc: "All our finance partners are FCA-regulated, ensuring your interests are protected." },
              { icon: Users, title: "Personal Support", desc: "A dedicated advisor guides you through the process from inquiry to completion." },
              { icon: CheckCircle, title: "Flexible Structures", desc: "HP, PCP, and lease options tailored to your budget and ownership preferences." },
              { icon: ArrowRight, title: "Quick Decisions", desc: "Efficient application processing with prompt communication at every stage." },
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

      {/* Documents */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              What You Will Need
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              To ensure a smooth application process, please have the following ready:
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Valid photo identification (passport or driving licence)",
                "Proof of address (utility bill or bank statement, within 3 months)",
                "Proof of income (payslips, tax returns, or bank statements)",
                "Bank details for direct debit setup",
                "Details of any existing finance commitments",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                  <span>{item}</span>
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
              Ready to Discuss Financing?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Our finance advisors are ready to help you find the right structure for your next vehicle.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale">
                Contact Our Team <ArrowRight size={16} />
              </Link>
              <Link to="/inventory" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-subtle text-foreground font-medium text-sm hover:bg-secondary transition-all duration-300">
                Browse Inventory
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
