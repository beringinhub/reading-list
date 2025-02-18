import React from 'react';
import FontScaleControls from './FontScaleControls';

export default function Root({children}): JSX.Element {
  return (
    <>
      {children}
      <FontScaleControls />
    </>
  );
} 