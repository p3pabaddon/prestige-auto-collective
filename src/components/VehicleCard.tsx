import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import heroCarImg from "@/assets/hero-car.jpg";
import suvImg from "@/assets/vehicle-suv.jpg";
import coupeImg from "@/assets/vehicle-coupe.jpg";
import sedanImg from "@/assets/vehicle-sedan.jpg";
import sportRedImg from "@/assets/vehicle-sport-red.jpg";
import estateImg from "@/assets/vehicle-estate.jpg";

const imageMap: Record<string, string> = {
  "hero-car": heroCarImg,
  "vehicle-suv": suvImg,
  "vehicle-coupe": coupeImg,
  "vehicle-sedan": sedanImg,
  "vehicle-sport-red": sportRedImg,
  "vehicle-estate": estateImg,
};

export function getVehicleImage(key: string) {
  return imageMap[key] || heroCarImg;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
  sold?: boolean;
  compareMode?: boolean;
  isSelected?: boolean;
  onToggleCompare?: (vehicle: Vehicle) => void;
}

export default function VehicleCard({ vehicle, index = 0, sold = false, compareMode = false, isSelected = false, onToggleCompare }: VehicleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
      className="relative"
    >
      <Link
        to={`/vehicle-details?id=${vehicle.id}`}
        className="group block premium-card overflow-hidden"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={getVehicleImage(vehicle.image)}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              sold ? "grayscale group-hover:grayscale-0 transition-all duration-700" : ""
            }`}
            loading="lazy"
          />
          {vehicle.tag && !sold && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-lg bg-background/80 backdrop-blur-sm text-foreground border border-subtle">
              {vehicle.tag}
            </span>
          )}
          {sold && (
            <div className="absolute inset-0 bg-background/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <span className="text-xs font-medium text-foreground/80">Delivered</span>
                <p className="text-xs text-muted-foreground">
                  {vehicle.soldLocation}, {vehicle.soldDate}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                {vehicle.make} {vehicle.model}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">{vehicle.trim} · {vehicle.year}</p>
            </div>
            {!sold && (
              <p className="font-display text-base font-semibold text-foreground tabular-nums">
                £{vehicle.price.toLocaleString()}
              </p>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>{vehicle.mileage.toLocaleString()} mi</span>
            <span>{vehicle.fuelType}</span>
            <span>{vehicle.transmission}</span>
            <span>{vehicle.bodyType}</span>
          </div>
        </div>
      </Link>
      {compareMode && onToggleCompare && (
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onToggleCompare(vehicle); }}
          className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            isSelected
              ? "bg-foreground text-background"
              : "bg-background/80 backdrop-blur-sm text-foreground border border-subtle hover:bg-foreground hover:text-background"
          }`}
          title={isSelected ? "Remove from comparison" : "Add to comparison"}
        >
          {isSelected ? <Check size={14} /> : <Plus size={14} />}
        </button>
      )}
    </motion.div>
  );
}
