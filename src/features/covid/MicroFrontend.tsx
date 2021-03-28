import React, { useEffect } from 'react';
import * as H from 'history';

type MicroFrontendType = {
  name: string;
  host: string;
  history: H.History;
};

declare global {
  interface Window {
    renderWorld: (containerId: string, history: H.History) => void;
    unmountWorld: (containerId: string) => void;
    renderJapan: (containerId: string, history: H.History) => void;
    unmountJapan: (containerId: string) => void;
    [key: string]: (containerId: string, history?: H.History) => void;
  }
}

const MicroFrontend: {
  ({ name, host, history }: MicroFrontendType): JSX.Element;
} = ({ name, host, history }: MicroFrontendType) => {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;
    const renderMicroFrontend = () => {
      window[`render${name}`](`${name}-container`, history);
    };

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return undefined;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        script.src = `${host}${manifest.files['main.js']}`;
        script.onload = () => {
          renderMicroFrontend();
        };
        document.head.appendChild(script);
      });

    return () => {
      if (window[`unmount${name}`]) {
        window[`unmount${name}`](`${name}-container`);
      }
    };
  });

  return <main id={`${name}-container`} />;
};

export default MicroFrontend;
