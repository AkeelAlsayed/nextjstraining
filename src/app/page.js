// src/app/page.js
export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Football Games</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Live Matches</h2>
        {/* Fetch and display live matches here */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Upcoming Matches</h2>
        {/* Fetch and display upcoming matches here */}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
        {/* Fetch and display match highlights here */}
      </section>
    </main>
  );
}
