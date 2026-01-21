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
            <div className="absolute inset-0 h-full bg-primary/80 z-20 items-center justify-center" ></div>
                <div className="container mx-auto p-8 sm:p-6 lg:p-8 relative z-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div {...fadeIn}>                            
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight">Maner Law</h1>
                            <p className="text-xl md:text-2xl text-primary-foreground/80 font-serif italic mb-4">Advocates of Excellence</p>
                            <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
                            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">Distinguished legal counsel built on decades of trust, integrity, and unwavering commitment to our clients' success.</p>
                        </motion.div>                        
                    </div>
                    <div className="text-center mt-10">
                        <div className="flex justify-center items-center gap-12">
                            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className='bg-white p-3'>
                                <Image src="/images/caltv.png" alt="The Voice of the Criminal Defence Bar" width={150} height={150} />
                            </motion.div>
                            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className='bg-white p-8'>
                                <Image src="/images/Law_Society_of_Ontario_logo.svg" alt="Law Society of Ontario" width={150} height={150} />
                            </motion.div>
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
