import React from "react";

interface Props {
  title: string;
  artist: string;
  description: string;
}

function InfoPanel({ title, artist, description }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{artist}</h3>
      <p>{description}</p>
    </div>
  );
}

export default InfoPanel;
