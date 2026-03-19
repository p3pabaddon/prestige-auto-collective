import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { faqItems } from "@/data/vehicles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <main>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Buyer Support"
        description="Clear, honest answers to the questions our buyers ask most often."
      />

      <section className="section-padding-sm">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="premium-card px-6 border-none"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-radial">
        <div className="max-w-[1400px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tighter max-w-xl mx-auto">
              Still Have Questions?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Our team is happy to discuss any aspect of the buying process. We believe in full transparency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-primary transition-all duration-300 hover-scale">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
