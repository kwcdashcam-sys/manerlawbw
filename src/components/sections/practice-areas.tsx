'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Gavel, Scale, HeartHandshake, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';

const practiceAreas = [
    {
        icon: <Users className="h-7 w-7 text-muted" />,
        title: "Immigration Law",
        description: "We offer expert guidance on all aspects of immigration, including visas, permanent residency, and citizenship. Our team is dedicated to helping individuals and families navigate the complex immigration process with confidence."
    },
    {
        icon: <Gavel className="h-7 w-7 text-muted" />,
        title: "Criminal Defence",
        description: "If you are facing criminal charges, our experienced defence lawyers will fight for your rights. We handle all types of criminal cases, from minor infractions to serious indictable offences."
    },
    {
        icon: <Scale className="h-7 w-7 text-muted" />,
        title: "Civil Litigation",
        description: "Our firm represents clients in a wide range of civil disputes. We are committed to resolving conflicts through negotiation, mediation, or litigation, always keeping your best interests at the forefront."
    },
    {
        icon: <HeartHandshake className="h-7 w-7 text-muted" />,
        title: "Family Law",
        description: "We provide compassionate and effective legal support for all family law matters. Our services include divorce, child custody and access, spousal and child support, and property division."
    },
    {
        icon: <ScrollText className="h-7 w-7 text-muted" />,
        title: "Notary Public",
        description: "Our notary public services include administering oaths, taking affidavits and statutory declarations, and certifying true copies of documents. We provide reliable and efficient notarial services."
    },
];

export function PracticeAreas() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section id="practice-areas" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20" ><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">Our Expertise</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">Practice Areas</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto mb-6"></div><p className="text-muted-foreground max-w-2xl mx-auto">Our attorneys bring decades of combined experience across diverse legal disciplines, providing comprehensive counsel tailored to your specific needs.</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {practiceAreas.map((area, index) => (
                        <motion.div key={index} {...fadeIn} transition={{ delay: index * 0.1 }}>
                            <Card className="h-full p-8 bg-[#F0F9FF] rounded-sm border border-transparent hover:border-[#A8915F]/20 hover:shadow-xl transition-all duration-500">
                                <CardHeader className="flex flex-col items-start gap-2">
                                    <div className="bg-primary rounded-full p-3 flex-shrink-0">
                                        {area.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <CardTitle className="text-xl font-normal font-serif text-[#1E3A8A] group-hover:text-[#A8915F] transition-colors duration-300">{area.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-muted-foreground">{area.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
