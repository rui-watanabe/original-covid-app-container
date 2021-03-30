import React from 'react';
import { AppBar } from '@material-ui/core';
import HeaderContent from './HeaderContent';

type HeaderType = {
  titleText: string;
  dateText: string;
  primaryColorFlg: boolean;
};

const Header = ({
  titleText,
  dateText,
  primaryColorFlg,
}: HeaderType): JSX.Element => {
  return (
    <>
      {primaryColorFlg ? (
        <AppBar position="absolute" color="primary">
          <HeaderContent titleText={titleText} dateText={dateText} />
        </AppBar>
      ) : (
        <AppBar position="absolute" color="default">
          <HeaderContent titleText={titleText} dateText={dateText} />
        </AppBar>
      )}
    </>
  );
};

export default Header;
