import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Footer */}
      <div className="p-10 flex flex-wrap justify-between">
        <div className="w-full md:w-2/6 mb-6 md:mb-0">
          <Image
            alt="logo"
            src="/assets/images/logo2.png"
            height={49}
            width={197}
          />
          <p className="mt-4">
            Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
            unde quae qui quasi mollitia tenetur. Dicta explicabo est
            consectetur maxime quos fugit velit assumenda est.
          </p>
        </div>

        <div className="w-full md:w-3/6">
          <h2 className="text-lg font-semibold mb-2">Sign Up For Our Newsletter!</h2>
          <p className="mb-4">
            Get notified about updates and be the first to get early access to
            new Podcast episodes.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-4/6 p-2 rounded-l-md"
            />
            <button className="w-2/6 bg-primary text-white p-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
        <div>
          <h6 className="text-lg font-semibold mb-3">Contact Us</h6>
          <a href="mailto:support@we5ive.com" className="block text-gray-400 hover:text-white">
            support@we5ive.com
          </a>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-3">Quick Links</h6>
          <a href="#" className="block text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Contact Us
          </a>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-3">Policies</h6>
          <a href="#" className="block text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Terms & Conditions
          </a>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-3">Follow Us</h6>
          <a href="#" className="block text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Twitter
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary text-white text-center p-3">
        <p>&copy; 2024 | We5ive</p>
      </div>
    </footer>
  );
};

export default Footer;
