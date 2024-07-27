// src/app/live/page.js
export default function LivePage() {
    return (
      <main className="p-4">
        <h1 className="text-4xl font-bold mb-4">Live Football</h1>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.example.com/live-stream"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </main>
    );
  }
  