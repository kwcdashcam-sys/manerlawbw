'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Gavel, Scale, HeartHandshake, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';

const practiceAreas = [
    {
        icon: <Users className="h-7 w-7 text-primary" />,
        title: "Immigration Law",
        description: "Expert guidance for individuals and businesses navigating the complexities of U.S. immigration law, ensuring a smooth and successful process.",
        items: ["Family-Based Visas", "Employment-Based Visas", "Citizenship & Naturalization", "Deportation Defense"],
    },
    {
        icon: <Gavel className="h-7 w-7 text-primary" />,
        title: "Criminal Defence",
        description: "Skilled defense representation protecting your rights and freedom with discretion and determination.",
        items: ["White Collar Defense", "DUI/DWI", "Federal Cases", "Appeals"],
    },
    {
        icon: <Scale className="h-7 w-7 text-primary" />,
        title: "Civil Litigation",
        description: "Vigorous advocacy in complex disputes, from negotiation through trial, with a proven track record.",
        items: ["Commercial Disputes", "Personal Injury", "Employment Matters", "Insurance Claims"],
    },
    {
        icon: <HeartHandshake className="h-7 w-7 text-primary" />,
        title: "Family Law",
        description: "Compassionate representation during life's most challenging transitions, protecting your family's interests.",
        items: ["Divorce & Separation", "Child Custody", "Prenuptial Agreements", "Adoption"],
    },
    {
        icon: <ScrollText className="h-7 w-7 text-primary" />,
        title: "Notary Public",
        description: "Convenient and reliable notary services for all your official document needs, provided with professionalism and accuracy.",
        items: ["Acknowledgments", "Jurats", "Oaths & Affirmations", "Certified Copies"],
    },
];

export function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20" ><span className="text-primary-foreground text-sm tracking-[0.3em] uppercase font-medium">Our Expertise</span><h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">Practice Areas</h2><div className="w-20 h-0.5 bg-primary-foreground mx-auto mb-6"></div><p className="text-muted-foreground max-w-2xl mx-auto text-lg">Our attorneys bring decades of combined experience across diverse legal disciplines, providing comprehensive counsel tailored to your specific needs.</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {practiceAreas.map((area, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
                            <Card className="h-full p-8 bg-primary/5 rounded-sm border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-500">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        {area.icon}
                                    </div>
                                    <CardTitle className="text-2xl font-bold font-serif text-primary">{area.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-lg text-muted-foreground">{area.description}</p>
                                    {area.items && (
                                        <ul className="list-disc list-inside mt-4 text-lg text-muted-foreground marker:text-accent">
                                            {area.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
