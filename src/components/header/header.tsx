/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { HeaderProps } from '../../ts/interfaces.ts';
import './header.scss';

function Header({
  categories,
  handleChange,
  currentValue,
  currentCategory,
  setCurrentCategory,
}: HeaderProps) {
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            onClick={() => setCurrentCategory(index)}
            key={item.name}
            className={currentCategory === index ? 'active' : ''}
          >
            {item.name}
          </li>
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
