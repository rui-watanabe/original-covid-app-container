import React from 'react';
import { HistoryType } from '../../../App';
import FloatingButton from '../Button/FloatingButton';
import Header from '../Header/Header';
import MicroFrontend from '../MicroFrontend';

const World = ({ history }: HistoryType): JSX.Element => {
  const todayText = new Date().toLocaleDateString();
  return (
    <>
      <Header
        titleText="COVID LIVE DASHBOARD WORLD"
        dateText={`${todayText}更新`}
        primaryColorFlg
      />
      <MicroFrontend
        history={history}
        host={process.env.REACT_APP_WORLD_HOST}
        name="World"
      />
      <FloatingButton titleText="COVID LIVE DASHBOARD JAPAN" primaryColorFlg />;
    </>
  );
};

export default World;
