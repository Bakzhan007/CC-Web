import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SaleTest() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Акции и предложения - Тест
            </h1>
            <p className="text-gray-600">Тестовая страница работает!</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SaleTest;