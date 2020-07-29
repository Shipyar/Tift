import React from 'react';

import IconGoogle from './IconGoogle';


const Icon = (props: { name: any; fill: string; width: number; height: number; }) => {
  switch (props.name) {
    case 'icon-google':
      return <IconGoogle {...props} />;
    default:
      return null;
  }
};

export default Icon;
