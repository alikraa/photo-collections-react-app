import { HeaderProps } from '../../ts/interfaces.ts';
import './header.scss';

function Header({ categories }: HeaderProps) {
  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <input type="text" placeholder="Поиск по названию" />
    </div>
  );
}

export { Header };
