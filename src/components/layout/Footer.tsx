import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-header border-t border-main text-sm text-main">
      <div className="max-w-7xl mx-auto py-2 px-4 flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Rahma Rohmatinisa. All rights reserved.</p>
        </div>
        <div>
          <p>Made with ❤️ and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;