import React, { useEffect, useState } from "react";

const Serach = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  let fetc = async () => {
    let response = await fetch(
      `https://dummyjson.com/products/search?q=${input}`
    );
    let data = await response.json();
    setList(data);
  };

  console.log(list);

  useEffect(() => {
    if (input) {
      fetc();
    } else {
      setList([]);
    }
  }, [input]);

  return (
    <div>
      <input type="text" onChange={(event) => setInput(event.target.value)} />
    </div>
  );
};

export default Serach;
