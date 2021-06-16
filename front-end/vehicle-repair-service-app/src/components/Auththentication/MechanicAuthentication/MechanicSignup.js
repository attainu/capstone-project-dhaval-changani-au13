import useStyles from "../AuthStyles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import PATHS from "../../../config/webPath";

const MechanicSignup = () => {
  const classes = useStyles();

  const history = useHistory();

  const preventDefault = (event) => {
    event.preventDefault();
    history.push(PATHS.MECHANIC_LOGIN);
  }

  return (
    <>
        <Typography align="right" className={classes.navigateToSingup}>Already a member?
          <Link onClick={preventDefault} color="inherit" style={{cursor: "pointer"}}>
                  {' Login'}
          </Link>
        </Typography>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.mechanicAuthSignup}
            spacing={0}
        >
            <form className={classes.mechanicAuthForm}>
            <Typography variant="h4" color="inherit" style={{color: "#ffffff", marginBottom: "1rem"}}>
                Register with EasyRepair
            </Typography>
            <br/>
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
            <TextField variant="outlined" type="email" label="Email" fullWidth 
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
            <Grid container direction="row" justify="flex-start" spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    variant="outlined" 
                    label="GST ID Number" 
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
                    fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={6} >
                <TextField 
                    variant="outlined" 
                    label="UID Number" 
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
                        fullWidth
                />
                </Grid>
            </Grid>
            <TextField variant="outlined" label="Mobile" fullWidth 
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
            <TextField variant="outlined" type="password" label="Create Password" fullWidth 
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
                Register
              </Button>
            </form>
      </Grid>
    </>
  );
};

export default MechanicSignup;
