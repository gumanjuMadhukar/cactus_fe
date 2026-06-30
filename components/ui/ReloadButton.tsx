'use client';

export function ReloadButton() {
  return (
    <button 
      onClick={() => window.location.reload()}
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Reload Page
    </button>
  );
}