import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        color: "var(--white)",
        paddingTop: "2.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Shop Info */}
        <div>
          <h2
            style={{ color: "var(--white)" }}
            className="text-xl font-bold mb-4"
          >
            ShopBox
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--darkgray)" }}>
            Your one-stop shop for the latest trends, best deals, and top
            brands. Shop with confidence and enjoy fast delivery!
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              aria-label="Facebook"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--yellow)")
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--white)")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--yellow)")
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--white)")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0016.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.044.762.127 1.124C7.728 8.82 4.1 6.884 1.671 3.149c-.423.724-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 1.997 1.397 3.872 3.448 4.292a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--yellow)")
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--white)")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.282.342 2.394 1.322 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.98-.98 1.263-2.092 1.322-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.282-.342-2.394-1.322-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Useful Links */}
        <div>
          <h3
            style={{ color: "var(--white)" }}
            className="text-lg font-semibold mb-4"
          >
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/all-products"
                style={{ color: "var(--white)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={{ color: "var(--white)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{ color: "var(--white)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#faq"
                style={{ color: "var(--white)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <h3
            style={{ color: "var(--white)" }}
            className="text-lg font-semibold mb-4"
          >
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#shipping"
                style={{ color: "var(--white)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                Shipping & Returns
              </a>
            </li>
            <li>
              <a
                href="#support"
                style={{ color: "var(--white)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                Support Center
              </a>
            </li>
            <li>
              <a
                href="#track"
                style={{ color: "var(--white)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                Track Order
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                style={{ color: "var(--white)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                style={{ color: "var(--white)" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = "var(--yellow)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3
            style={{ color: "var(--white)" }}
            className="text-lg font-semibold mb-4"
          >
            Email To Us
          </h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              style={{
                background: "var(--gray)",
                color: "var(--white)",
                border: "none",
              }}
              className="px-4 py-2 rounded focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              style={{
                background: "var(--yellow)",
                color: "var(--black)",
                fontWeight: "bold",
              }}
              className="py-2 rounded hover:bg-yellow-300 transition-all"
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#fde047")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "var(--yellow)")
              }
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid var(--gray)",
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          color: "var(--gray)",
          textAlign: "center",
          fontSize: "0.875rem",
        }}
      >
        &copy; {new Date().getFullYear()} ShopBox. All rights reserved.
      </div>
    </footer>
  );
}
