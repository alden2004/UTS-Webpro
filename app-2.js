import React, { useState } from "react";

function MyComponent() {
  // Menggunakan props untuk judul
  const TitleComponent = (props) => {
    return <h1>{props.title}</h1>;
  };

  // Menggunakan state untuk menghitung jumlah klik
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Komponen menerima props */}
      <TitleComponent title="Judul Menggunakan Props" />

      {/* Komponen dengan state */}
      <button onClick={handleButtonClick}>
        Klik saya! Jumlah klik: {count}
      </button>
    </div>
  );
}

export default MyComponent;
