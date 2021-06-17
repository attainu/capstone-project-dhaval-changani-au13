import { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import google from "../../../assets/images/search.svg";  
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
import Link from '@material-ui/core/Link';
import Divider from "../Divider";
import useStyles from '../AuthStyles';
import PATHS from "../../../config/webPath";
import { useHistory } from "react-router-dom";
import LoginButton from "../GoogleAuthButton/LoginButton";


const Signup = () => {

    const classes = useStyles();

    const history = useHistory();

    const [checked, setChecked] = useState(true);

    const preventDefault = (event) => {
      event.preventDefault();
      history.push(PATHS.USER_LOGIN)
    }

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
      <>
      <Typography align="right" className={classes.navigateToSingin}>Already a member?
          <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                  {'Sign in'}
          </Link>
      </Typography>
       
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="flex-start"
            className={classes.authSignup}
            spacing={0}
          >
            <form className={classes.userAuthForm}>
              <Typography
                variant="h4"
                align="left"
                style={{ color: "#ffffff" }}
              >
                Sign up to EasyRepair
              </Typography>
              <LoginButton />
              <Divider className={classes.divider} align="center">
                Or
              </Divider>

              <TextField
                variant="outlined"
                label="Name"
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
                type="email"
                label="Email"
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
              <TextField
                variant="outlined"
                label="Mobile"
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    style={{ color: "black" }}
                    onChange={handleChange}
                  />
                }
                label={
                  <Typography style={{ color: "#a0a0a0" }}>
                    I agree with terms and use
                  </Typography>
                }
              />
              <br />
              <Button
                variant="contained"
                type="submit"
                color="default"
                className={classes.submitButton}
              >
                Create Account
              </Button>
            </form>
          </Grid>
          </>
    )
}

export default Signup;