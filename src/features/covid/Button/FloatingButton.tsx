import React from 'react';
import { Fab } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import styles from './FloatingButton.module.css';
import { HistoryType } from '../../../App';

interface FloatingButtonInterface extends HistoryType {
  titleText: string;
  primaryColorFlg: boolean;
}

const FloatingButton = ({
  titleText,
  primaryColorFlg,
  history,
}: FloatingButtonInterface): JSX.Element => {
  return (
    <div className={styles.floatingButton}>
      {primaryColorFlg ? (
        <Fab
          variant="extended"
          color="primary"
          onClick={() => history.push('/')}
        >
          <NavigationIcon />
          {titleText}
        </Fab>
      ) : (
        <>
          <Fab
            variant="extended"
            color="secondary"
            onClick={() => history.push('/prefecture')}
          >
            <NavigationIcon />
            {titleText}
          </Fab>
          {/* <Fab
            variant="extended"
            color="default"
            onClick={() => history.push('/japan')}
          >
            <NavigationIcon />
            {titleText}
          </Fab> */}
        </>
      )}
    </div>
  );
};

export default FloatingButton;
