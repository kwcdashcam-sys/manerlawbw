import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const contactImage = PlaceHolderImages.find(p => p.id === 'contact-banner');

  return (
    <div>
      <section className="relative h-64 bg-primary flex items-center justify-center">
        {contactImage && (
            <Image
                src={contactImage.imageUrl}
                alt={contactImage.description}
                fill
                className="object-cover opacity-20"
                data-ai-hint={contactImage.imageHint}
            />
        )}
        <div className="relative text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We're here to help. Reach out to us anytime.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-secondary">
                  <h2 className="text-3xl font-headline font-bold text-primary mb-4">Get in Touch</h2>
                  <p className="text-foreground/80 mb-8">
                    Whether you have a question about our services or need to schedule a consultation, our team is ready to answer all your questions. Fill out the form, and we'll be in touch shortly.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Our Office</h3>
                        <p className="text-foreground/80">123 Legal Ave, Suite 500<br/>Justice City, ST 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Us</h3>
                        <a href="mailto:contact@manrellaw.com" className="text-foreground/80 hover:text-primary transition-colors">contact@manrellaw.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <a href="tel:123-456-7890" className="text-foreground/80 hover:text-primary transition-colors">(123) 456-7890</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <ContactForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
