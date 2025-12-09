import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          Kingdom Legends
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-700 text-center">
            Welcome to Kingdom Legends! Your adventure begins here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
