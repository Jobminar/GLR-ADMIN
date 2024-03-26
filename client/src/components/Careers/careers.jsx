import React, { useEffect, useState } from "react";

const Careers = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await fetch("https://glr-be.onrender.com/getcareer");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCareerData(data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };

    fetchCareerData();
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {careerData.map((item, index) => (
        <div
          key={index}
          style={{
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{item.jobTitle}</h3>
        </div>
      ))}
    </div>
  );
};

export default Careers;
