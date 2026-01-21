'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, Facebook, Twitter, Printer } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <div className='bg-white p-4'>
                        <Link href="#home" >
                            <Image src="/images/logo.png" alt="Maner Law Logo" width={200} height={53} />
                        </Link>
                        </div>
                        <p className="mt-4 text-sm text-primary-foreground/80">
                            Providing expert legal solutions with integrity and professionalism.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-serif font-semibold tracking-wider text-primary-foreground/90">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#practice-areas" className="text-primary-foreground/80 hover:text-white transition-colors">Practice Areas</Link></li>
                            <li><Link href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif font-semibold tracking-wider text-primary-foreground/90">Contact Info</h3>
                        <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-sm">Toronto Office</h4>
                                    <span>First Canadian Place<br />100 King St W, Suite #5700<br />Toronto, ON M5X 1C7</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-sm">Waterloo Office</h4>
                                    <span>180 Northfield Drive West, Unit 4, 1st Floor<br />Waterloo, ON N2L 0C7</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 flex-shrink-0" />
                                <a href="mailto:contact@manerlaw.ca" className="hover:text-white transition-colors">contact@manerlaw.ca</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0" />
                                <a href="tel:+14374240886" className="hover:text-white transition-colors">+1 (437) 424-0886</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0" />
                                <a href="tel:+16047043544" className="hover:text-white transition-colors">+1 (604) 704-3544</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Printer className="h-5 w-5 flex-shrink-0" />
                                <a href="fax:+17787691971" className="hover:text-white transition-colors">+1 (778) 769-1971</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif font-semibold tracking-wider text-primary-foreground/90">Follow Us</h3>
                        <div className="flex mt-4 space-x-4">
                            <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                                <Linkedin size={22} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                                <Facebook size={22} />
                                <span className="sr-only">Facebook</span>
                            </Link>                            
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
                    <p>&copy; {new Date().getFullYear()} Maner Law. All Rights Reserved. Attorney Advertising.</p>
                    <p className="mt-2">Site developed and maintained by <a href="https://easywebtogo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">easywebtogo.com</a></p>
                    <p className="mt-2">The content of this website is provided for informational purposes only, and is not intended to be legal advice. You should not take action in your legal matter without first retaining a lawyer.</p>
                </div>
            </div>
        </footer>
    )
}
