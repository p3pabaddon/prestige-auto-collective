import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <PageHeader
        title="Get in Touch"
        subtitle="Contact Us"
        description="Whether you have a question about a specific vehicle, want to discuss financing, or simply wish to visit our showroom — we are here to help."
      />

      <section className="section-padding-sm">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="premium-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <h3 className="font-display text-2xl font-bold text-foreground">Thank You</h3>
                    <p className="mt-4 text-muted-foreground">Your message has been received. Our team will respond within one working day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-2 block">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-subtle text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-2 block">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-subtle text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-2 block">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-subtle text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
                          placeholder="+44 (0) 7000 000000"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-2 block">Interested Vehicle</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-subtle text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
                          placeholder="e.g. Executive S-Class AMG"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-2 block">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-subtle text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="financing" className="rounded border-subtle" />
                      <label htmlFor="financing" className="text-xs text-muted-foreground">
                        I am interested in financing options
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Showroom Address", lines: ["123 Prestige Boulevard", "London, SW1A 1AA", "United Kingdom"] },
                  { icon: Phone, title: "Telephone", lines: ["+44 (0) 20 7946 0958"] },
                  { icon: Mail, title: "Email", lines: ["enquiries@prestigeauto.com"] },
                  { icon: Clock, title: "Opening Hours", lines: ["Mon – Fri: 9:00 – 18:00", "Saturday: 10:00 – 16:00", "Sunday: By Appointment"] },
                ].map((item) => (
                  <div key={item.title} className="premium-card p-6">
                    <div className="flex items-start gap-4">
                      <item.icon size={20} className="text-muted-foreground mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h3 className="font-display text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                        {item.lines.map((line) => (
                          <p key={line} className="text-sm text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map Placeholder */}
                <div className="premium-card overflow-hidden rounded-3xl">
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={32} className="text-muted-foreground mx-auto mb-2" strokeWidth={1} />
                      <p className="text-xs text-muted-foreground">Interactive Map</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
