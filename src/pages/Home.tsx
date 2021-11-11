import React from 'react';
import {createStyles, Grid, InputBase, makeStyles, Typography, withStyles} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import {Paper} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";
import {Theme} from "@mui/material";
import Tweet from "../components/Tweet";
import {SideMenu} from "../components/sideMenu";

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        fontSize: 36,
        margin: '10px 0'
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgb(29, 161, 242, 0.1)'
            },
            '& h6': {
                color: theme.palette.primary.main,
            },
            '& svg path': {
                fill: theme.palette.primary.main,
            }
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 20px',
            marginBottom: '15px',
            borderRadius: 30,
            height: 50,
            transition: 'background-color 0.1s ease-in-out'
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 10,
    },
    sideMenuListItemIcon: {
        fontSize: 30
    },
    sideMenuTweetButton: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0
    },
    tweetsHeader: {
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweet: {
        cursor: "pointer",
        paddingTop: 15,
        paddingLeft: 20,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
    },
    tweetAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '450px',
        position: 'relative',
        left: -13,
    },
    tweetUserName: {
        color: grey[500]
    }

}))
let url = 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 30,

        },
    })
)(InputBase)

export const Home = () => {
    const classes = useHomeStyles()
    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Typography variant='h6'>
                                Главная
                            </Typography>
                        </Paper>
                        <Tweet classes={classes}
                               user={{fullName: 'full', userName: 'nick', avatar: url}}
                               text={'text'}/>
                        <Tweet classes={classes}
                               user={{fullName: 'full', userName: 'nick', avatar: url}}
                               text={'text'}/>
                        <Tweet classes={classes}
                               user={{fullName: 'full', userName: 'nick', avatar: url}}
                               text={'text'}/>
                        <Tweet classes={classes}
                               user={{fullName: 'full', userName: 'nick', avatar: url}}
                               text={'text'}/>


                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <SearchTextField
                        placeholder='поиск в твиттер'
                        fullWidth

                    />
                </Grid>

            </Grid>
        </Container>
    );
};

