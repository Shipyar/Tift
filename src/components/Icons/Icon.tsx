import React from 'react';

import IconGoogle from './IconGoogle';
import IconMail from './IconMail';
import IconCross from './IconCross';
import IconCheck from './IconCheck';
import IconLock from './IconLock';


const Icon = (props: { name: any; fill: string; width: number; height: number; stroke: string}) => {
  switch (props.name) {
    case 'icon-google':
      return <IconGoogle {...props} />;
    case 'icon-mail':
      return <IconMail {...props} />;
    case 'icon-lock':
      return <IconLock {...props} />;
    case 'icon-cross':
      return <IconCross {...props} />;
    case 'icon-check':
      return <IconCheck {...props} />;
    default:
      return null;
  }
};

export default Icon;
