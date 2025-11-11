import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileBanner from '../../assets/profile/profileBanner.svg';
import siteLogo from '../../assets/homepage/logo.svg';
import logoWhite from '../../assets/homepage/logo-white.svg';
import logoBlue from '../../assets/homepage/logo-blue.png';
import pattern from '../../assets/homepage/pattern1.svg';
import phoneIcon from '../../assets/profile/phone.svg';
import mailIcon from '../../assets/profile/mail.svg';
import whatsappIcon from '../../assets/profile/whatsapp.svg';
import shareIcon from '../../assets/profile/share.svg';
import instagram from '../../assets/profile/instagram.svg';
import facebook from '../../assets/profile/facebook.svg';
import globe from '../../assets/profile/globe.svg';
import download from '../../assets/profile/download.svg';
import mapPin from '../../assets/profile/map-pin.svg';
import { getInitials } from '../../data/teamMembers';

function MemberDetail({ name, role, email, phone, whatsapp, address, photo }) {
    const handleSaveContact = () => {
        const escape = (str) => (str || '').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n');

        const vcardLines = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${escape(name)}`,
            'ORG:Signature Jewellery',
            `TITLE:${escape(role)}`,
            phone ? `TEL;TYPE=WORK,VOICE:${escape(phone)}` : '',
            whatsapp ? `TEL;TYPE=CELL,VOICE:${escape(whatsapp)}` : '',
            email ? `EMAIL;TYPE=PREF,INTERNET:${escape(email)}` : '',
            address ? `ADR;TYPE=WORK:;;${escape(address)};;;;` : '',
            'END:VCARD'
        ].filter(Boolean);

        // Ensure CRLF line endings per vCard spec
        const vcard = vcardLines.join('\r\n');

        // Encode for a data URL
        const encodedVcard = encodeURIComponent(vcard);

        // Create the "Add Contact" link
        const vcardUrl = `data:text/vcard;charset=utf-8,${encodedVcard}`;

        // Trigger the link
        const link = document.createElement('a');
        link.href = vcardUrl;
        link.download = `${(name || 'contact').replace(/\s+/g, '_')}.vcf`;
        document.body.appendChild(link); // safer for some browsers
        link.click();
        document.body.removeChild(link);
    };

    // Split address into two lines: before and after the first comma. If no comma, just show full address as first line.
    let addressLine1 = '';
    let addressLine2 = '';
    if (typeof address === 'string') {
        const idx = address.indexOf(',');
        if (idx !== -1) {
            addressLine1 = address.substring(0, idx).trim();
            addressLine2 = address.substring(idx + 1).trim();
        } else {
            addressLine1 = address;
            addressLine2 = '';
        }
    }

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center bg-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Main container */}
            <motion.div
                className="w-full max-w-6xl mx-auto md:px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {/* Back button for desktop */}
                <motion.div
                    className="hidden md:block md:mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <Link to="/" className="text-sm text-[#211f5d] hover:text-indigo-600">← Back to team</Link>
                </motion.div>

                {/* Content container */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#211f5d] md:rounded-2xl overflow-hidden">
                    {/* Left side - Full height image with text overlay */}
                    <motion.div
                        className="relative h-screen max-h-[80vh] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Back button positioned on image - Mobile only */}
                        <motion.div
                            className="absolute top-6 left-6 z-10 md:hidden"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <Link to="/" className="text-sm text-white hover:text-gray-200 bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">← Back to team</Link>
                        </motion.div>

                        {photo ? (
                            <img src={photo} alt={name} className="w-full lg:w-md h-full object-cover grayscale-100" />
                        ) : (
                            <div className="w-full h-full bg-white flex items-center justify-center relative">
                                {/* Pattern background, 50% opacity */}
                                <img
                                    src={pattern}
                                    alt="Pattern background"
                                    className="absolute inset-0 w-full h-full object-cover scale-190 opacity-5 pointer-events-none select-none"
                                    style={{
                                        zIndex: 1,
                                    }}
                                    draggable={false}
                                    aria-hidden="true"
                                />
                                {/* Logo-white.svg centered above pattern */}
                                <motion.img
                                    src={logoWhite}
                                    alt="Logo"
                                    className="relative z-10 w-full max-w-[360px]"
                                    style={{ background: "transparent" }}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                    draggable={false}
                                />
                            </div>
                        )}

                        {/* Gradient overlay for text readability */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent to-[#211f5d]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        ></motion.div>
                    </motion.div>

                    {/* Right side - Centered name/role, Location and Icons */}
                    <motion.div
                        className="flex flex-col items-center justify-center bg-[#211f5d] text-white pb-20 lg:pb-0 px-6 md:px-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Centered Name & Role */}
                        <motion.div
                            className="mb-4 text-center w-full"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                        >
                            <motion.h1
                                className="text-4xl font-bold"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                {name}
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                {role}
                            </motion.p>
                        </motion.div>

                        {/* Location */}
                        {address && (
                            <motion.div
                                className="flex flex-col items-center gap-2 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                <img src={mapPin} alt="Location" className="h-5 w-5 mx-auto" />
                                <span className="text-base lg:text-base text-center whitespace-pre-line">
                                    {addressLine1}
                                    {addressLine2 && <><br />{addressLine2}</>}
                                </span>
                            </motion.div>
                        )}

                        {/* 8 Icons in 2 rows of 4 - Ordered: phone, whatsapp, mail, instagram, facebook, globe, download, share */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 place-items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            {/* Row 1 */}
                            {[
                                { href: `tel:${phone}`, icon: phoneIcon, label: "Call", title: "Call" },
                                whatsapp ? { href: `https://wa.me/${whatsapp.replace(/\D/g, '')}`, icon: whatsappIcon, label: "WhatsApp", title: "WhatsApp", external: true } : null,
                                { href: `mailto:${email}`, icon: mailIcon, label: "Email", title: "Email" },
                                
                            ].map((item, index) => item ? (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noreferrer" : undefined}
                                    aria-label={item.label}
                                    title={item.title}
                                    className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={item.icon} alt={item.label} className="h-8 w-8" />
                                </motion.a>
                            ) : (
                                <div key={index} className="h-14 w-14 lg:h-16 lg:w-16"></div>
                            ))}

                            {/* Row 2 */}
                            {[
                                { href: "https://www.instagram.com/signaturejewellery_abudhabi", icon: instagram, label: "Instagram", title: "Instagram" },
                                { type: "button", icon: download, label: "Save", title: "Save" },
                                { type: "button", icon: shareIcon, label: "Share", title: "Share" }
                            ].map((item, index) => item.type === "button" && item.label === "Save" ? (
                                <motion.button
                                    key={index + 4}
                                    type="button"
                                    aria-label={item.label}
                                    title={item.title}
                                    onClick={handleSaveContact}
                                    className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={item.icon} alt={item.label} className="h-8 w-8" />
                                </motion.button>
                            ) : item.type === "button" && item.label === "Share" ? (
                                <motion.button
                                    key={index + 5}
                                    type="button"
                                    aria-label={item.label}
                                    title={item.title}
                                    onClick={() => {
                                        const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
                                        if (navigator.share) {
                                            navigator.share({ title: `${name} – ${role}`, url: shareUrl }).catch(() => { });
                                        } else if (navigator.clipboard && shareUrl) {
                                            navigator.clipboard.writeText(shareUrl).catch(() => { });
                                        }
                                    }}
                                    className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={item.icon} alt={item.label} className="h-8 w-8" />
                                </motion.button>
                            ) : (
                                <motion.a
                                    key={index + 4}
                                    href={item.href}
                                    aria-label={item.label}
                                    title={item.title}
                                    className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <img src={item.icon} alt={item.label} className="h-8 w-8" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default MemberDetail;
