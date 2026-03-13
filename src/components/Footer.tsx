import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 text-center text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} DD.DOU. All rights reserved.</p>
        <p className="mt-2">Designed with passion and creativity.</p>
      </div>
    </footer>
  );
};
