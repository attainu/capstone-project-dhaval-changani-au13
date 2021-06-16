import useStyles from "../AuthStyles";
import { Grid } from "@material-ui/core"
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


const MechanicLogin = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container direction="column" justify="flex-start" alignItems="center">
                <form className={classes.mechanicAuthForm}>
                    <Typography variant="h4" color="inherit">Login to EasyRepair</Typography>
                    <TextField variant="outlined" label="Name" fullWidth />
                    <TextField variant="outlined" type="email" label="Email" fullWidth />
                    <Grid xs={12}>
                        <TextField variant="outlined" label="GST ID Number" />
                        <TextField variant="outline" label="UID Number" />
                    </Grid>
                    <TextField variant="outlined" label="Create Password" fullWidth/>
                </form>
            </Grid>
        </>
    )
}

export default MechanicLogin;