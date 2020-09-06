import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        borderRadius: 15,
        margin: 20,
    },
    media: {
        height: 300,
        padding: 20,
        borderRadius: '50%'
    },
    image:{
        
    }
});


const PostComment = (props) => {
  
    const { name, email, body, postId, id } = props.comment;
    const classes = useStyles();
    return (
        
        <Card className={classes.root}>
            <p>POST ID: {postId}</p>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    title="Contemplative Reptile"
                />
                <h1> ID: {id}</h1>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
             </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h4><FontAwesomeIcon style={{ fontSize: '30px', marginRight: '30px' }} icon={faComments} /> {body}</h4>
                        {email}
                     </Typography> 
                </CardContent>
            </CardActionArea>
            <CardActions>

                <p style={{fontSize: '15px', margin: 'auto'}}>Creat By Md: Sajjat Hossain</p>
            </CardActions>
        </Card>
       
          
    );
};

export default PostComment;


