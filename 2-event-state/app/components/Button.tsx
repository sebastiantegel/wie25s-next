"use client";

export const Button = () => {
  const handleClick = () => {
    console.log("Du klickade på knappen");
  };

  return <button onClick={handleClick}>Klicka här</button>;
};
