import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Payroll', href: '/payroll' },
    { name: 'Accounting', href: '/accounting' },
    { name: 'Admin & Support', href: '/admin-support' },
    { name: 'Insights', href: '/insights' },
    { name: 'Our Edge', href: '/our-edge' },
];

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#080f1a] px-5 md:px-8 pt-14 pb-8 overflow-hidden">
            {/* Top seam */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            {/* Atmospheric glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1120px] mx-auto">
                {/* ── TOP ROW: Logo + Nav ── */}
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 pb-10 border-b border-white/6">
                    {/* Logo + tagline + contact */}
                    <div className="flex flex-col gap-4 max-w-[220px]">
                        <Link to="/" className="inline-flex">
                            <Logo textColor='#ffffff' />
                        </Link>
                        <p className="text-xs text-text-secondary leading-relaxed">
                            UK payroll, accounting, and administrative infrastructure —
                            built for businesses that think long term.
                        </p>
                        <a
                            href="mailto:contact@xsai.co.uk"
                            className="text-xs text-green-primary hover:text-[#34d399] transition-colors duration-200 font-medium"
                        >
                            contact@xsai.co.uk
                        </a>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-3 md:items-end">
                        <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-text-secondary mb-1">
                            Pages
                        </p>
                        <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-sm text-[#6b7280] hover:text-white transition-colors duration-200 font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* ── BOTTOM ROW: Legal ── */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    {/* Company registration */}
                    <div className="flex flex-col gap-1">
                        <p className="text-[0.65rem] text-[#374151]">
                            XSAI Resources Ltd · Registered in England & Wales
                        </p>
                        <p className="text-[0.65rem] text-[#374151]">
                            Registered Office: [ACTUAL ADDRESS] · VAT No: [VAT NUMBER]
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col sm:items-end gap-1">
                        <p className="text-[0.65rem] text-[#374151]">
                            © {currentYear} XSAI Resources Ltd. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
