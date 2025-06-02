import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <main className="flex flex-col items-center">
        <section>
          <div className="mainimage flex justify-center items-center">
            <div className="max-w-screen-md px-3">
              <h1 className="uppercase text-2xl font-marker">
                Summer youth camp
              </h1>
              <p className="text-3xl sm:text-[5vw] xl:text-6xl text-center mb-8 font-sans max-w-[70vw]">
                Find a place for friendship, adventure and growth!
              </p>
              <a href="#" className="btn">
                See details
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-screen-xl px-3 pb-16">
          <div className="mx-auto max-w-screen-xl my-15 px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center justify-items-center md:gap-8">
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
                  className="rounded shadow-2xl -rotate-1"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl my-15 px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 justify-items-center">
              <div>
                <Image
                  src="/jesus-loves-austin-TqHDqXkWSCk-unsplash.jpg"
                  width={1633}
                  height={1089}
                  alt="Children playing a board game"
                  className="rounded shadow-2xl rotate-1"
                />
              </div>

              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 id="activities">Activities</h2>
                  <p>Move your body! Train your brain! Try something new!</p>
                  <ul>
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
          </div>

          <div className="mx-auto max-w-screen-xl my-15 px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:items-center md:gap-8 justify-items-center">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 id="upcoming">Upcoming event</h2>
                  <ul className="my-5">
                    <li>Date and Countdown</li>
                    <li>Map and place</li>
                    <li>Requirements (age, price)</li>
                    <li>Includes (meals, material for crafts, camp tshirt)</li>
                  </ul>

                  {/* <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span>No setup, or hidden fees</span>
                    </li>
                  </ul> */}

                  <Link href="/registration" className="btn mt-5">
                    Registration
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl my-15 px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:items-center md:gap-8 justify-items-center">
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 id="upcoming">Lorem</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus reiciendis unde quaerat hic tempora, incidunt
                    voluptate cupiditate illum, illo vitae facere quae, minima
                    nisi nulla iusto reprehenderit veniam obcaecati nobis
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas, vel. Impedit voluptatum quisquam quas pariatur
                    similique ratione culpa repellat ducimus, veniam numquam
                    itaque sapiente facere explicabo debitis eligendi voluptate
                    in nam omnis libero repudiandae nulla earum. Eveniet nisi
                    dolore vero assumenda magnam blanditiis voluptatem quo
                    voluptate omnis ipsum aliquam deleniti nobis totam autem
                    odit quasi, beatae deserunt earum explicabo minus facere ea
                    iure ut dicta. Culpa pariatur qui eveniet, consectetur hic
                    necessitatibus eligendi doloremque fuga, voluptas quisquam
                    accusamus saepe molestias, debitis aliquid quasi nesciunt ea
                    optio corrupti delectus. Voluptas consequatur nihil eum
                    optio, suscipit dolorem qui pariatur iusto molestias
                    necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
