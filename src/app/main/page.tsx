
import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

export default function Page() {
    return (
        <DashboardLayout>
      <main className="flex  min-h-screen flex-col items-center justify-center">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <h1>Main Page</h1>
        </div>
      </main>
      </DashboardLayout>
    );
  }
    