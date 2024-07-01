import React from 'react';
import { CatImageProps } from '../types/CatImageProps';


const CatImage: React.FC<CatImageProps> = ({ url, width, height }) => (
  <div className="m-4">
    <img src={url} alt="Cat" width={width} height={height} className="rounded-lg shadow-lg" />
  </div>
);

export default CatImage;
