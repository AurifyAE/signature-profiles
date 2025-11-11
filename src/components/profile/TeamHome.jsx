import React from 'react';
import profileBanner from '../../assets/profile/profileBanner.svg';
import siteLogo from '../../assets/homepage/logo.svg';
import { members } from '../../data/teamMembers';
import ProfileCard from './ProfileCard';

function TeamHome() {
    return (
        <div className='bg-white h-auto'>
            <div className="w-full">
                <div className="mx-auto max-w-5xl px-6 py-6">
                    <div className="relative">
                        <img src={profileBanner} alt="Profiles banner" className="w-full h-36 object-cover rounded-t-xl border border-gray-200" />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <img src={siteLogo} alt="Logo" className="h-36" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 py-10">
                <h2 className="text-4xl font-bold text-[#A78E52] mb-10 font-playfair">Our Team</h2>
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

