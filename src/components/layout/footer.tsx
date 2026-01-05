import Link from 'next/link';
import { Scale, Twitter, Linkedin, Facebook } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/attorneys', label: 'Attorneys' },
  { href: '/contact', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
];

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="flex items-center gap-2 font-bold text-2xl font-headline text-primary mb-4">
              <Scale className="h-7 w-7" />
              Manrel Law
            </Link>
            <p className="text-foreground/80 text-sm">
                Providing expert legal solutions with dedication and integrity.
            </p>
            <div className="flex gap-4 mt-4">
                <Link href="#" className="text-foreground/60 hover:text-primary"><Twitter size={20} /></Link>
                <Link href="#" className="text-foreground/60 hover:text-primary"><Linkedin size={20} /></Link>
                <Link href="#" className="text-foreground/60 hover:text-primary"><Facebook size={20} /></Link>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                  <h3 className="font-headline font-semibold text-primary mb-4">Navigation</h3>
                  <ul className="space-y-2">
                      {navLinks.slice(0, 4).map(link => (
                          <li key={link.href}><Link href={link.href} className="text-foreground/80 hover:text-primary transition-colors">{link.label}</Link></li>
                      ))}
                  </ul>
              </div>
              <div>
                  <h3 className="font-headline font-semibold text-primary mb-4">Legal</h3>
                  <ul className="space-y-2">
                      <li><Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Privacy Policy</Link></li>
                      <li><Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Terms of Service</Link></li>
                      <li><Link href="#" className="text-foreground/80 hover:text-primary transition-colors">Disclaimer</Link></li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-headline font-semibold text-primary mb-4">Contact Us</h3>
                  <ul className="space-y-2 text-foreground/80 text-sm">
                      <li>123 Legal Ave, Suite 500</li>
                      <li>Justice City, ST 12345</li>
                      <li className="pt-2"><a href="tel:123-456-7890" className="hover:text-primary transition-colors">(123) 456-7890</a></li>
                      <li><a href="mailto:contact@manrellaw.com" className="hover:text-primary transition-colors">contact@manrellaw.com</a></li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Manrel Law. All Rights Reserved. Attorney Advertising.</p>
        </div>
      </div>
    </footer>
  );
}
