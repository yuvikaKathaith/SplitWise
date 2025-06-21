import React from "react";
import { Info, ListChecks, LayoutDashboard } from "lucide-react";

const About = () => {
  return (
    <section className="max-h-screen px-6 py-16 text-center text-[#1f1f1f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-[#ff7a30]">SplitWise.</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          A clean and intuitive platform to manage shared expenses with ease, whether you're splitting rent, travel costs, or everyday bills.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#f8ede8] rounded-xl p-10 shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#ffe7e4] p-3 rounded-full">
                <Info className="text-[#ff7a30]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">What It Solves</h3>
            <p className="text-gray-500 text-sm">
              No more awkward reminders or messy spreadsheets, Splitwise keeps track of who owes whom and how much, automatically.
            </p>
          </div>

          <div className="bg-[#f8ede8] rounded-xl p-10 shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#e5efff] p-3 rounded-full">
                <LayoutDashboard className="text-[#4a6fdc]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Simple by Design</h3>
            <p className="text-gray-500 text-sm">
              Clean, mobile-first interface that works beautifully on any device, built for everyday users, not tech experts.
            </p>
          </div>

          <div className="bg-[#f8ede8] rounded-xl p-10 shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f3e9fe] p-3 rounded-full">
                <ListChecks className="text-[#a066d6]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Key Highlights</h3>
            <ul className="text-gray-500 text-sm text-center space-y-1 mt-2">
              Smart expense splitting,
              Real-time balance tracking, 
              Instant sync with Socket.io, 
              Detailed group summaries, 
              One-click settlements
            </ul>
          </div>
        </div>

        <div className="bg-[#f8ede8] rounded-lg mt-12 py-4 px-6 shadow text-sm text-gray-600">
          Trusted by roommates, travel groups, and teams—Splitwise makes splitting bills painless and fair.
        </div>
      </div>
    </section>
  );
};

export default About;