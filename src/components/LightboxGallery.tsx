import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxGalleryProps {
  images: { src: string; alt: string; label?: string }[];
}

export default function LightboxGallery({ images }: LightboxGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, goNext, goPrev]);

  return (
    <>
      {/* Main hero image */}
      <div
        className="premium-card overflow-hidden rounded-3xl cursor-pointer group"
        onClick={() => openLightbox(0)}
      >
        <div className="relative">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-background/70 backdrop-blur-sm text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.length} Photos — Click to view
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-2">
        {images.slice(1).map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i + 1)}
            className={`premium-card-inner overflow-hidden rounded-xl group cursor-pointer transition-all duration-300 ${
              selectedIndex === i + 1 ? "ring-1 ring-foreground/30" : "hover:ring-1 hover:ring-foreground/10"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-secondary transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-sm text-muted-foreground font-display tabular-nums z-10">
              {selectedIndex + 1} / {images.length}
            </div>

            {/* Label */}
            {images[selectedIndex].label && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs text-muted-foreground z-10">
                {images[selectedIndex].label}
              </div>
            )}

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
              className="max-w-[90vw] max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>

            {/* Nav buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Thumbnail strip in lightbox */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                  className={`shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedIndex === i
                      ? "ring-2 ring-foreground/50 opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-14 h-10 object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
