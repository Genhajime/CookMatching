import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { users, posts } from '../../data/data';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80,
  },
  gridRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

const myTheme = createMuiTheme({
  overrides: {
    MuiCard:{
      root: {
        boxShadow: 'none',
      }
    }
  }
});

const Profile = (props) => {
  const classes = useStyles();
  const user = users[props.id-1];
  const my_posts = posts.filter(post => post.user_id===props.id);

  return (
    <ThemeProvider theme={myTheme}>
      <Card className={classes.card}>
        <CardHeader avatar={
          <Avatar src={user.image} className={classes.bigAvatar} />
        } />
        <div className={classes.details}>
          <CardContent>
            <Typography variant="h4" color="textPrimary" component="p">
              {user.name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6" color="textSecondary" component="p">
              {'フォロー数：' + user.follows.length}
            </Typography>
          </CardContent>
        </div>
      </Card>
      <div className={classes.gridRoot}>
        <GridList cellHeight={300} cols={2} >
          {my_posts.map( post => (
            <GridListTile key={post.id}>
              <img src={post.image} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </ThemeProvider>
  )
}

export default Profile