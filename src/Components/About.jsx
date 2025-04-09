import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About FlexWearShop</h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-blue-600">FlexWearShop</span> — your one-stop destination for fashion that’s flexible, fresh, and fabulous.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          We’re passionate about helping you express your personal style with quality clothing, shoes, and accessories. Whether you're dressing for comfort, performance, or making a statement, we have something for everyone.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Our mission is simple: to deliver premium fashion with a seamless shopping experience. From handpicked collections to smooth checkout, we make fashion fun and easy.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Thank you for choosing <span className="font-semibold text-blue-600">FlexWearShop</span>. We’re here to help you look great and feel confident—every single day.
        </p>
      </div>
    </div>
  );
}

export default About;
