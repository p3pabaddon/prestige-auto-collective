import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Eye, Handshake, Car, FileCheck, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import VehicleCard, { getVehicleImage } from "@/components/VehicleCard";
import { vehicles, soldVehicles, blogPosts } from "@/data/vehicles";
import heroCarImg from "@/assets/hero-car.jpg";
import showroomImg from "@/assets/showroom.jpg";
import qualityDetailImg from "@/assets/quality-detail.jpg";

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const featured = vehicles.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={heroCarImg}
            alt="Premium luxury sedan in dark showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-medium">
              Premium Vehicle Curation
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[0.95]">
              Driven by Quality.<br />
              <span className="text-gradient">Defined by Trust.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg">
              We do not move volume — we curate excellence. Every vehicle in our showroom has passed a rigorous 150-point technical evaluation, ensuring that the drive home is as flawless as the first mile.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/inventory"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale"
              >
                Browse Inventory
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/quality"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-subtle text-foreground font-medium text-sm hover:bg-secondary transition-all duration-300"
              >
                Our Standards
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.2, 0, 0, 1] }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "150+", label: "Point Inspection" },
              { value: "200+", label: "Vehicles Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "12+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding gradient-radial-right">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
              About Prestige Auto
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tighter">
              The Standard of Selection
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded on the principle that every vehicle purchase should feel secure, exciting, and elevated, Prestige Auto has established itself as a trusted destination for discerning buyers who value quality over quantity.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our sourcing process is built around condition, provenance, and presentation. We believe that a premium vehicle should look, feel, and drive as though it has been cared for with genuine respect — because the vehicles we choose have been.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="premium-card overflow-hidden rounded-3xl">
              <img
                src={showroomImg}
                alt="Premium automotive showroom"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
                  Featured Inventory
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
                  Selected for Excellence
                </h2>
              </div>
              <Link
                to="/inventory"
                className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/inventory" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
              View All Inventory <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
                Quality Assurance
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
                Every Vehicle Earns Its Place
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We do not list vehicles that fail to meet our standards. Our 150-point evaluation ensures mechanical confidence, aesthetic integrity, and documented provenance.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Rigorous Inspection", desc: "Every vehicle undergoes a comprehensive mechanical, electrical, and aesthetic evaluation before presentation." },
              { icon: FileCheck, title: "Documented History", desc: "Service records, ownership timeline, and maintenance history reviewed and verified for transparency." },
              { icon: Eye, title: "Condition Transparency", desc: "Honest, detailed descriptions with accurate photography. No surprises, no hidden concerns." },
              { icon: Car, title: "Curated Selection", desc: "Quality over quantity. We source vehicles that meet strict criteria for condition, specification, and value." },
              { icon: Sparkles, title: "Showroom Preparation", desc: "Professional detailing, presentation, and photography ensure every vehicle looks its absolute best." },
              { icon: Handshake, title: "Customer-First Service", desc: "Clear communication, professional guidance, and support throughout your purchase journey." },
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
          <div className="text-center mt-10">
            <Link to="/quality" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2">
              Explore Our Standards <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="premium-card overflow-hidden rounded-3xl">
              <img
                src={qualityDetailImg}
                alt="Premium leather interior detail"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
              The Prestige Difference
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
              Why Buyers Choose Us
            </h2>
            <div className="mt-8 space-y-6">
              {[
                { title: "Curated, Not Collected", desc: "Every vehicle is individually selected against strict quality criteria. We turn away far more than we accept." },
                { title: "Transparent from Day One", desc: "No hidden fees, no surprises. Full disclosure of vehicle history, condition, and pricing rationale." },
                { title: "Financing That Fits", desc: "Flexible financing structures tailored to your circumstances. Professional guidance without pressure." },
                { title: "Premium Experience, Every Time", desc: "From first inquiry to collection day, expect a buying experience that matches the quality of the vehicle." },
              ].map((item) => (
                <div key={item.title} className="border-t border-subtle pt-6">
                  <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sold Preview */}
      <section className="section-padding gradient-radial-right">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
                  Recently Delivered
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
                  Proof of Excellence
                </h2>
              </div>
              <Link
                to="/sold"
                className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {soldVehicles.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} sold />
            ))}
          </div>
        </div>
      </section>

      {/* Financing Preview */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
              Purchase Support
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter max-w-xl mx-auto">
              Flexible Financing, Clear Process
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg mx-auto">
              We work with trusted finance partners to offer competitive, transparent financing solutions that make premium vehicles accessible without compromise.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/financing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale"
              >
                Explore Financing <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium">
                  The Journal
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter">
                  Insight & Expertise
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <Link to="/blog" className="group block premium-card overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getVehicleImage(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="premium-card p-12 md:p-20 text-center gradient-radial-right rounded-3xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tighter max-w-xl mx-auto">
                Ready to Find Your Next Vehicle?
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Browse our curated inventory, speak with an advisor, or schedule a showroom visit. The right car, the right way.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/inventory"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale"
                >
                  Browse Inventory <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-subtle text-foreground font-medium text-sm hover:bg-secondary transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
