import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import VehicleCard from "@/components/VehicleCard";
import { soldVehicles } from "@/data/vehicles";

export default function Sold() {
  return (
    <main>
      <PageHeader
        title="Delivered Vehicles"
        subtitle="Proof of Excellence"
        description="A selection of vehicles we have recently delivered to satisfied buyers. Each one passed our rigorous standards and found its perfect owner."
      />

      <section className="section-padding-sm">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <p className="text-sm text-muted-foreground mb-8">
              {soldVehicles.length} vehicles recently delivered
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soldVehicles.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} sold />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter max-w-xl mx-auto">
              Find Your Next Vehicle
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Browse our current inventory and discover vehicles that meet our exacting standards.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/inventory" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale">
                Browse Inventory <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-subtle text-foreground font-medium text-sm hover:bg-secondary transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
