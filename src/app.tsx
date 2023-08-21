import './app.scss';

function App() {
  return (
    <div className="photo-collections-app">
      <h1 className="header">Моя коллекция фотографий</h1>
      <div className="photo-collections-app__content">
        <div className="categories">
          <ul>
            <li>Все</li>
            <li>Горы</li>
            <li>Море</li>
            <li>Архитектура</li>
            <li>Города</li>
          </ul>
          <input type="text" name="" id="" placeholder="Поиск по названию" />
        </div>
        <div className="collections">
          <div className="collection">
            <img src="./img-icon.svg" alt="Img" id="1" className="img-1" />
            <img src="./img-icon.svg" alt="Img" id="2" />
            <img src="./img-icon.svg" alt="Img" id="3" />
            <img src="./img-icon.svg" alt="Img" id="4" />
            <h4>Путешествия по миру</h4>
          </div>
          <div className="collection">
            <img src="./img-icon.svg" alt="Img" id="1" className="img-1" />
            <img src="./img-icon.svg" alt="Img" id="2" />
            <img src="./img-icon.svg" alt="Img" id="3" />
            <img src="./img-icon.svg" alt="Img" id="4" />
            <h4>Путешествия по миру</h4>
          </div>
          <div className="collection">
            <img src="./img-icon.svg" alt="Img" id="1" className="img-1" />
            <img src="./img-icon.svg" alt="Img" id="2" />
            <img src="./img-icon.svg" alt="Img" id="3" />
            <img src="./img-icon.svg" alt="Img" id="4" />
            <h4>Путешествия по миру</h4>
          </div>
          <div className="collection">
            <img src="./img-icon.svg" alt="Img" id="1" className="img-1" />
            <img src="./img-icon.svg" alt="Img" id="2" />
            <img src="./img-icon.svg" alt="Img" id="3" />
            <img src="./img-icon.svg" alt="Img" id="4" />
            <h4>Путешествия по миру</h4>
          </div>
        </div>
        <button type="button" className="pagination">
          1
        </button>
        <button type="button" className="pagination">
          2
        </button>
        <button type="button" className="pagination">
          3
        </button>
      </div>
    </div>
  );
}

export { App };
