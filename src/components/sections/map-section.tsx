'use client';
import Map from '@/components/map';
import { motion } from 'framer-motion';

export function MapSection() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };
    return (
        <section id="map" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20" ><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">Meet In Person</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">Reach Us</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto mb-6"></div><p className="text-slate-600 max-w-2xl mx-auto text-lg">More comfortable to discuss your case in person</p></div>

                <motion.div {...fadeIn} className="w-full h-96 md:h-[500px] p-4">
                    <Map />
                </motion.div>
            </div>
        </section>
    )
}
