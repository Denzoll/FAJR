import React, { useEffect, useState } from "react";
import Card from "./Card";
export default function Catalog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://677e544e94bde1c1252b7c00.mockapi.io/Buildings")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
