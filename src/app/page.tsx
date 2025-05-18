import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <main>
        <h1 className="text-2xl font-bold text-shadow-sm">Homepage</h1>
        <Link href="/list">List of registrations</Link>
      </main>
    </div>
  );
}
