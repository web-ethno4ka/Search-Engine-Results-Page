import React from 'react';
import Select from '../select/select';
import Tags_block from './tags-block';
import './tags-sorting-block.scss';

export default function Tags_sorting_block() {
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
        <Tags_block tagName={'Load index: 225'} tagLink={'#'} />
        <Tags_block tagName={'Diameter: 19'} tagLink={'#'} />
        <Tags_block tagName={'Pirelli'} tagLink={'#'} />
        <Tags_block tagName={'Winter'} tagLink={'#'} />
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
