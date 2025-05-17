import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Magic Square. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
