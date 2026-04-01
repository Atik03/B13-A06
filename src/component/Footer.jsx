function Footer() {
  return (
    <footer className="bg-[#0b1320] text-gray-400 py-12">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center sm:text-left">
          <div className="lg:col-span-2">
            <h2 className="text-white text-2xl font-semibold mb-4">
              DigiTools
            </h2>
            <p className="text-sm leading-6 max-w-md mx-auto sm:mx-0">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <div className="flex justify-center sm:justify-start gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer">
                <i className="fa-brands fa-youtube"></i>
              </div>

              <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <i className="fa-brands fa-facebook"></i>
              </div>

              <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-900 hover:text-white transition cursor-pointer">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col items-center md:flex-row md:justify-between text-sm text-center md:text-left">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
