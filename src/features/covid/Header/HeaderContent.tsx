import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

type HeaderContentType = {
  titleText: string;
  dateText: string;
};

const HeaderContent = ({
  titleText,
  dateText,
}: HeaderContentType): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {titleText}
        </Typography>
        <div>
          <Typography variant="body1">{dateText}</Typography>
        </div>
      </Toolbar>
    </>
  );
};

export default HeaderContent;
