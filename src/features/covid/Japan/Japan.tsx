import React from 'react';
import { HistoryType } from '../../../App';
import FloatingButton from '../Button/FloatingButton';
import Header from '../Header/Header';
import MicroFrontend from '../MicroFrontend';

const Japan = ({ history }: HistoryType): JSX.Element => {
  const today = new Date();
  const yesterdayText = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  ).toLocaleDateString();

  return (
    <>
      <Header
        titleText="COVID LIVE DASHBOARD JAPAN"
        dateText={`${yesterdayText}更新`}
        primaryColorFlg={false}
      />
      <MicroFrontend
        history={history}
        host={process.env.REACT_APP_JAPAN_HOST}
        name="Japan"
      />
      <FloatingButton
        titleText="TO COVID LIVE DASHBOARD WORLD"
        primaryColorFlg={false}
      />
    </>
  );
};

export default Japan;
