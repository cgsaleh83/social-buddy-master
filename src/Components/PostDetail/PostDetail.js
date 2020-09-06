import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostComment from '../PostComment/PostComment';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        margin: 'auto'
    },
    btn:{
        marginLeft: '20px',
        textDecoration: 'none'
    }
});

const PostDetail = () => {

    const {postDetail} =useParams()
    const [detail, setDetail] = useState({});
    const [CommentPosts, setCommentPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetail}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, []);

    const {  body, title, userId} = detail;

    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postDetail}`;
        fetch(commentUrl)
            .then((response) => response.json())
            .then((data) => {
                setCommentPosts(data);
            });
    }, []);

    const classes = useStyles();
    return (
        <div>
            <h2>USER ID:- {userId}</h2>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        image='https://images.unsplash.com/photo-1546572797-e8c933a75a1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        title="Contemplative Reptile"
                            />
                             <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                     id:  {postDetail}
                                     
                                 </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                             {title}
                                        </Typography>
                                        <h4>{body}</h4>
                                 </CardContent>
                            </CardActionArea>
                            <CardActions>
                                 <Link to="/home" style={{ textDecoration: 'none', margin: 'auto'}}>
                                    <Button  variant="contained" color="secondary">
                                        Back Page
                                     </Button>
                                 </Link>
                             </CardActions>
                         </Card>

                {
                    CommentPosts.map(comment => (<PostComment comment={comment}></PostComment>))
                }
           
        </div>
    );
};

export default PostDetail;