import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchAsyncGetData,
//   selectCurrentData,
// } from '../covidSlice';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  content: { marginTop: 85 },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const currentDataList = useSelector(selectCurrentData);

  // useEffect(() => {
  //   dispatch(fetchAsyncGetData('positive-cases'));
  //   dispatch(fetchAsyncGetLatestData('positive-cases'));
  // }, [dispatch]);

  return (
    <>
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID LIVE DASHBOARD
          </Typography>
          <div>
            <Typography variant="body1">
              {
                new Date().toLocaleDateString()
                // currentDataList[currentDataList.length - 1].date
              }
              更新
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
