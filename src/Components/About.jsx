import React from "react";

const About = () => {
  return (
    <section className="min-h-screen px-6 py-12 md:px-20 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Splitwise – Group Expense Tracker
        </h2>

        <p className="text-lg mb-6 leading-relaxed">
          Managing shared expenses with friends, roommates, or colleagues can get
          complicated — that's where <span className="font-semibold">Splitwise</span> comes in.
          This app simplifies group budgeting by allowing users to easily add, split,
          and track expenses in real-time.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Whether you're planning a trip, sharing rent, or splitting bills with
          friends, Splitwise ensures transparency. It keeps everyone on the same
          page with live updates, clean summaries, and a mobile-first responsive
          design that works smoothly across all devices.
        </p>

        <div className="rounded-2xl p-6 mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Tech Stack</h3>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Real-Time:</strong> Socket.io</li>
          </ul>
        </div>

        <div className="rounded-2xl p-6 mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Key Features</h3>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Add and split group expenses</li>
            <li>Track balances between users</li>
            <li>Real-time updates using Socket.io</li>
            <li>Responsive, mobile-first UI</li>
            <li>Group-level and individual user summaries</li>
            <li>History of transactions and settlements</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
