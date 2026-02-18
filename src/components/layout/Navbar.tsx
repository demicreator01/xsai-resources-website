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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-[1120px] mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href ? 'text-[#10b981]' : 'text-gray-600 hover:text-[#10b981]'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="primary" className="ml-4 !py-2.5 !px-5 min-h-[40px]">
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
