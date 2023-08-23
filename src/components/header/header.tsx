import { categories } from '../../ts/view.ts';
import './header.scss';

function Header() {
  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input type="text" placeholder="Поиск по названию" />
    </div>
  );
}

export { Header };
