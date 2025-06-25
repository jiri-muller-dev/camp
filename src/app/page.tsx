import Link from 'next/link'
import Image from 'next/image'
import {
  campStartDate,
  campEndDate,
  campTitle,
  campMinAge,
  campMaxAge,
  campPrice,
} from './details'
import Countdown from './components/Countdown'
import { format } from 'date-fns'

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  const mapKey = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&maptype=satellite&q=73P7%2BVQG+Kestřany` ////

  return (
    <div className="text-center">
      <main className="flex flex-col items-center">
        <section>
          <div className="mainimage flex items-center justify-center">
            <div className="max-w-screen-md px-3">
              <h1 className="font-marker text-2xl uppercase">
                Summer youth camp
              </h1>
              <p className="mb-8 max-w-[70vw] text-center font-sans text-3xl sm:text-[5vw] xl:text-6xl">
                Find a place for friendship, adventure and growth!
              </p>
              <a href="#aim" className="btn">
                See details
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl px-3 pb-16">
          <div className="mx-auto my-15 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2 md:gap-8">
              <div className="max-w-lg md:max-w-none">
                <h2 id="aim">Aim</h2>

                <p className="mt-4 text-gray-700">
                  Our mission is to create an exciting and safe environment for
                  all. We believe that summer shouldn&apos;t be just about nice
                  weather and not going to school, we see summer as an
                  opportunity to try new things and learn in new ways. We want
                  to provide to an interesting spectrum of activities, ranging
                  from athletic to intellectual, making our camp a place to
                  truly thrive.
                </p>
              </div>

              <div>
                <Image
                  src="/anderson-schmig-f7b6WX_p1N0-unsplash.jpg"
                  width={2400}
                  height={1350}
                  alt="Group of people on hike"
                  className="-rotate-1 rounded shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto my-15 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:items-center md:gap-8">
              <div className="order-none md:order-1">
                <div className="max-w-lg md:max-w-none">
                  <h2 id="activities">Activities</h2>
                  <p className="mt-4 text-center">
                    Move&nbsp;your&nbsp;body! Train&nbsp;your&nbsp;brain!
                    Try&nbsp;something&nbsp;new!
                  </p>
                  <div className="mx-auto mt-2 w-max">
                    <p className="text-center">Our camp activities include:</p>
                    <ul className="w-full">
                      <li>Hiking</li>
                      <li>Yoga</li>
                      <li>Climbing</li>
                      <li>Board games</li>
                      <li>Writing workshop</li>
                      <li>Meditation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/jesus-loves-austin-TqHDqXkWSCk-unsplash.jpg"
                  width={1633}
                  height={1089}
                  alt="Children playing a board game"
                  className="rotate-1 rounded shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto my-15 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 justify-items-center gap-4 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 id="upcoming">Upcoming session</h2>
                  <p className="mt-4 text-center text-4xl uppercase">
                    {campTitle}
                  </p>
                  <p className="text-center text-2xl">
                    for kids ages {String(campMinAge)} to {String(campMaxAge)}
                  </p>
                  <p className="text-center text-4xl">
                    {format(campStartDate, 'd. M.')} -{' '}
                    {format(campEndDate, 'd. M. yyyy')}
                  </p>
                  <p className="text-center text-2xl">that&apos;s in</p>
                  <Countdown targetDate={new Date(campStartDate)} />
                  <p className="mb-5 text-center text-2xl">
                    for the price of {String(campPrice)} Kč
                  </p>

                  <Link href="/registration" className="btn mt-5">
                    Enroll now!
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto my-15 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center justify-items-center gap-4 md:grid-cols-2 md:gap-8">
              <div className="max-w-lg md:max-w-none">
                <h2 id="location">Location</h2>

                <p className="mt-4 text-gray-700">
                  Our facility is located in the beautiful nature near Písek. It
                  has 40 years long history of housing campers. Clean rooms,
                  cafeteria, outdoor playgrounds.
                </p>
              </div>

              <div className="w-full">
                <iframe
                  height="300px"
                  frameborder="0"
                  className="w-full border-0"
                  referrerpolicy="no-referrer-when-downgrade"
                  src={mapKey}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mx-auto my-15 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 justify-items-center gap-4 md:items-center md:gap-8">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 id="contact">Contact</h2>
                  <p className="mt-4 max-w-screen-sm text-gray-700">
                    If you have any further questions you want to discuss,
                    please do not contact us. This camp is purely fictional for
                    the puposes of learning frontend development and thus we
                    will not be able to answer your questions.
                  </p>
                  <code className="mt-4 block">jiri.muller.dev@gmail.com</code>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
