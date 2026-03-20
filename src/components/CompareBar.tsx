import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Vehicle } from "@/data/vehicles";
import { getVehicleImage } from "@/components/VehicleCard";

interface CompareBarProps {
  vehicles: Vehicle[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CompareBar({ vehicles, onRemove, onClear }: CompareBarProps) {
  if (vehicles.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-subtle"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-x-auto">
          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
            Compare ({vehicles.length}/3)
          </span>
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary shrink-0"
            >
              <img
                src={getVehicleImage(v.image)}
                alt={`${v.make} ${v.model}`}
                className="w-8 h-8 rounded object-cover"
              />
              <span className="text-xs font-medium text-foreground whitespace-nowrap">
                {v.make} {v.model}
              </span>
              <button
                onClick={() => onRemove(v.id)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onClear}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear
          </button>
          {vehicles.length >= 2 && (
            <Link
              to={`/compare?ids=${vehicles.map((v) => v.id).join(",")}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-xs font-medium hover:bg-primary transition-colors"
            >
              Compare <ArrowRight size={12} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
