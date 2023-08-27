import React from 'react';
import { HeaderProps } from '../../ts/interfaces.ts';
import './header.scss';

function Header({ categories, handleChange, currentValue }: HeaderProps) {
  return (
    <div className="categories">
      <ul>
        {categories.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Поиск по названию"
        value={currentValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(event.target.value)
        }
      />
    </div>
  );
}

export { Header };
