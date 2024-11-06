import React from 'react';

const MyInfos = {
  TTL: 'Majalengka, 17 April 2004',
  JenisKelamin: 'Perempuan',
  TinggiBadan: '160 cm',
  BeratBadan: '45 kg',
  StatusPernikahan: 'Belum Menikah',
  Whatsapp: '+62 821 1816 2580',
  Email: 'farhatullael@gmail.com',
};

const PersonalInfo = () => {
  return (
    <section className="p-4 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-center text-pink-800">Personal Info</h2>
      <ul className="space-y-1">
        {Object.entries(MyInfos).map(([key, value]) => (
          <li key={key} className="flex justify-between items-center p-3 bg-white border border-gray-300 rounded-md shadow hover:shadow-lg transition duration-200">
            <strong className="text-gray-800 text-sm">{key.replace(/([A-Z])/g, ' $1')}</strong>
            <span className="text-gray-700 text-sm">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="max-w-sm w-full p-3 bg-gradient-to-r from-blue-200 to-pink-300 shadow-md rounded-lg">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default App;
