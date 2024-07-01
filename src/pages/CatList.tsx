import React from 'react';
import CatImage from './CatImage';
import useFetchCats from '../hooks/useFetchCats';
import { useTranslation } from 'react-i18next';
import { Cat } from '../types/Cat';

const CatList: React.FC = () => {
  const { t } = useTranslation();
  const { data: cats, error, isLoading } = useFetchCats(10);

  if (isLoading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('error')} {error.message}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cats && cats.map((cat: Cat) => (
        <CatImage key={cat.id} url={cat.url} width={cat.width} height={cat.height} />
      ))}
    </div>
  );
};

export default CatList;
