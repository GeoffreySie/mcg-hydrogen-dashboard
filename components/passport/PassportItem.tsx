import React from 'react';
import { motion } from 'framer-motion';
import { ProductData } from '@/passport-types';

interface PassportItemProps {
  passport: ProductData;
  onClick: () => void;
}

const PassportItem: React.FC<PassportItemProps> = ({ passport, onClick }) => (
  <motion.li
    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-1 p-2 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    onClick={onClick}
  >
    <div className="flex-1 text-center">
      <h3>{passport.consignmentId}</h3>
    </div>
  </motion.li>
);

export default PassportItem;
