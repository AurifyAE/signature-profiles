import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getInitials } from '../../data/teamMembers';

function ProfileCard({ name, path, role, photo }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <Link to={`/${path}`} className="block rounded-xl hover:border-gray-300 hover:shadow-md transition group bg-[#211f5d] backdrop-blur-sm overflow-hidden"> 
                <div className="flex items-center gap-4">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                    >
                        {photo ? (
                            <img src={photo} alt={name} className="h-40 w-32 object-cover grayscale-100" />
                        ) : (
                            <div className="h-32 w-32 rounded-l-xl bg-white text-indigo-600 flex items-center justify-center font-semibold">
                                {getInitials(name)}
                            </div>
                        )}
                    </motion.div>
                    <div className="flex-1">
                        <motion.h3 
                            className="text-lg font-semibold text-white group-hover:text-[#b9b07c] transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                        >
                            {name}
                        </motion.h3>
                        <motion.p 
                            className="text-sm text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                        >
                            {role}
                        </motion.p>
                    </div>
                    <motion.span 
                        className="text-sm text-indigo-300 pr-8"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        whileHover={{ x: 5 }}
                    >
                        View →
                    </motion.span>
                </div>
            </Link>
        </motion.div>
    );
}

export default ProfileCard;

