'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/attorneys', label: 'Attorneys' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent',
        pathname === '/' ? 'text-white' : 'text-primary'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl font-headline">
          <Scale className={cn("h-6 w-6 transition-colors", isScrolled || pathname !== '/' ? 'text-primary' : 'text-white')} />
          <span className={cn('transition-colors', isScrolled || pathname !== '/' ? 'text-primary' : 'text-white')}>Manrel Law</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-accent',
                pathname === link.href ? 'text-accent' : (isScrolled || pathname !== '/' ? 'text-primary/80' : 'text-white/80'),
                'relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100',
                pathname === link.href && 'after:scale-x-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Free Consultation</Link>
            </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn('transition-colors', isScrolled || pathname !== '/' ? 'text-primary hover:bg-secondary' : 'text-white hover:bg-white/20')}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background text-foreground">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl font-headline text-primary mb-8">
                    <Scale className="h-6 w-6 text-primary" />
                    Manrel Law
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-accent',
                        pathname === link.href ? 'text-accent' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="w-full mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">Free Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
