import { useEffect, useState } from 'react';
import { Header } from './components/header/header.tsx';
import { Collection } from './components/collection/collection.tsx';
import { CollectionData, CategoriesData } from './ts/interfaces.ts';
import { serverRequest } from './ts/request.ts';
import { pageNumbers } from './ts/view.ts';
import './app.scss';

function App() {
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const [collections, setCollections] = useState<CollectionData[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    serverRequest(
      `https://64e8a27b99cf45b15fdfe66d.mockapi.io/photo_collections?${
        currentCategory ? `category=${currentCategory}` : ''
      }`
    ).then((json) => {
      setCollections(json);
    });
  }, [currentCategory]);

  useEffect(() => {
    serverRequest(
      'https://64e8a27b99cf45b15fdfe66d.mockapi.io/photo_categories'
    ).then((json) => setCategories(json));
  }, []);

  return (
    <div className="photo-collections-app">
      <h1 className="header">Моя коллекция фотографий</h1>
      <div className="photo-collections-app__content">
        <Header
          categories={categories}
          handleChange={setSearchValue}
          currentValue={searchValue}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <div className="collections">
          {collections
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Collection
                key={item.id}
                img1={item.photos[0]}
                img2={item.photos[1]}
                img3={item.photos[2]}
                img4={item.photos[3]}
                header={item.name}
              />
            ))}
        </div>
        {pageNumbers.map((item) => (
          <button key={item} type="button" className="pagination">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export { App };
