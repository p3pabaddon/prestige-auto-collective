import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { vehicles } from "@/data/vehicles";

const bodyTypes = ["All", "Sedan", "SUV", "Coupé", "Sportback", "Estate"];
const fuelTypes = ["All", "Petrol", "Diesel", "Hybrid"];
const transmissions = ["All", "Automatic", "Manual"];

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [bodyType, setBodyType] = useState("All");
  const [fuelType, setFuelType] = useState("All");
  const [transmission, setTransmission] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchSearch = search === "" || `${v.make} ${v.model} ${v.trim}`.toLowerCase().includes(search.toLowerCase());
      const matchBody = bodyType === "All" || v.bodyType === bodyType;
      const matchFuel = fuelType === "All" || v.fuelType === fuelType;
      const matchTrans = transmission === "All" || v.transmission === transmission;
      return matchSearch && matchBody && matchFuel && matchTrans;
    });
  }, [search, bodyType, fuelType, transmission]);

  const activeFilters = [bodyType, fuelType, transmission].filter((f) => f !== "All").length;

  return (
    <main>
      <PageHeader
        title="Our Inventory"
        subtitle="Vehicle Collection"
        description="Every vehicle in our showroom has been individually selected, thoroughly inspected, and prepared to the highest standard."
      />

      <section className="section-padding-sm">
        <div className="max-w-[1400px] mx-auto">
          {/* Search & Filter Bar */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by make, model, or trim..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-card border border-subtle text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-subtle text-sm text-foreground hover:bg-secondary transition-colors"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFilters > 0 && (
                  <span className="ml-1 px-2 py-0.5 rounded-md bg-foreground text-background text-xs font-medium">
                    {activeFilters}
                  </span>
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Filter Panel */}
          {showFilters && (
            <ScrollReveal direction="none">
              <div className="premium-card p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">Body Type</label>
                    <div className="flex flex-wrap gap-2">
                      {bodyTypes.map((t) => (
                        <button
                          key={t}
                          onClick={() => setBodyType(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            bodyType === t
                              ? "bg-foreground text-background"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">Fuel Type</label>
                    <div className="flex flex-wrap gap-2">
                      {fuelTypes.map((t) => (
                        <button
                          key={t}
                          onClick={() => setFuelType(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            fuelType === t
                              ? "bg-foreground text-background"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">Transmission</label>
                    <div className="flex flex-wrap gap-2">
                      {transmissions.map((t) => (
                        <button
                          key={t}
                          onClick={() => setTransmission(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            transmission === t
                              ? "bg-foreground text-background"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {activeFilters > 0 && (
                  <button
                    onClick={() => { setBodyType("All"); setFuelType("All"); setTransmission("All"); }}
                    className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    <X size={12} /> Clear all filters
                  </button>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Results */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filtered.length} vehicle{filtered.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No vehicles match your current filters.</p>
              <button
                onClick={() => { setSearch(""); setBodyType("All"); setFuelType("All"); setTransmission("All"); }}
                className="mt-4 text-sm text-foreground hover:text-primary transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
