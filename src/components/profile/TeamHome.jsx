import React from 'react';
import profileBanner from '../../assets/profile/profileBanner.svg';
import siteLogo from '../../assets/homepage/logo.svg';
import logoBlue from '../../assets/homepage/logo-blue.svg';
import pattern from '../../assets/homepage/pattern1.svg';

import { members } from '../../data/teamMembers';
import ProfileCard from './ProfileCard';

function TeamHome() {
    return (
        <div className='bg-[#211f5d] h-auto'>
            <div className="w-full">
                <div className="mx-auto max-w-5xl px-6 py-6">
                    <div className="relative bg-white rounded-[50px] border border-gray-200">
                        <img src={pattern} alt="Profiles banner" className="z-1 w-full h-36 object-cover scale-190 opacity-40" />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-2">
                            <img src={logoBlue} alt="Logo" className="h-36" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 py-10">
                <h2 className="text-4xl font-bold text-white mb-10 font-playfair">Our Team</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                    {members.map((m) => (
                        <ProfileCard key={m.slug} name={m.name} path={m.slug} role={m.role} photo={m.photo} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamHome;

