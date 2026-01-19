'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Printer } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';

export function Contact() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20" ><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">Get In Touch</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">Contact Us</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto mb-6"></div><p className="text-slate-600 max-w-2xl mx-auto text-lg">Ready to discuss your legal needs? Our team is here to help. Reach out to schedule a confidential consultation.</p></div>
                <motion.div {...fadeIn}>
                    <Card className="overflow-hidden shadow-2xl">
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-2">
                                <div className="p-6 md:p-10 bg-white">
                                    <h2 className="text-2xl font-headline text-primary mb-4">Get in Touch</h2>
                                    <p className="text-muted-foreground/90 mb-6">
                                        Whether you have a question about our services or need to schedule a consultation, our team is ready to answer all your questions. Fill out the form, and we'll be in touch shortly.
                                    </p>
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <MapPin className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-base">Our Offices</h3>
                                                <h4 className="font-semibold text-sm mt-2">Toronto Office</h4>
                                                <p className="text-sm text-muted-foreground/90">First Canadian Place<br />100 King St W, Suite #5700<br />Toronto, ON M5X 1C7</p>
                                                <h4 className="font-semibold text-sm mt-2">Waterloo Office</h4>
                                                <p className="text-sm text-muted-foreground/90">Regus <br/>180 Northfield Drive West, Unit 4, 1st Floor<br />Waterloo, ON N2L 0C7</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <Mail className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-base">Email Us</h3>
                                                <a href="mailto:contact@manerlaw.ca" className="text-sm text-muted-foreground/90 hover:text-primary transition-colors">contact@manerlaw.ca</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <Phone className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-base">Call Us</h3>
                                                <a href="tel:+14374240886" className="text-sm text-muted-foreground/90 hover:text-primary transition-colors">+1 (437) 424-0886</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <Phone className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-base">Additional</h3>
                                                <a href="tel:+16047043544" className="text-sm text-muted-foreground/90 hover:text-primary transition-colors">+1 (604) 704-3544</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <Printer className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-base">Fax</h3>
                                                <a href="fax:+17787691971" className="text-sm text-muted-foreground/90 hover:text-primary transition-colors">+1 (778) 769-1971</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
