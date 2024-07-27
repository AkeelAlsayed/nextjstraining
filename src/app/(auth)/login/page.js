// src/app/login/page.js
export default function LoginPage() {
    return (
      <main className="p-4">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </main>
    );
  }
  