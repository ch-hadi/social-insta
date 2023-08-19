import React from 'react';

const CInput = (props) => {
  console.log(props,'o')
  return (
    <div className='w-full'>
      <input
        className='w-full border-b-2 focus:outline-none'
        onChange={props.onChange}
        defaultValue={props.value}
        placeholder={props.placeholder}
        autoFocus={false}
      />
    </div>
  );
};

export default CInput;
