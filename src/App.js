import React from 'react';
import { Container, Toolbar, AppBar, Paper, IconButton, Typography, CardMedia, Card, CardContent, Grid, Box, Button, CardActions, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LayerIcon from '@material-ui/icons/Layers';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { DialogContentText } from '@material-ui/core'; 
import TextField from '@material-ui/core/TextField'; 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', 
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  mt1: {
    marginTop: '2rem'
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar>
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">Web Developer Blog</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                  Log In
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Log in to see videos
                  </DialogContentText>
                  <TextField 
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField 
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="Password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log in</Button>
                </DialogActions>
              </Dialog>

            </Box>
            <Button color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
        style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                  >
                    Web Developer Blog
                  </Typography>
                  <Typography
                  variant="h5"
                  color="inherit"
                  paragraph
                  >
                    lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                    lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Web Developer Blog</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              lorem ipsum dolor sinsectetur lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor sit ametorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
              lorem ipsum dolor sit amet, consectetur lorem ipsum doloripsum dolor lorem ipsum dolor lorem ipsum dolor
            </Typography>
          </Container>
        </div>
        <div className={classes.mainButtons}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">Start Now</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">Learn more</Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Blog description
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      view
                    </Button>
                    <Button size="small" color="primary">
                      edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.mt1}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          >
          </BottomNavigationAction>
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          >
          </BottomNavigationAction>
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          >
          </BottomNavigationAction>
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          >
          </BottomNavigationAction>
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
          Web Developer Blog React js Material UI site
        </Typography>
      </footer>
    </>
  );
}

export default App;
