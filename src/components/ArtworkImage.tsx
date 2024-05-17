import React from "react";

interface Props {
  imagePath: string;
}

function ArtworkImage({ imagePath }: Props) {
  const imageStyle = {
    width: "100%",
    boxShadow: "6px 5px 5px grey",
  };

  return (
    <>
      <img
        style={imageStyle}
        className="img-thumbnail" // bootstrap style
        src={imagePath} // TODO: add alt text for accessibility
      />
    </>
  );
}

export default ArtworkImage;
