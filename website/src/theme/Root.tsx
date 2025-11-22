import React from 'react';
import type {ReactNode} from 'react';
import FaviconSwitcher from '@site/src/components/FaviconSwitcher';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <>
      <FaviconSwitcher />
      {children}
    </>
  );
}

