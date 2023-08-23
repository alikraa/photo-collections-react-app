import { Header } from './components/header/header.tsx';
import { Collection } from './components/collection/collection.tsx';
import { mockData, pageNumbers } from './ts/view.ts';
import './app.scss';

function App() {
  return (
    <div className="photo-collections-app">
      <h1 className="header">Моя коллекция фотографий</h1>
      <div className="photo-collections-app__content">
        <Header />
        <div className="collections">
          {mockData.map((item) => (
            <Collection
              key={item.id}
              img1={item.img1}
              img2={item.img2}
              img3={item.img3}
              img4={item.img4}
              header={item.header}
            />
          ))}
        </div>
        {pageNumbers.map((item) => (
          <button type="button" className="pagination">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export { App };
