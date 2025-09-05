import { useState } from 'react';

export default function CommandLayout({ title, command, normalContent, kidContent }) {
  const [kidMode, setKidMode] = useState(false);

  return (
    <div className="space-y-10 px-6 py-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">
          {title} <code className="bg-gray-100 px-2 py-1 rounded">{command}</code>
        </h1>
        <button
          onClick={() => setKidMode(!kidMode)}
          className="bg-fuchsia-600 text-white px-4 py-2 rounded hover:bg-fuchsia-700 transition"
        >
          {kidMode ? 'Switch to Normal Mode' : 'Switch to Kid Mode'}
        </button>
      </div>

      <div className="space-y-6">
        {kidMode ? kidContent : normalContent}
      </div>
    </div>
  );
}
