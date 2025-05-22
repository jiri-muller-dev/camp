import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="text-center">
      <main>
        <section>
          <h2 id="aim">Aim</h2>
          <h2 id="activities">Activities</h2>
          <h2 id="upcoming">Upcoming event</h2>
          <ul>
            <li>Date and Countdown</li>
            <li>Map and place</li>
            <li>Requirements (age)</li>
            <li>Includes (meals, material for crafts, camp tshirt)</li>
          </ul>
          <Link href="/registration">Registration</Link>
        </section>
      </main>
    </div>
  );
}
