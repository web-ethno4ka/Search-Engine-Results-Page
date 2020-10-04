import React from 'react';
import Select from '../select/select';
import TagsBlock from './tags-block';
import './tags-sorting-block.scss';

export default function TagsSortingBlock() {
  const [options, setOptions] = React.useState([
    'Popularity',
    'Relevance',
    'Price ascending',
    'Price descending',
    'Average rate',
  ]);
  return (
    <div className="tags-sorting-block">
      <div className="tags-block">
        <TagsBlock tagName={'Load index: 225'} tagLink={'#'} />
        <TagsBlock tagName={'Diameter: 19'} tagLink={'#'} />
        <TagsBlock tagName={'Pirelli'} tagLink={'#'} />
        <TagsBlock tagName={'Winter'} tagLink={'#'} />
      </div>

      <div className="sorting-block">
        <Select
          typeOfBlock={'sorting-block__item'}
          labelName={'Sorting: '}
          className={'input-field--shorter'}
          options={options}
        />
      </div>
    </div>
  );
}
