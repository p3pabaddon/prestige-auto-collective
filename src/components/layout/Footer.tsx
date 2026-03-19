import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-subtle bg-card">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
              PRESTIGE<span className="text-muted-foreground font-normal ml-1">AUTO</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Curated premium vehicles, presented with the care and transparency that serious buyers deserve.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide mb-4 text-foreground">Showroom</h4>
            <ul className="space-y-3">
              {[
                { to: "/inventory", label: "Browse Inventory" },
                { to: "/quality", label: "Quality Standards" },
                { to: "/sold", label: "Delivered Vehicles" },
                { to: "/financing", label: "Financing" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/blog", label: "Journal" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide mb-4 text-foreground">Visit Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>123 Prestige Boulevard<br />London, SW1A 1AA</p>
              <p>+44 (0) 20 7946 0958</p>
              <p>enquiries@prestigeauto.com</p>
              <div className="pt-2">
                <p className="text-xs">Mon – Fri: 9:00 – 18:00</p>
                <p className="text-xs">Saturday: 10:00 – 16:00</p>
                <p className="text-xs">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Prestige Auto. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
