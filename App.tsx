import React from 'react';
import { MaintenanceIcon } from './components/MaintenanceIcon';
import { CountdownTimer } from './components/CountdownTimer';

const App: React.FC = () => {
  // WIB (Waktu Indonesia Barat) is UTC+7.
  // Target: Sabtu 1 November 2025 Pukul 06.00 WIB
  const targetDate = '2025-11-01T06:00:00+07:00';

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12 text-center transform hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center mb-6">
          <MaintenanceIcon />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
          Sistem Sedang Dalam Perbaikan
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Mohon maaf atas ketidaknyamanannya. Kami sedang bekerja keras untuk meningkatkan layanan kami dan akan segera kembali online.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg leading-relaxed">
          Terima kasih atas pengertian dan kesabaran Anda.
        </p>
        
        <CountdownTimer targetDate={targetDate} />

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center flex-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>
                    Jika Anda memerlukan bantuan, hubungi kami di{' '}
                    <a href="mailto:rinomasstbi@gmail.com" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                        rinomasstbi@gmail.com
                    </a>
                </span>
            </p>
        </div>

      </div>
    </main>
  );
};

export default App;