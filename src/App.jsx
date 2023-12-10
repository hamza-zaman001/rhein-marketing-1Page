// src/App.js
import React, { useState } from 'react';
import './App.css';
import { diamond, line, circle, square, centered } from './assets';

const App = () => {
  const [isAnyPairHovered, setIsAnyPairHovered] = useState(false);

  return (
    <div className="App">
      {/* Pair 1: Diamond and Line */}
      <ImagePair
        defaultDiamondImage={diamond.diamondDefault1}
        hoverDiamondImage={diamond.diamondHover1}
        defaultLineImage={line.lineDefault1}
        hoverLineImage={line.lineHover1}
        positionDiamond={{ top: '50px', left: '50px' }}
        positionLine={{ top: '150px', left: '150px' }}
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
      />

      {/* Pair 2: Circle and Square */}
      <ImagePair
        defaultDiamondImage={circle.circleDefault1}
        hoverDiamondImage={circle.circleHover1}
        defaultLineImage={square.squareDefault1}
        hoverLineImage={square.squareHover1}
        positionDiamond={{ top: '250px', left: '250px' }}
        positionLine={{ top: '350px', left: '350px' }}
        onHover={() => setIsAnyPairHovered(true)}
        onLeave={() => setIsAnyPairHovered(false)}
      />

      {/* Add more ImagePair components for additional pairs */}
      
      {/* Center image that changes on any paired image hover */}
      <CenterImage isAnyPairHovered={isAnyPairHovered} />
    </div>
  );
};

const ImagePair = ({
  defaultDiamondImage,
  hoverDiamondImage,
  defaultLineImage,
  hoverLineImage,
  positionDiamond,
  positionLine,
  onHover,
  onLeave,
}) => {
  return (
    <div className="image-pair" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <ImageWithHover
        defaultImage={defaultDiamondImage}
        hoveredImage={hoverDiamondImage}
        position={positionDiamond}
      />
      <ImageWithHover
        defaultImage={defaultLineImage}
        hoveredImage={hoverLineImage}
        position={positionLine}
      />
    </div>
  );
};

const ImageWithHover = ({ defaultImage, hoveredImage, position }) => {
  return (
    <div className="image-container" style={position}>
      <img src={defaultImage} alt="Default" className="default-image" />
      <img src={hoveredImage} alt="Hovered" className="hover-image" />
    </div>
  );
};

const CenterImage = ({ isAnyPairHovered }) => {
  return (
    <div className="center-image-container">
      <img
        src={isAnyPairHovered ? centered.centeredHovered : centered.centeredDefault}
        alt="Center"
        className="center-image"
      />
    </div>
  );
};

export default App;
