import React from 'react';
import CatImage from './CatImage';
import useFetchCats from '../hooks/useFetchCats';

const CatList: React.FC = () => {
  const { data: cats, error, isLoading } = useFetchCats(10);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cats && cats.map((cat: { id: string; url: string; width: number; height: number }) => (
        <CatImage key={cat.id} url={cat.url} width={cat.width} height={cat.height} />
      ))}
    </div>
  );
};

export default CatList;
