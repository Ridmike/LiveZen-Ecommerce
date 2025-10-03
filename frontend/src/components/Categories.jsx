export default function Categories() {
  return (
    <div style={{ background: "var(--lightGray)" }}>
      <div className="mx-auto px-4 py-8 sm:px-6  lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <p
            className="text-2xl font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Shop by Category
          </p>
          <a
            href="/all-products"
            className="hidden text-sm font-semibold sm:block"
            style={{
              color: "var(--blue)",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "var(--active)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "var(--blue)")}
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div
            className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square"
            style={{ background: "var(--fadeBlack)" }}
          >
            <img
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-featured-category.jpg"
              className="absolute size-full object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--black))",
                opacity: 0.5,
              }}
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <p className="font-semibold" style={{ color: "var(--white)" }}>
                  <a href="/all-products">
                    <span className="absolute inset-0" />
                    New Arrivals
                  </a>
                </p>
                <p
                  aria-hidden="true"
                  className="mt-1 text-sm"
                  style={{ color: "var(--white)" }}
                >
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto"
            style={{ background: "var(--fadeBlack)" }}
          >
            <img
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-01.jpg"
              className="absolute size-full object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--black))",
                opacity: 0.5,
              }}
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <p className="font-semibold" style={{ color: "var(--white)" }}>
                  <a href="/all-products">
                    <span className="absolute inset-0" />
                    Accessories
                  </a>
                </p>
                <p
                  aria-hidden="true"
                  className="mt-1 text-sm"
                  style={{ color: "var(--white)" }}
                >
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div
            className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto"
            style={{ background: "var(--fadeBlack)" }}
          >
            <img
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-category-02.jpg"
              className="absolute size-full object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--black))",
                opacity: 0.5,
              }}
            />
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <p className="font-semibold" style={{ color: "var(--white)" }}>
                  <a href="/all-products">
                    <span className="absolute inset-0" />
                    Workspace
                  </a>
                </p>
                <p
                  aria-hidden="true"
                  className="mt-1 text-sm"
                  style={{ color: "var(--white)" }}
                >
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="/all-products"
            className="block text-sm font-semibold"
            style={{
              color: "var(--blue)",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "var(--active)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "var(--blue)")}
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
