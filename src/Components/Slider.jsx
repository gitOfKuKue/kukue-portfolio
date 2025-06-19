import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://via.placeholder.com/900x400?text=Slide+1",
  "https://via.placeholder.com/900x400?text=Slide+2",
  "https://via.placeholder.com/900x400?text=Slide+3",
];

export default function Slider() {
  return (
    <div style={containerStyle}>
      <Slide easing="ease" indicators autoplay>
        {slideImages.map((slide, index) => (
          <div key={index} style={slideStyle}>
            <div
              style={{
                ...imageStyle,
                backgroundImage: `url(${slide})`,
              }}
            >
              <span style={textStyle}>Slide {index + 1}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

// Inline styles
const containerStyle = {
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
  borderRadius: "8px",
  overflow: "hidden",
};

const slideStyle = {
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const textStyle = {
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.4)",
  padding: "10px 20px",
  borderRadius: "4px",
  fontSize: "1.5rem",
};
