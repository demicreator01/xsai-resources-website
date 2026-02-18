import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'Payroll', href: '/payroll' },
        { name: 'Accounting', href: '/#accounting' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 top-0 border-b border-white/10 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-primary to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-green-primary/30 transition-shadow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-green-primary transition-colors">
                            XSAI<span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-400 font-light">Resources</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium text-gray-600 hover:text-green-primary transition-colors">Home</Link>
                        <Link to="/payroll" className="text-sm font-medium text-gray-600 hover:text-green-primary transition-colors">Payroll</Link>
                        <Link to="/#why-us" className="text-sm font-medium text-gray-600 hover:text-green-primary transition-colors">Why XSAI</Link>
                        <Button variant="primary" size="sm" href="/contact" className="shadow-lg shadow-green-primary/20 hover:shadow-green-primary/40">
                            Book a Call
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -mr-2 text-gray-900 focus:outline-none"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open navigation menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-5 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                        <Logo />
                        <button
                            className="p-2 -mr-2 text-gray-500 hover:text-gray-900 focus:outline-none"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-xl font-semibold text-gray-900 border-b border-gray-100 pb-4 transition-all duration-300 delay-[${100 + index * 50}ms] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${150 + index * 100}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pb-8">
                        <Button fullWidth variant="primary">
                            Book a Discovery Call
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
