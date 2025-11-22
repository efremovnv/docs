import React, { useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';

export default function FaviconSwitcher(): JSX.Element {
  const { colorMode } = useColorMode();

  useEffect(() => {
    // Находим существующий favicon или создаем новый
    let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }

    // Устанавливаем favicon в зависимости от темы
    if (colorMode === 'dark') {
      favicon.href = '/docs/img/logo2-dark.svg';
    } else {
      favicon.href = '/docs/img/logo2.svg';
    }
  }, [colorMode]);

  return (
    <Head>
      <link
        rel="icon"
        href={colorMode === 'dark' ? '/docs/img/logo2-dark.svg' : '/docs/img/logo2.svg'}
      />
    </Head>
  );
}

