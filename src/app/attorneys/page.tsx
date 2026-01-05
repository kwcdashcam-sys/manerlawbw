import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const attorneys = [
  {
    name: "Jessica Manrel",
    title: "Founding Partner",
    image: PlaceHolderImages.find(p => p.id === 'attorney-1'),
    bio: "Jessica Manrel founded the firm with a vision of providing ethical, client-focused legal representation. With over 25 years of experience in corporate law, she is a renowned strategist in mergers, acquisitions, and complex corporate litigation. Her leadership and dedication to justice have set the standard for the entire firm.",
    linkedin: "#"
  },
  {
    name: "David Chen",
    title: "Head of Criminal Defense",
    image: PlaceHolderImages.find(p => p.id === 'attorney-2'),
    bio: "A former prosecutor, David Chen brings invaluable insight to his criminal defense practice. He is a tenacious litigator known for his meticulous case preparation and unwavering defense of his clients' rights. David has successfully handled hundreds of cases, from DUIs to major felonies.",
    linkedin: "#"
  },
  {
    name: "Sarah Jenkins",
    title: "Family Law Specialist",
    image: PlaceHolderImages.find(p => p.id === 'attorney-3'),
    bio: "Sarah Jenkins leads the family law practice with compassion and expertise. She is a certified mediator and believes in finding constructive solutions for families in transition. Her practice focuses on divorce, child custody, and adoption, always with the children's best interests at heart.",
    linkedin: "#"
  },
  {
    name: "Michael Rivera",
    title: "Real Estate & Estate Planning",
    image: PlaceHolderImages.find(p => p.id === 'attorney-4'),
    bio: "Michael Rivera is a dual-specialist, expertly navigating the intricacies of both real estate law and estate planning. He helps clients protect their most valuable assets, from their homes to their legacies. His detail-oriented approach ensures every transaction and plan is ironclad.",
    linkedin: "#"
  }
];

export default function AttorneysPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'hero-legal');

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
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Legal Professionals</h1>
                    <p className="mt-2 text-lg">Experience, Dedication, and Excellence</p>
                </div>
            </section>
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {attorneys.map((attorney, index) => (
                            <Card key={index} className="flex flex-col sm:flex-row items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                {attorney.image && (
                                    <Avatar className="h-32 w-32 sm:h-40 sm:w-40 flex-shrink-0 mb-6 sm:mb-0 sm:mr-8 border-4 border-accent">
                                        <AvatarImage src={attorney.image.imageUrl} alt={`Photo of ${attorney.name}`} data-ai-hint={attorney.image.imageHint} />
                                        <AvatarFallback>{attorney.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className="text-center sm:text-left">
                                    <CardHeader className="p-0">
                                        <div className="flex items-center justify-center sm:justify-start gap-3">
                                            <CardTitle className="font-headline text-2xl text-primary">{attorney.name}</CardTitle>
                                            <Link href={attorney.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                                <Linkedin size={20} />
                                            </Link>
                                        </div>
                                        <CardDescription className="font-semibold text-accent text-md">{attorney.title}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0 mt-4">
                                        <p className="text-foreground/80">{attorney.bio}</p>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
