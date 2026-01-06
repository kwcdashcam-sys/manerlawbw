'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#attorneys', label: 'Attorneys' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => {
        const href = link.href;
        if (href.startsWith('#')) {
          return document.getElementById(href.substring(1));
        }
        return null;
      }).filter(Boolean);
      
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveLink(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isHomePage = pathname === '/';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        'bg-white shadow-md backdrop-blur-sm',
        'text-primary'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center">
          <Image src="/logo.png" alt="Maner Law Logo" width={200} height={53} />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-medium transition-colors hover:text-accent',
                  activeLink === link.href ? 'text-accent' : 'text-primary/80',
                  'relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100',
                  activeLink === link.href && 'after:scale-x-100'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div>
              <Button asChild className="bg-primary hover:bg-accent/90 text-muted">
                  <Link href="#contact">Free Consultation</Link>
              </Button>
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="transition-colors text-primary hover:bg-secondary">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background text-foreground">
              <div className="p-4">
                <Link href="#home" className="flex items-center mb-8">
                  <Image src="/logo.png" alt="Maner Law Logo" width={200} height={53} />
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-accent',
                        activeLink === link.href ? 'text-accent' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="w-full mt-8 bg-primary hover:bg-accent/90 text-muted">
                    <Link href="#contact">Free Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
