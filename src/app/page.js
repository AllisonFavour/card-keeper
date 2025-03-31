import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Make your payment</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link href="/add-card">Add Card</Link>
          </button>
        </div>
      </main>
    </>
  );
}
