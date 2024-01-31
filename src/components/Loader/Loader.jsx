import React from 'react';
import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <Audio
        visible={true}
        height="70"
        width="70"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass={css.audioWrapper}
      />
    </div>
  );
};

export default Loader;
