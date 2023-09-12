import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ tile }) => {
  return (
    <div>
      {tile.map(({ name, ...description }, index) => (  
        <Tile key={index} name={name} description={description} />
      ))}
    </div>
  );
};
