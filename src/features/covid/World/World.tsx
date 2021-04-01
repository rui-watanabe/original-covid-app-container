import React from 'react';
import { HistoryType } from '../../../App';
import FloatingButton from '../Button/FloatingButton';
import MicroFrontend from '../MicroFrontend';

const World = ({ history }: HistoryType): JSX.Element => {
  return (
    <>
      <MicroFrontend
        history={history}
        host={process.env.REACT_APP_WORLD_HOST}
        name="World"
      />
      <FloatingButton
        history={history}
        titleText="COVID LIVE DASHBOARD JAPAN"
        primaryColorFlg
      />
      ;
    </>
  );
};

export default World;
