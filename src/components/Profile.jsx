import React, { useEffect, useState } from "react";

const Profile = ({ name = "Tú", age = 23, school = "Đời" }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <>
      <h1>Name: {name}</h1>
      <div>Age: {age}</div>
      <div>School: {school}</div>
      <button onClick={handleClick}>Click me</button>
      <div>a: {count}</div>
    </>
  );
};

export default Profile;
