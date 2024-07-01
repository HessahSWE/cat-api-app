import React from 'react';
import CatImage from './CatImage';
import { useTranslation } from 'react-i18next';
import useFetchCats from '../hooks/UseFetchCats';
import { Cat } from '../types/Cat';

const CatList: React.FC = () => {
  const { t } = useTranslation();
  const { cats, error, loading } = useFetchCats(10);

  if (loading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('error')} {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cats && cats.map((cat: Cat) => (
        <CatImage key={cat.id} url={cat.url} width={cat.width} height={cat.height} />
      ))}
    </div>
  );
};

export default CatList;
