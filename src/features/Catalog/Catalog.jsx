import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
export default function Catalog() {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const handleLoadMore = () => {
    setVisibleData(data);
  };
  useEffect(() => {
    fetch("https://677e544e94bde1c1252b7c00.mockapi.io/Buildings")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setVisibleData(data.slice(0, 3)); // Изначально показываем только 3 объекта
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {visibleData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Button onClick={handleLoadMore} />
    </>
  );
}
