import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        padding: 20,
        margin: 20,
        float: 'left',
        textDecoration: 'none',
        marginLeft: 40
    },
    media: {
        height: 300,
        borderRadius: 15
    },
    button: {
        margin: 'auto'
    }
});

const Post = (props) => {
    const { id, title,  body} = props.post;

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className='post-box'>
                <CardMedia
                    className={classes.media}
                    image='https://images.unsplash.com/photo-1546572797-e8c933a75a1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      ID:  {id}
                 </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {title}
                </Typography>
                </CardContent>
                    {body}
                </CardActionArea>
                <CardActions>
                
                <Link className={classes.button} to={`/post/${id}`} style={{ textDecoration: 'none' }}>
                    <Button style={{ textDecoration: 'none'}} variant="contained" color="secondary">
                        Reade More
                    </Button>
                </Link>
            </CardActions>
        </Card>

        

    );
};

export default Post;