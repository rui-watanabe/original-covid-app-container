// import React from 'react';

// const Japan: React.FC = () => <></>;
import React from 'react';
import { HistoryType } from '../../../App';
import FloatingButton from '../Button/FloatingButton';
import MicroFrontend from '../MicroFrontend';

const Japan = ({ history }: HistoryType): JSX.Element => {
  return (
    <>
      <MicroFrontend
        history={history}
        host={process.env.REACT_APP_JAPAN_HOST}
        name="Japan"
      />
      <FloatingButton
        titleText="TO COVID LIVE DASHBOARD WORLD"
        primaryColorFlg
        history={history}
      />
    </>
  );
};

export default Japan;
