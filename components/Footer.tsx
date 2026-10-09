import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#0a2f66] px-6 py-10 text-white md:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Filters</h3>
          <div className="flex gap-6">
            <span>All</span>
            <span>Electronics</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">About Us</h3>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b5cad]"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b5cad]"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b5cad]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl">© 2026 American</p>
    </footer>
  );
}
