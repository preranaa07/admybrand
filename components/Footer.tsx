'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} ADmyBRAND. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:underline text-gray-400">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline text-gray-400">Terms of Service</a>
          <a href="#" className="text-sm hover:underline text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
}
