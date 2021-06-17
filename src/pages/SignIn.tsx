import {Button, makeStyles, Typography} from "@material-ui/core";

import GroupIcon from '@material-ui/icons/Group';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';

import React from 'react';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        height: '100vh'
    },
    blueSide: {
        backgroundColor: '#71C9F8',
        width: '50%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative"
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '53%',
        transform: 'translate(-50%, -50%)',
        width: '200%',
        height: '200%',
    },

    blueSideList: {
        position: "relative",
        listStyle: "none",
        marign: 0,
        padding: 0,
        width: 380,
        '& h6': {
            display: "flex",
            alignItems: "center",
            color: '#FFF',
            fontSize: 40,
            marginBottom: 40

        },
    },
    blueSideIcons: {
        fontSize: 40,
        marginRight: 15
    },
    loginSide: {
        width: '50%',
        display: "flex",

        alignItems: "center"
    },
    loginTwitterIcon: {
        fontSize: 50
    },
    loginSideWrapper: {
        width: 380,
        padding: 15
    },
    loginSideTitle: {
        width: 380,
        fontWeight: 600,
        marginBottom: 50,
        marginTop: 15,
        fontSize: 38
    }
});

function SignIn() {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        <div className={classes.blueSide}>
            <TwitterIcon color={"primary"} className={classes.blueSideBigIcon}/>
            <ul className={classes.blueSideList}>
                <li>
                    <Typography variant={'h6'}><SearchIcon className={classes.blueSideIcons}/> читайте</ Typography>
                </li>
                <li>
                    <Typography variant={'h6'}> <GroupIcon className={classes.blueSideIcons}/> узнавайте</ Typography>
                </li>
                <li>
                    <Typography variant={'h6'}><ChatBubbleIcon className={classes.blueSideIcons}/> общайтесь
                    </ Typography>
                </li>
            </ul>
        </div>


        <div className={classes.loginSide}>
            <div className={classes.loginSideWrapper}>
                <TwitterIcon className={classes.loginTwitterIcon} color="primary"/>

                <Typography variant='h3' className={classes.loginSideTitle}>Узнайте, что происхоидт в мире прямо
                    сейчас</Typography>
                <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас</b></Typography>

                <br/>

                <Button color={"primary"} variant={"contained"} fullWidth
                        style={{marginBottom: 20}}>Зарегистрироваться</Button>

                <Button color={"primary"} variant={"outlined"} fullWidth>Войти</Button>
            </div>
        </div>



        <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="Войти в аккаунт">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="email"
                        label="E-Mail"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.loginSideField}
                        autoFocus
                        id="password"
                        label="Пароль"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="password"
                        fullWidth
                    />
                    <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                        Войти
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>
        <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="Создайте учетную запись">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="name"
                        label="Имя"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="name"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="email"
                        label="E-Mail"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        className={classes.registerField}
                        autoFocus
                        id="password"
                        label="Пароль"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                        type="password"
                        fullWidth
                    />
                    <Button variant="contained" color="primary" fullWidth>
                        Далее
                    </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>

    </div>
}

export default SignIn