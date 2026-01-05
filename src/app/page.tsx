import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Briefcase, Gavel, HeartHandshake, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const practiceAreas = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Corporate Law',
    description: 'Expert guidance on business formation, mergers, and compliance.',
  },
  {
    icon: <Gavel className="h-8 w-8 text-primary" />,
    title: 'Criminal Defense',
    description: 'Vigorous defense for your rights and freedom.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Family Law',
    description: 'Compassionate handling of divorce, custody, and adoption cases.',
  },
];

const attorneys = [
  {
    name: 'Jessica Manrel',
    title: 'Founding Partner',
    image: PlaceHolderImages.find(p => p.id === 'attorney-1'),
  },
  {
    name: 'David Chen',
    title: 'Senior Associate',
    image: PlaceHolderImages.find(p => p.id === 'attorney-2'),
  },
  {
    name: 'Sarah Jenkins',
    title: 'Associate Attorney',
    image: PlaceHolderImages.find(p => p.id === 'attorney-3'),
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-legal');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] text-white flex items-center">
        <div className="absolute inset-0 bg-primary/80 z-10" />
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 text-shadow">
            Expert Legal Counsel for Your Peace of Mind
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow-sm">
            Manrel Law is dedicated to providing top-tier legal services with integrity and professionalism.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                Decades of Legal Excellence
              </h2>
              <p className="mb-4 text-lg text-foreground/80">
                Manrel Law was founded on the principles of justice, diligence, and unwavering client advocacy. For over 20 years, our firm has been a pillar of the community, offering expert legal guidance across a wide spectrum of practice areas.
              </p>
              <p className="mb-6 text-foreground/80">
                Our mission is to demystify the legal process, providing clear, strategic, and effective solutions tailored to each client's unique situation. We believe in building lasting relationships based on trust and achieving the best possible outcomes.
              </p>
              <Button asChild variant="outline">
                <Link href="/services">Discover Our Expertise <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="bg-primary/10 p-8 rounded-lg">
                <blockquote className="border-l-4 border-accent pl-6 italic text-foreground/90">
                "Our commitment is not just to the law, but to the people we serve. We stand by you every step of the way, ensuring your voice is heard and your rights are protected."
                <footer className="mt-4 not-italic">
                    <span className="font-bold text-primary">Jessica Manrel,</span>
                    <span className="text-foreground/80"> Founding Partner</span>
                </footer>
                </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Practice Areas Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Practice Areas</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              We offer a comprehensive range of legal services to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <Card key={area.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    {area.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="link">
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Attorney Profiles Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Meet Our Dedicated Team</h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
              Our strength lies in our experienced and compassionate attorneys.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {attorneys.map((attorney) => (
              <div key={attorney.name} className="flex flex-col items-center text-center">
                {attorney.image && (
                  <Avatar className="h-32 w-32 mb-4 border-4 border-accent">
                    <AvatarImage src={attorney.image.imageUrl} alt={`Photo of ${attorney.name}`} data-ai-hint={attorney.image.imageHint} />
                    <AvatarFallback>{attorney.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <h3 className="font-bold text-lg text-primary">{attorney.name}</h3>
                <p className="text-foreground/80">{attorney.title}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/attorneys">View All Attorneys</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's take the first step towards resolving your legal matters. Contact us for a confidential consultation.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
