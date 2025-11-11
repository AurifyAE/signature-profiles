import React from 'react';
import { useParams } from 'react-router-dom';
import { getMemberBySlug } from '../../data/teamMembers';
import MemberDetail from './MemberDetail';

function MemberDetailRoute({ slug: propSlug }) {
    const { slug: paramSlug } = useParams();
    const slug = propSlug || paramSlug;
    const member = getMemberBySlug(slug);

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#211f5d] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
                    <p className="text-gray-400">The member you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <MemberDetail
            name={member.name}
            role={member.role}
            email={member.email}
            phone={member.phone}
            whatsapp={member.whatsapp}
            address={member.address}
            photo={member.photo}
        />
    );
}

export default MemberDetailRoute;

