import React from 'react';
import { Fab, Link } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import styles from './FloatingButton.module.css';

type FloatingButtonType = {
  titleText: string;
  primaryColorFlg: boolean;
};

const FloatingButton = ({
  titleText,
  primaryColorFlg,
}: FloatingButtonType): JSX.Element => {
  return (
    <div className={styles.floatingButton}>
      {primaryColorFlg ? (
        <Link href="/">
          <Fab variant="extended" color="primary">
            <NavigationIcon />
            {titleText}
          </Fab>
        </Link>
      ) : (
        <Link href="/world">
          <Fab variant="extended" color="default">
            <NavigationIcon />
            {titleText}
          </Fab>
        </Link>
      )}
    </div>
  );
};

export default FloatingButton;
