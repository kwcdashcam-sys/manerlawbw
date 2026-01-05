import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Gavel, HeartHandshake, Home, Lightbulb, ScrollText, Scale } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const practiceAreas = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Corporate Law",
    description: "Our corporate law team provides comprehensive legal support for businesses of all sizes. We assist with business formation, contract drafting and negotiation, mergers and acquisitions, corporate governance, and ensuring regulatory compliance. Let us be your strategic legal partner in the business world."
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Real Estate Law",
    description: "Navigating the complexities of real estate transactions requires a knowledgeable guide. We handle everything from residential closings to complex commercial property deals, zoning issues, and landlord-tenant disputes. We protect your property interests at every turn."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Family Law",
    description: "We approach sensitive family matters with compassion and discretion. Our services cover divorce proceedings, child custody and support agreements, adoptions, and prenuptial agreements. We are committed to finding amicable solutions that prioritize the well-being of your family."
  },
  {
    icon: <Gavel className="h-10 w-10 text-primary" />,
    title: "Criminal Defense",
    description: "When your freedom is on the line, you need a vigorous defense. Our experienced criminal defense attorneys represent clients facing a wide range of charges, from misdemeanors to serious felonies. We are dedicated to protecting your rights and ensuring a fair legal process."
  },
  {
    icon: <ScrollText className="h-10 w-10 text-primary" />,
    title: "Estate Planning",
    description: "Secure your legacy and protect your loved ones with our comprehensive estate planning services. We assist with the creation of wills, trusts, powers of attorney, and healthcare directives. Plan for the future with confidence and peace of mind."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Intellectual Property",
    description: "In today's innovation-driven economy, protecting your ideas is paramount. Our IP attorneys help clients secure patents, trademarks, and copyrights. We also handle licensing agreements and litigation to defend your intellectual property from infringement."
  },
];

export default function ServicesPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'services-banner');

    return (
        <div>
            <section className="relative h-64 bg-primary flex items-center justify-center">
                {bannerImage && (
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        fill
                        className="object-cover opacity-20"
                        data-ai-hint={bannerImage.imageHint}
                    />
                )}
                <div className="relative text-center text-primary-foreground">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Legal Expertise</h1>
                    <p className="mt-2 text-lg">Comprehensive Services for Every Legal Need</p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {practiceAreas.map((area, index) => (
                            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <CardHeader className="flex flex-row items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        {area.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <CardTitle className="font-headline text-2xl">{area.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-foreground/80">{area.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
