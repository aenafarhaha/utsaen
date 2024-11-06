import React from 'react';

// Data Hobi
const hobbies = [
  { name: 'Listen Music', image: '/images/hobby1.jpg' },
  { name: 'Drawing', image: '/images/hobby2.jpg' },
  { name: 'Photography', image: '/images/hobby3.png' },
  { name: 'Foreign Language Learning', image: '/images/hobby4.jpg' },
  { name: 'Watching Video & Movies', image: '/images/hobby5.png' },
  { name: 'Handcraft', image: '/images/hobby6.jpg' },
  
];

const MyGallery = () => {
  return (
    <section className="p-3 bg-gradient-to-r from-blue-200 to-pink-300 shadow-md rounded-sm">
      <h2 className="text-2xl font-semibold mb-6 text-center text-pink-800">My Hobby</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-32 h-32 object-cover rounded-lg mb-2 shadow-md transition-transform transform hover:scale-200"
            />
            <span className="mt-4 text-gray-800 text-md text-center font-semibold">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-screen flex items-center justify-center">
      {/* Membatasi lebar maksimal untuk background */}
      <div className="max-w-6xl w-full bg-white p-3 rounded-lg shadow-md">
        <MyGallery />
      </div>
    </div>
  );
};

export default App;
