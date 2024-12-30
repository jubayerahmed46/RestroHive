import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-gray-300 mt-20">
      {/* Top Footer Section */}
      <div className="container mx-auto px-6 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Us Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-wide text-white">
            CONTACT US
          </h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-semibold tracking-wide text-white">
            Follow US
          </h3>
          <p>Join us on social media</p>
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-black py-4 text-center text-gray-400">
        <p className="text-sm">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
