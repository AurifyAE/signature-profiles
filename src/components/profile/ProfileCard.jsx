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
            className="w-full max-w-xl mx-auto"
        >
            <Link
                to={`/${path}`}
                className="
                    block rounded-3xl hover:border-gray-300 shadow-2xl hover:shadow-xl 
                    transition group bg-[#111030a8] backdrop-blur-sm overflow-hidden p-4 md:p-0"
            >
                <div className="
                    flex flex-col sm:flex-row gap-4 sm:gap-6
                ">
                    {/* Profile Photo Full Width on Mobile */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="flex-shrink-0 flex items-center justify-center w-full sm:w-auto"
                    >
                        {photo ? (
                            <img
                                src={photo}
                                alt={name}
                                className="
                                    w-full h-40 sm:h-40 sm:w-32 object-cover grayscale-100
                                    rounded-2xl sm:rounded-l-xl sm:rounded-r-none
                                "
                            />
                        ) : (
                            <div
                                className="
                                    w-full h-28 sm:h-32 sm:w-32
                                    rounded-2xl sm:rounded-l-xl sm:rounded-r-none
                                    bg-neutral-300 text-indigo-600 flex items-center
                                    justify-center font-semibold text-3xl sm:text-4xl
                                "
                                style={{ minWidth: '7rem', maxWidth: '100%' }}
                            >
                                {getInitials(name)}
                            </div>
                        )}
                    </motion.div>
                    {/* Information and View Button */}
                    <div className="flex flex-1 flex-col sm:flex-row items-center sm:items-stretch w-full">
                        <div className="flex-1 w-full flex flex-col justify-center">
                            <motion.h3
                                className="
                                    text-lg sm:text-xl font-semibold text-white 
                                    group-hover:text-[#b9b07c] transition-colors
                                    text-center sm:text-left
                                "
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                {name}
                            </motion.h3>
                            <motion.p
                                className="
                                    text-sm sm:text-base text-gray-400
                                    text-center sm:text-left mt-1
                                "
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                            >
                                {role}
                            </motion.p>
                        </div>
                        {/* View Button: Vertically Centered */}
                        <div className="flex w-full sm:w-auto justify-center sm:justify-end items-center">
                            <motion.span
                                className="
                                    text-sm sm:text-base text-indigo-300 
                                    pr-0 sm:pr-8 
                                    mt-4 sm:mt-0
                                    flex-shrink-0 w-auto 
                                    text-center sm:text-right
                                "
                                style={{ alignSelf: 'center' }}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                whileHover={{ x: 5 }}
                            >
                                View →
                            </motion.span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default ProfileCard;
