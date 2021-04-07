import React from 'react';
import { HistoryType } from '../../../App';
import FloatingButton from '../Button/FloatingButton';
import MicroFrontend from '../MicroFrontend';

const Prefecture = ({ history }: HistoryType): JSX.Element => {
  return (
    <>
      <MicroFrontend
        history={history}
        host={process.env.REACT_APP_PREFECTURE_HOST}
        name="Prefecture"
      />
      <FloatingButton
        titleText="TO COVID LIVE DASHBOARD WORLD"
        primaryColorFlg
        history={history}
      />
    </>
  );
};

export default Prefecture;
