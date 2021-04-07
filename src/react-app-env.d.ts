/// <reference types="react-scripts" />

/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    // readonly REACT_APP_NODE_ENV: 'development' | 'production' | 'test';
    readonly REACT_APP_JAPAN_HOST: string;
    readonly REACT_APP_WORLD_HOST: string;
    readonly REACT_APP_PREFECTURE_HOST: string;
  }
}
