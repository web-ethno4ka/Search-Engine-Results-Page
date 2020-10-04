import React from 'react';
import './tags-block.scss';

export default function TagsBlock({ tagName, tagLink }) {
  return (
    <React.Fragment>
      <ul className="tags-block">
        <li className="tags-block__item">
          <a href={tagLink} className="tags-block__link">
            {tagName}
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}
