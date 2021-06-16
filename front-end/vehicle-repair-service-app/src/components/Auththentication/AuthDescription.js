import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import useStyles from "./AuthStyles";


const AuthDescription = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container direction="column" justify="center" alignItem="center" className={classes.authImageContainer}>
                <Typography variant="h3" align="center" className={classes.authTitle}>
                    Car Repair Service
                </Typography>
                <Typography align="center" style={{ marginTop: "1em", color: "#212738", opacity: "0.7" }}>
                    Register to get the best service by connect with us
                </Typography>
                <Grid container className={classes.authImageSec}></Grid>
            </Grid>
        </>
    )
}

export default AuthDescription;