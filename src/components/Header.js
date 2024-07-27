// src/components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/live" className="hover:underline">Live</Link></li>
          <li><Link href="/schedule" className="hover:underline">Schedule</Link></li>
          <li><Link href="/team/1" className="hover:underline">Teams</Link></li>
          <li><Link href="/player/1" className="hover:underline">Players</Link></li>
          <li><Link href="/login" className="hover:underline">Login/Signup</Link></li>
        </ul>
      </nav>
    </header>
  );
}
