import React, { useState } from 'react';

// Atom: Input
const InputAtom = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '' 
}) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded p-2 w-full ${className}`}
    />
  );
};

// Atom: Button
const ButtonAtom = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white rounded p-2 hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

// Molecule: Simple Form
const InputFormMolecule = ({ onSubmit, label }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue(''); // Reset input setelah submit
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md"
    >
      <h2 className="text-xl mb-4 font-bold">{label}</h2>
      <div className="flex space-x-2">
        <InputAtom 
          placeholder="Masukkan teks"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow"
        />
        <ButtonAtom type="submit">
          Kirim
        </ButtonAtom>
      </div>
    </form>
  );
};

// Contoh penggunaan di App
const App = () => {
  const [submittedItems, setSubmittedItems] = useState([]);

  const handleFormSubmit = (value) => {
    if (value.trim()) {
      setSubmittedItems([...submittedItems, value]);
    }
  };

  return (
    <div className="p-6">
      <InputFormMolecule 
        label="Form Input Sederhana" 
        onSubmit={handleFormSubmit} 
      />
      
      {/* Menampilkan daftar item yang disubmit */}
      {submittedItems.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Daftar Item:</h3>
          <ul className="list-disc pl-5">
            {submittedItems.map((item, index) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;