import React from 'react';

interface CatImageProps {
  url: string;
  width: number;
  height: number;
}

const CatImage: React.FC<CatImageProps> = ({ url, width, height }) => (
  <div className="m-4">
    <img src={url} alt="Cat" width={width} height={height} className="rounded-lg shadow-lg" />
  </div>
);

export default CatImage;

