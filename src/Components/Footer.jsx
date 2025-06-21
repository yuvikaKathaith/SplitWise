import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[1px] bg-slate-700 mt-20 ml-20 mr-20" />
      <footer className="text-black px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.svg" alt="Splitwise Logo" className="h-8 w-8" />
              <h1 className="text-2xl font-bold text-black">SplitWise</h1>
            </div>
            <p className="text-gray-700 font-medium">
              We're on a mission to make group expense <br />
              tracking effortless and clear for everyone.
            </p>
            <p className="text-gray-700">+91 98765 43210</p>
            <p className="text-gray-700">support@splitwiseapp.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-[#fa6210] mb-3">Our Company</h3>
            <ul className="space-y-2 text-gray-700">
              <li>About us</li>
              <li>Contact us</li>
              <li>Announcements</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#fa6210] mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-700">
              <li>FAQs</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#fa6210] mb-3">Become a Partner</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Our partner program</li>
              <li>Partner login</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-sm text-gray-700">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              This platform is built to simplify cost-sharing among groups.
              Splitwise is not a financial institution and does not provide
              financial advice. Use responsibly with your group.
            </p>
          </div>

          <div className="mt-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full overflow-hidden">
                <img
                  src="https://flagcdn.com/in.svg"
                  alt="India"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="text-[#fa6210]">Proudly Made in India</span>
            </div>
            <div className="text-black text-xs">
              <a href="#" className="hover:underline mr-4">
                Legal Documents
              </a>
              ©2025 Splitwise
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
