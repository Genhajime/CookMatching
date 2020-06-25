import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PostTile from './PostTile';
import { users, posts } from '../../data/data';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const user = users[props.id-1];

  const followers_posts = posts.filter(post => {
    for(let follow of user.follows) {
      if (post.user_id===follow) {
        return true;
      }
    }
    return false;
  })

  return (
    <div className={classes.root}>
      <GridList cellHeight={'auto'} cols={1} >
        {followers_posts.map( post => (
          <GridListTile key={post.id}>
            <PostTile post={post} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Home