'use client';
import { Users, Trophy, Book } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyWorkWithUs() {
    return (
        <div id="why-work-with-us" className="bg-muted py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl text-primary">Why Work With Us</h2>
                    
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <motion.div className="p-6 bg-background rounded-lg shadow-md" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-primary mb-3">Client-Centric Approach</h4>
                        <p className="text-muted-foreground">Your needs are our priority. We offer personalized legal solutions and maintain open communication every step of the way.</p>
                    </motion.div>
                    <motion.div className="p-6 bg-background rounded-lg shadow-md" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-primary mb-3">Proven Track Record</h4>
                        <p className="text-muted-foreground">Our history of successful outcomes speaks for itself. We are committed to achieving the best possible results for our clients.</p>
                    </motion.div>
                    <motion.div className="p-6 bg-background rounded-lg shadow-md" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-primary mb-3">Deep Expertise</h4>
                        <p className="text-muted-foreground">Our lawyers possess specialized knowledge across various areas of law, ensuring you receive expert advice and representation.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
