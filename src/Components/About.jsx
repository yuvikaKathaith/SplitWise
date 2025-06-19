import React from "react";

const About = () => {
  return (
    <section
      className="min-h-screen px-6 py-12 md:px-20 text-[#1f1f1f]"
      style={{
        background: "linear-gradient(180deg, #f3c7ab 0%, #f6e2c0 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          About <span className="text-[#e27546]">Splitwise</span> – Group Expense Tracker
        </h2>
        <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
          A simple yet powerful way to manage shared expenses with friends, roommates, or colleagues. 
          Designed to make group budgeting stress-free with real-time updates and clear summaries.
        </p>

        <div className="bg-[#eaddd1] rounded-2xl shadow-md p-8 md:p-10 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">What It Does</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Splitwise lets users add, split, and track group expenses in real-time. Whether it's
            for travel, rent, or shared bills, this tool ensures everyone stays in sync.
            Its mobile-first design and clean interface make it easy to use across all devices.
          </p>
        </div>

        <div className="bg-[#eaddd1] rounded-2xl shadow-md p-8 md:p-10">
          <h3 className="text-2xl font-semibold mb-4 text-center">Key Features</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
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