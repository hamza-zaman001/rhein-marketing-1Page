import React, { useState } from "react";
import { Image } from "@chakra-ui/core";

export default function App() {
  const image1 = 'url("ts.png")';
  const image2 = 'url("jss.png")';

  const [image, setImage] = useState(image1);

  return (
    <Image
      style={{ content: image }}
      onMouseEnter={() => setImage(image2)}
      onMouseOut={() => setImage(image1)}
      width={200}
    />
  );
}
