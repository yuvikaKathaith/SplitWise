import React from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-16 text-center text-[#1f1f1f]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          We are here for you, <br />
          contact us at <span className="text-[#ff7a30]">anytime.</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Have any questions about our services or just want to talk with us? Please reach out.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#f8ede8] rounded-xl p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#e5efff] p-3 rounded-full">
                <MessageCircle className="text-[#4a6fdc]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Chat Now</h3>
            <p className="text-gray-500 mb-4 text-sm">Right from this website</p>
            <button className="bg-black hover:bg-[#171515] text-white font-medium py-2 px-4 rounded-full text-sm">
              Start chat →
            </button>
          </div>
          <div className="bg-[#f8ede8] rounded-xl p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f3e9fe] p-3 rounded-full">
                <Mail className="text-[#a066d6]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
            <p className="text-gray-500 mb-4 text-sm">From your email app</p>
            <p className="font-medium text-sm">support@splitwiseapp.com</p>
          </div>
          <div className="bg-[#f8ede8] rounded-xl p-6 shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-[#ffe7e4] p-3 rounded-full">
                <Phone className="text-[#e06558]" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1">Call or text us</h3>
            <p className="text-gray-500 mb-4 text-sm">From your phone</p>
            <p className="font-medium text-sm">+91 98765 43210</p>
          </div>
        </div>
        <div className="bg-[#f8ede8] rounded-lg mt-12 py-4 px-6 shadow text-sm text-gray-600">
          We'll get back to you as soon as possible. Our team is available 9am–6pm on weekdays.
        </div>
      </div>
    </section>
  );
};

export default Contact;