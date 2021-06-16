import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Divider from '../Divider';
import Link from '@material-ui/core/Link';

import TextField from "@material-ui/core/TextField";
import useStyles from '../AuthStyles';
import google from '../../../assets/images/search.svg';
import PATHS from "../../../config/webPath";
import { useHistory } from "react-router-dom";

const Login = () => {

    const classes = useStyles();

    const history = useHistory();

    const preventDefault = (event) => {
      event.preventDefault()
      history.push(PATHS.USER_SIGNUP)
    };


    return (
      <>
      <Typography align="right" className={classes.navigateToSingup}>Not a member?
          <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                  {'Sign up'}
          </Link>
      </Typography>
        <Grid container direction="column" justify="center" alignItems="center" className={classes.authSignin}>
            <form className={classes.userAuthForm}>
                <Typography variant="h4" align="left" style={{color: "#ffffff"}}>Login to EasyRepair</Typography>
                <Button variant="contained" color="default" className={classes.googleButton} fullWidth>
                    <Icon style={{ marginRight: "0.8rem" }}>
                    <img src={google} alt="google" className={classes.imageIcon} />
                    </Icon>
                        Sign in with Google
                </Button>
                <Divider className={classes.divider} align="center">
                    Or
                </Divider>
                <TextField
                variant="outlined"
                type="email"
                label="Email"
                fullWidth
                className={classes.authTextField}
                autoComplete="off"
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
              />
              <TextField
                variant="outlined"
                type="password"
                label="Password"
                fullWidth
                className={classes.authTextField}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
              />
              <Button
                variant="contained"
                type="submit"
                color="default"
                className={classes.submitButton}
              >
                Login
              </Button>
            </form>
        </Grid>
      </>
    )
}

export default Login;