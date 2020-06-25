import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const myTheme = createMuiTheme({
  overrides: {
    MuiAppBar:{
      colorPrimary: {
        backgroundColor: '#fff',
        color: '#000',
      },
      root: {
        height: '80px',
        boxShadow: 'none',
      }
    }
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <ThemeProvider theme={myTheme}>
        <AppBar position='static' color="primary" className={classes.toolbar}>
          <ToolBar >
            <Typography variant="h4" align='center' className={classes.title}>
              CookMatching
            </Typography>
          </ToolBar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}

export default Header