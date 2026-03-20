import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Minus } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { getVehicleImage } from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";

const specRows = [
  { label: "Year", get: (v: typeof vehicles[0]) => String(v.year) },
  { label: "Price", get: (v: typeof vehicles[0]) => `£${v.price.toLocaleString()}` },
  { label: "Mileage", get: (v: typeof vehicles[0]) => `${v.mileage.toLocaleString()} mi` },
  { label: "Engine", get: (v: typeof vehicles[0]) => v.engine },
  { label: "Power", get: (v: typeof vehicles[0]) => `${v.horsepower} BHP` },
  { label: "Torque", get: (v: typeof vehicles[0]) => v.torque },
  { label: "Fuel Type", get: (v: typeof vehicles[0]) => v.fuelType },
  { label: "Economy", get: (v: typeof vehicles[0]) => v.fuelEconomy },
  { label: "Transmission", get: (v: typeof vehicles[0]) => v.transmission },
  { label: "Drivetrain", get: (v: typeof vehicles[0]) => v.drivetrain },
  { label: "Body Type", get: (v: typeof vehicles[0]) => v.bodyType },
  { label: "Exterior", get: (v: typeof vehicles[0]) => v.exteriorColor },
  { label: "Interior", get: (v: typeof vehicles[0]) => v.interiorColor },
  { label: "Doors", get: (v: typeof vehicles[0]) => String(v.doors) },
  { label: "Seats", get: (v: typeof vehicles[0]) => String(v.seats) },
];

export default function Compare() {
  const [searchParams] = useSearchParams();
  const ids = (searchParams.get("ids") || "").split(",").filter(Boolean);
  const compareVehicles = ids
    .map((id) => vehicles.find((v) => v.id === id))
    .filter(Boolean) as typeof vehicles;

  if (compareVehicles.length < 2) {
    return (
      <main className="pt-32 pb-20 text-center">
        <p className="text-muted-foreground mb-4">Select at least 2 vehicles to compare.</p>
        <Link to="/inventory" className="text-sm text-foreground hover:text-primary transition-colors">
          ← Back to Inventory
        </Link>
      </main>
    );
  }

  const colWidth = compareVehicles.length === 2 ? "w-1/2" : "w-1/3";

  return (
    <main>
      <section className="pt-28 pb-4 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/inventory" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to Inventory
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter mb-10">
              Vehicle Comparison
            </h1>
          </ScrollReveal>

          {/* Vehicle Headers */}
          <ScrollReveal>
            <div className="flex gap-4 mb-8">
              {compareVehicles.map((v) => (
                <div key={v.id} className={`${colWidth} premium-card overflow-hidden`}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getVehicleImage(v.image)}
                      alt={`${v.make} ${v.model}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {v.make} {v.model}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{v.trim} · {v.year}</p>
                    <p className="font-display text-xl font-bold text-foreground mt-2 tabular-nums">
                      £{v.price.toLocaleString()}
                    </p>
                    <Link
                      to={`/vehicle-details?id=${v.id}`}
                      className="inline-block mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View Full Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Specs Table */}
          <ScrollReveal>
            <div className="premium-card overflow-hidden">
              <div className="p-5 border-b border-subtle">
                <h2 className="font-display text-lg font-semibold text-foreground">Specifications</h2>
              </div>
              {specRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center ${i % 2 === 0 ? "bg-card" : "bg-secondary/30"}`}
                >
                  <div className="w-36 md:w-48 shrink-0 px-5 py-3.5">
                    <span className="text-xs font-medium text-muted-foreground">{row.label}</span>
                  </div>
                  <div className="flex flex-1">
                    {compareVehicles.map((v) => (
                      <div key={v.id} className={`${colWidth} px-5 py-3.5`}>
                        <span className="text-sm text-foreground">{row.get(v)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal>
            <div className="premium-card overflow-hidden mt-6">
              <div className="p-5 border-b border-subtle">
                <h2 className="font-display text-lg font-semibold text-foreground">Key Highlights</h2>
              </div>
              <div className="flex">
                {compareVehicles.map((v) => (
                  <div key={v.id} className={`${colWidth} p-5`}>
                    <ul className="space-y-2">
                      {v.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check size={12} className="text-foreground shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
