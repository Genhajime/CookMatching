import React from 'react';
import { fade, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import PostTile from './PostTile';
import {posts} from '../../data/data';

const searchResult = posts.filter( post => post.id===5);

const myTheme = createMuiTheme({
  overrides: {
    MuiAppBar:{
      colorPrimary: {
        backgroundColor: '#fff',
        color: '#000',
      },
      root: {
        boxShadow: 'none',
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: { 
    //flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  inputRoot: { 
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1,1,1,7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridList: { width: '100%' },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={myTheme}>
        <AppBar position="static">
          <ToolBar className={classes.toolbar}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value='麻婆豆腐'
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </ToolBar>
        </AppBar>
      </ThemeProvider>
      <GridList cellHeight={1000} className={classes.gridList} cols={1} >
        {searchResult.map( post => (
          <GridListTile key={post.id}>
            <PostTile post={post} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Search