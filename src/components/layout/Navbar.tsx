import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Handle scroll for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        { name: 'Home', href: '/' },
        // { name: 'Payroll', href: '/payroll' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 top-0 border-b border-white/10 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm h-16' : 'bg-transparent h-20'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <Logo />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href ? 'text-green-primary' : 'text-gray-600 hover:text-green-primary'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="primary" size="sm" href="#contact" className="shadow-lg shadow-green-primary/20 hover:shadow-green-primary/40">
                                Book a Discovery Call
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
            </nav>

            {/* Mobile Drawer Backdrop */}
            <div
                className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Drawer Content */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white shadow-2xl z-70 transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="p-6 flex flex-col h-full bg-linear-to-b from-white to-gray-50">
                    <div className="flex items-center justify-between mb-8">
                        <Logo />
                        <button
                            className="p-2 text-gray-500 hover:text-gray-900 focus:outline-none bg-gray-100 rounded-full"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close navigation menu"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-xl font-bold text-gray-900 py-4 border-b border-gray-100 transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                                style={{ transitionDelay: `${150 + index * 50}ms` }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pb-6">
                        <Button fullWidth variant="primary" size="lg" href="#contact" className="shadow-xl shadow-green-primary/30">
                            Book a Discovery Call
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
