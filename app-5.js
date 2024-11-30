import React, { useState } from 'react';

// Komponen navigasi
const Navigation = ({ onNavigate }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <div className="space-x-4">
        <button 
          onClick={() => onNavigate('home')} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Beranda
        </button>
        <button 
          onClick={() => onNavigate('product/1')} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Produk 1
        </button>
        <button 
          onClick={() => onNavigate('product/2')} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Produk 2
        </button>
      </div>
    </div>
  );
};

// Komponen halaman beranda
const Home = ({ onNavigate }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Selamat Datang di Halaman Beranda</h1>
      <p className="mt-4">Silakan pilih produk dari menu navigasi.</p>
    </div>
  );
};

// Komponen detail produk
const ProductDetail = ({ productId, onNavigate }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        Product Detail for Product ID: {productId}
      </h1>
      <button 
        onClick={() => onNavigate('home')} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

// Aplikasi utama
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Fungsi untuk menangani navigasi
  const handleNavigation = (route) => {
    setCurrentPage(route);
  };

  // Render halaman berdasarkan state currentPage
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={handleNavigation} />;
    }
    
    if (currentPage.startsWith('product/')) {
      const productId = currentPage.split('/')[1];
      return (
        <ProductDetail 
          productId={productId} 
          onNavigate={handleNavigation} 
        />
      );
    }
  };

  return (
    <div className="container mx-auto">
      <Navigation onNavigate={handleNavigation} />
      <div className="mt-4">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
