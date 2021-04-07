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
        titleText="全国医療提供体制状況へ"
        primaryColorFlg={false}
      />
      ;
    </>
  );
};

export default World;
