import React from 'react';
import { Link, withRouter } from 'react-router-dom'

import { BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'block',
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    //zIndex: 1000,
    textAlign: 'center',
  }
}));

const BottomNav = () => {
  const classes = useStyles();

  const buttons_info = [
    { label: 'Home', icon: <HomeIcon fontSize='large' />, link_to: '/'},
    { label: 'Search', icon: <SearchIcon fontSize='large' />, link_to: '/search'},
    { label: 'NewPost', icon: <PublishIcon fontSize='large' />, link_to: '/newpost'},
    { label: 'Profile', icon: <AccountCircleIcon fontSize='large' />, link_to: '/profile'},
  ]

  const buttons = buttons_info.map( (button_info) => {
    return (
      <BottomNavigationAction
        value={button_info.link_to}
        label={button_info.label}
        icon={button_info.icon}
        component={Link}
        to={button_info.link_to}
      />
    )
  })

  return (
    <div className={classes.wrapper} >
      <BottomNavigation showLabels children={buttons}/>
    </div>
  );
}

export default withRouter(BottomNav)