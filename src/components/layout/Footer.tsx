import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111827] text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-[1120px] mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

                    {/* Col 1: Brand */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12L36 36M36 12L12 36" stroke="white" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                            <span className="font-bold text-xl tracking-widest text-white">XSAI</span>
                        </div>
                        <div className="text-gray-400 text-sm leading-relaxed">
                            <p>Registered Address Placeholder</p>
                            <p>123 Business Street</p>
                            <p>London, UK</p>
                        </div>
                        <div className="text-gray-500 text-sm">
                            <p>VAT: GB 123 456 789</p>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Company</h3>
                        <Link to="/#services" className="text-gray-300 hover:text-[#10b981] transition-colors">Services</Link>
                        <Link to="/payroll" className="text-gray-300 hover:text-[#10b981] transition-colors">Payroll</Link>
                        <Link to="/#accounting" className="text-gray-300 hover:text-[#10b981] transition-colors">Accounting</Link>
                        <Link to="/#contact" className="text-gray-300 hover:text-[#10b981] transition-colors">Contact</Link>
                    </div>

                    {/* Col 3: Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Connect</h3>
                        <a href="mailto:hello@xsai.co.uk" className="text-gray-300 hover:text-[#10b981] transition-colors">hello@xsai.co.uk</a>
                        <a href="tel:+442012345678" className="text-gray-300 hover:text-[#10b981] transition-colors">+44 20 1234 5678</a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} XSAI Resources Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
