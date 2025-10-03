import { useState } from "react";

export default function HeroSection() {
  return (
    <div
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className="relative isolate overflow-hidden"
      style={{ backgroundColor: "var(--gray)" }}>
        {/* <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 hidden size-full object-cover dark:block"
        />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay"
          className="absolute inset-0 -z-10 size-full object-cover opacity-10 dark:hidden"
        /> */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 ">
          <div className="mx-auto  py-20 sm:py-30 lg:py-30">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            <div className="text-center">
              <p
                className="text-balance text-xl font-extrabold tracking-tight sm:text-4xl "
                style={{ color: "var(--text)" }}
              >
                Elevate Your Shopping Experience
              </p>
              <p
                className="mt-8 text-pretty text-lg font-medium sm:text-xl "
                style={{ color: "var(--darkgray)" }}
              >
                Discover the latest trends, exclusive deals, and top brands all
                in one place. Shop with confidence and enjoy fast delivery,
                secure payments, and 24/7 customer support. Your favorite
                products are just a click away!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/all-products"
                  className="rounded-md px-6 py-3 text-lg font-bold shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 transition-all"
                  style={{
                    backgroundColor: "var(--yellow)",
                    color: "var(--text)",
                    focusVisibleOutlineColor: "var(--yellow)",
                  }}
                  
                >
                  Shop Now
                </a>
                <a
                  href="#deals"
                  className="text-lg font-semibold hover:underline"
                  style={{ color: "var(--blue)" }}
                >
                  View Deals <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
