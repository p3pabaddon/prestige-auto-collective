import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Shield, FileCheck, Eye } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import VehicleCard, { getVehicleImage } from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

export default function VehicleDetails() {
  const [searchParams] = useSearchParams();
  const vehicleId = searchParams.get("id") || "1";
  const vehicle = vehicles.find((v) => v.id === vehicleId) || vehicles[0];
  const related = vehicles.filter((v) => v.id !== vehicle.id).slice(0, 2);

  return (
    <main>
      <section className="pt-28 pb-4 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/inventory" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to Inventory
          </Link>
        </div>
      </section>

      {/* Hero Gallery */}
      <section className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <div className="premium-card overflow-hidden rounded-3xl">
              <img
                src={getVehicleImage(vehicle.image)}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                className="w-full aspect-[21/9] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vehicle Info */}
      <section className="px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <ScrollReveal>
              <div>
                {vehicle.tag && (
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-lg bg-secondary text-muted-foreground mb-4">
                    {vehicle.tag}
                  </span>
                )}
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tighter">
                  {vehicle.make} {vehicle.model}
                </h1>
                <p className="text-lg text-muted-foreground mt-2">{vehicle.trim} · {vehicle.year}</p>
                <p className="font-display text-3xl font-bold text-foreground mt-4 tabular-nums">
                  £{vehicle.price.toLocaleString()}
                </p>
              </div>
            </ScrollReveal>

            {/* Key Highlights */}
            <ScrollReveal>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">Key Highlights</h2>
                <div className="flex flex-wrap gap-2">
                  {vehicle.highlights.map((h) => (
                    <span key={h} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-muted-foreground">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">About This Vehicle</h2>
                <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
              </div>
            </ScrollReveal>

            {/* Specifications */}
            <ScrollReveal>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Specifications</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
                  {[
                    { label: "Engine", value: vehicle.engine },
                    { label: "Power", value: `${vehicle.horsepower} BHP` },
                    { label: "Torque", value: vehicle.torque },
                    { label: "Economy", value: vehicle.fuelEconomy },
                    { label: "Transmission", value: vehicle.transmission },
                    { label: "Drivetrain", value: vehicle.drivetrain },
                    { label: "Body Type", value: vehicle.bodyType },
                    { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} mi` },
                    { label: "Exterior", value: vehicle.exteriorColor },
                    { label: "Interior", value: vehicle.interiorColor },
                    { label: "Doors", value: String(vehicle.doors) },
                    { label: "Seats", value: String(vehicle.seats) },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-card p-4">
                      <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                      <p className="text-sm font-medium text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Inspection Note */}
            <ScrollReveal>
              <div className="premium-card p-8">
                <div className="flex items-start gap-4">
                  <Shield size={24} className="text-muted-foreground mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Inspected & Verified</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This vehicle has completed our 150-point inspection process. Mechanical systems, electrical components, interior condition, exterior finish, and documentation have all been reviewed to ensure it meets our standards before presentation.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="premium-card p-6 space-y-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">Interested?</h3>
                  <p className="text-sm text-muted-foreground">Contact our team to arrange a viewing, request additional details, or discuss financing options.</p>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-colors"
                  >
                    Request Information
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 rounded-lg border border-subtle text-foreground font-medium text-sm hover:bg-secondary transition-colors"
                  >
                    Book a Viewing
                  </Link>
                  <Link
                    to="/financing"
                    className="block w-full text-center px-6 py-3 rounded-lg border border-subtle text-foreground font-medium text-sm hover:bg-secondary transition-colors"
                  >
                    Ask About Financing
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="premium-card p-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Quick Overview</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Year", value: String(vehicle.year) },
                      { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} mi` },
                      { label: "Fuel", value: vehicle.fuelType },
                      { label: "Transmission", value: vehicle.transmission },
                      { label: "Drivetrain", value: vehicle.drivetrain },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground tracking-tighter mb-8">You May Also Like</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
