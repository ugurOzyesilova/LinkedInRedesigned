import React from "react";
import "../styles/Story.css";

const Story = ({ image, name }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="story"
    >
      <h4>{name}</h4>
    </div>
  );
}

export default Story;
