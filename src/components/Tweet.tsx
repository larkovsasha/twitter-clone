import React from 'react';
import classNames from "classnames";
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import {useHomeStyles} from "../pages/Home";


interface TweetProps{
    text: string,
    classes: ReturnType<typeof useHomeStyles>,
    user:{
        fullName: string,
        userName: string,
        avatar: string
    },
}
const Tweet: React.FC<TweetProps> = ({classes, user, text}: TweetProps): React.ReactElement => {
    return (
        <Paper className={classNames(classes.tweet,)} variant="outlined">

            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <Avatar
                        className={classes.tweetAvatar}
                        alt="avatar"
                        src={user.avatar}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography>
                        <b>{user.fullName}</b>
                        <span className={classes.tweetUserName}> {user.userName} :1ч</span>

                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton color='primary'>
                                <InsertCommentIcon style={{fontSize: 20}} aria-valuetext='1'/>
                            </IconButton>
                            <span>11</span>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <RepeatIcon style={{fontSize: 20}} aria-valuetext='1'/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <FavoriteBorderIcon style={{fontSize: 20}} aria-valuetext='1'/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton color='primary'>
                                <IosShareIcon style={{fontSize: 20}} aria-valuetext='1'/>
                            </IconButton>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Tweet;