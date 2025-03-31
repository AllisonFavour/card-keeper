import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Make your payment</h1>
    <button>
      <Link href='/add-card'>Add Card</Link>
    </button>
    </>
  );
}
