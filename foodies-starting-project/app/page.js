import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meal</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
      <p>
        <Link href="/meals/1">/meals/1</Link>
      </p>
      <p>
        <Link href="/meals/2">/meals/2</Link>
      </p>
    </main>
  );
}
