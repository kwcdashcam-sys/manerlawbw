'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scale, Shield, Award, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const values = [
    {
        icon: <Scale className="h-8 w-8 text-accent" />,
        title: "Integrity",
        description: "Upholding the highest ethical standards in every case we undertake.",
    },
    {
        icon: <Shield className="h-8 w-8 text-accent" />,
        title: "Dedication",
        description: "Committed to protecting our clients\' interests with unwavering resolve.",
    },
    {
        icon: <Award className="h-8 w-8 text-accent" />,
        title: "Excellence",
        description: "Pursuing exceptional outcomes through meticulous preparation and expertise.",
    },
    {
        icon: <Users className="h-8 w-8 text-accent" />,
        title: "Partnership",
        description: "Building lasting relationships founded on trust and mutual respect.",
    },
]

export function FirmOverview() {
    const officeImage = PlaceHolderImages.find(p => p.id === 'office-interior');
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section id="about" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20"><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">About Our Firm</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">A Legacy of Legal Excellence</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto"></div></div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div {...fadeIn}>
                        {officeImage && (
                            <Image
                                src={officeImage.imageUrl}
                                alt={officeImage.description}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg object-cover"
                            />
                        )}
                    </motion.div>
                    <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-4">
                        <p className="text-base text-muted-foreground font-serif">
                            For nearly four decades, Maner Law has stood as a pillar of legal excellence in our community. Our firm has grown from a small practice into a distinguished institution known for its principled approach to law.
                        </p>
                        <p className="text-base text-muted-foreground font-serif">
                            Our mission is clear: to provide exceptional legal representation while maintaining the highest standards of professionalism and ethical conduct. We believe that every client deserves not just legal expertise, but a trusted advisor who truly understands their unique circumstances.
                        </p>
                        <p className="text-base text-muted-foreground font-serif">
                            Today, our team of accomplished attorneys continues this legacy, combining traditional values with innovative legal strategies to serve clients across a broad spectrum of practice areas.
                        </p>
                        <div className="pt-4"><div className="inline-flex items-center gap-3 text-[#1E3A8A]"><div className="w-12 h-px bg-[#A8915F]"></div><span className="font-serif italic text-lg">"Excellence is not a destination, but a journey."</span></div></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
                    {values.map((value, index) => (
                        <motion.div key={index} {...fadeIn} transition={{ delay: 0.4 + index * 0.1 }}>
                            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                                {value.icon}
                            </div>
                            <h3 className="font-headline font-bold text-lg text-primary">{value.title}</h3>
                            <p className="text-sm text-muted-foreground/95 mt-1">{value.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
