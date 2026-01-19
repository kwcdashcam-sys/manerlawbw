'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-legal');
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section id="home" className="relative h-screen text-white flex items-center">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
            <div className="relative mx-auto bg-primary/90" >
                <div className="container mx-auto p-8 sm:p-6 lg:p-8 relative z-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div {...fadeIn}>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="w-16 h-px bg-accent"></div>
                                <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">About Us</span>
                                <div className="w-16 h-px bg-accent"></div>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight">Maner Law</h1>
                            <p className="text-xl md:text-2xl text-primary-foreground/80 font-serif italic mb-4">Advocates of Excellence</p>
                            <div className="w-24 h-0.5 bg-accent mx-auto mb-8"></div>
                            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">Distinguished legal counsel built on decades of trust, integrity, and unwavering commitment to our clients' success.</p>
                        </motion.div>
                        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground px-8 py-6 text-base tracking-wide">
                                <Link href="#contact">Schedule Consultation</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-primary hover:bg-white/90 text-white px-8 py-6 text-base tracking-wide">
                                <Link href="#practice-areas">Our Practice Areas</Link>
                            </Button>
                        </motion.div>
                    </div>
                    <div className="text-center mt-10">
                        <div className="flex justify-center items-center gap-12">
                            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className='bg-black/30 p-4'>
                                <Image src="/images/The-voice-of-the-criminal-defence-bar-ml.png" alt="The Voice of the Criminal Defence Bar" width={150} height={150} />
                            </motion.div>
                            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className='bg-black/30 p-6'>
                                <Image src="/images/law-society-of-ontario-ml.png" alt="Law Society of Ontario" width={150} height={150} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-20">
                <Link href="#about">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    >
                        <ChevronDown className="h-10 w-10" />
                    </motion.div>
                </Link>
            </div>
        </section>
    )
}
