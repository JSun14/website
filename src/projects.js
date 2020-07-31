import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Dialog, IconButton, Button, Divider, DialogContent,
  Card, CardContent, CardActions, CardMedia, CardActionArea, Grid
} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import style from './styling.module.css';


export default function Project(props) {
  const { post } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Grid item className={style.root} >
      <Card className={style.posts} elevation={5}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            className={style.preview}
            image={post.image}
            title={post.title} />
        </CardActionArea>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <div>
            <img className={style.dialog} src={post.image} />
            <Divider />
            <div className={style.details}>
              <Typography>{post.description}</Typography>
              <Button variant="outlined" size="small" target="_blank" disable elevation href={post.link}>
                Click to view Source
          </Button>
            </div>
          </div>
        </Dialog>
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.summary}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

Project.propTypes = {
  post: PropTypes.object,
};