import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <nav className="mb-4">
          <ul className="flex justify-around">
            <li>
              <Link href="/login">
                <div className="text-blue-600 hover:underline">Login</div>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <div className="text-blue-600 hover:underline">Sign Up</div>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}
