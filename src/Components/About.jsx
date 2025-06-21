import React from "react";
import { Info, ListChecks } from "lucide-react";

const About = () => {
  return (
    <section
      className="min-h-screen px-6 py-12 md:px-20 text-[#1f1f1f]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About <span className="text-[#ff7a30]">Splitwise</span> – Group Expense Tracker
        </h2>
        <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
          A simple yet powerful way to manage shared expenses with friends, roommates, or colleagues. 
          Designed to make group budgeting stress-free with real-time updates and clear summaries.
        </p>

        <div className="rounded-2xl shadow-sm p-8 md:p-10 mb-8 bg-[#f8ede8]">
          <div className="flex items-center justify-center mb-4">
            <Info className="w-6 h-6 text-[#ff7a30] mr-2" />
            <h3 className="text-2xl text-[#ff7a30] font-semibold text-center">What It Does</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            Splitwise lets users add, split, and track group expenses in real-time. Whether it's
            for travel, rent, or shared bills, this tool ensures everyone stays in sync.
            Its mobile-first design and clean interface make it easy to use across all devices.
          </p>
        </div>

        <div className="rounded-2xl shadow-sm p-8 md:p-10 bg-[#f8ede8]">
          <div className="flex items-center justify-center mb-4">
            <ListChecks className="w-6 h-6 text-[#ff7a30] mr-2" />
            <h3 className="text-2xl text-[#ff7a30] font-semibold text-center">Key Features</h3>
          </div>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
            <li>Add and split group expenses</li>
            <li>Track balances between users</li>
            <li>Real-time updates using Socket.io</li>
            <li>Responsive, mobile-first UI</li>
            <li>Group-level and individual user summaries</li>
            <li>Transaction history and settlements</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;