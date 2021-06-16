import useStyles from "../AuthStyles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import PATHS from "../../../config/webPath";

const MechanicLogin = () => {
    const classes = useStyles();
    const history = useHistory()

    const preventDefault = (event) => {
        event.preventDefault();
        history.push(PATHS.MECHANIC_SIGNUP)
    }

    return (
        <>
            <Typography align="right" className={classes.navigateToSingup}>Not a member?
                <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                        {' Register'}
                </Link>
            </Typography>
            <Grid container direction="column" justify="center" alignItems="center" spacing={0} className={classes.mechanicAuthLogin}>
                <form className={classes.mechanicAuthForm}>
                    <Typography variant="h4" color="inherit" style={{color: "#ffffff", marginBottom: "2rem"}}>
                        Login to EasyRepair
                    </Typography>

                    <TextField 
                        variant="outlined"
                        label="Email"
                        type="email"
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
                        label="Password"
                        type="password"
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

export default MechanicLogin;