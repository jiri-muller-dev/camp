import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="text-center">
      <main>
        <section>
          <div className="mainimage flex justify-center items-center">
            <div>
              <p className="font-bold uppercase text-2xl">Summer youth camp</p>
              <h1 className="text-7xl mb-8">
                Find a place for friendship, adventure and growth!
              </h1>
              <a href="#" className="btn">
                See details
              </a>
            </div>
          </div>
        </section>
        <section>
          <h2 id="aim">Aim</h2>
          <h2 id="activities">Activities</h2>
          <h2 id="upcoming">Upcoming event</h2>
          <ul className="my-5">
            <li>Date and Countdown</li>
            <li>Map and place</li>
            <li>Requirements (age)</li>
            <li>Includes (meals, material for crafts, camp tshirt)</li>
          </ul>
          <Link href="/registration" className="btn mt-5">
            Registration
          </Link>
        </section>
      </main>
    </div>
  );
}
