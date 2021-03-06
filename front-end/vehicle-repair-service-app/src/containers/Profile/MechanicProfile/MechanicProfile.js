import { useState, useEffect } from "react";
import { CardContent, Container, Grid } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import useStyles from "../ProfileStyles";
import Card from '@material-ui/core/Card';
import avatar from '../../../assets/images/user.png'
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import ProfileDataTable from '../../../components/ProfileDataTabel/ProfileDataTable'


import { useDispatch, useSelector } from "react-redux";
import mechanicProfileActions from "../../../redux/actions/mechanicProfileActions/mechanicProfileActions";



const MechanicProfile = () => {

    const classes = useStyles();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

  

    
    const dispatch = useDispatch();
    
    const mechanicAuthLogin = useSelector(state => state.mechanicLogin)
    const mechanicProfileInfo = useSelector(state => state.mechanicProfile);

    useEffect(() => {
        if(mechanicAuthLogin){
            fetch('http://localhost:5001/api/serviceman-profile',{
            method: 'GET',
            credentials: 'include'
            })
            .then(res => {
                return res.json()
            }).then(resData => {
                dispatch(mechanicProfileActions.getMechanicInfo(resData.data))
            }).catch(err => {
                console.log(err)
            })
        }
    },[mechanicAuthLogin, dispatch])

    const serviceDetailsHandler = (event) => {
        event.preventDefault();

        const serviceList = {name, description, price}

        fetch('http://localhost:5001/api/add-service', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(serviceList)
        }).then(response => {
            console.log()
            return response.json()
        }).then(respData => {
            console.log(respData)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <Container maxWidth={false}>
            <Grid container spacing={2} className={classes.profileRoot} >
                <Grid item xs={12} md={3} className={classes.profileImageSec}>
                    <Grid container className={classes.profileCardAndFormCard} direction="column" spacing={3}>
                        <Grid item>
                            <Card className={classes.profileCard} align="center">
                                <CardContent >
                                    <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
                                    <Button
                                        variant="contained"
                                        component="label"
                                        className={classes.uploadFileButton}
                                        >
                                        Upload Photo
                                        <input
                                            type="file"
                                            hidden
                                        />
                                    </Button>
                                    <Typography variant="h6" className={classes.profileName}>{mechanicProfileInfo.mechanicName}</Typography>
                                    <Typography className={classes.profileEmail}>{mechanicProfileInfo.mechanicEmail}</Typography>
                                    <Typography className={classes.profilePhone}>+91 {mechanicProfileInfo.mechanicPhone}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                        <Card className={classes.profileFormCard}>
                            <form onSubmit={serviceDetailsHandler}>
                                <Typography variant="h5" style={{marginBottom: "1em", color: '#ffffff'}}>Service Details</Typography>
                                <TextField
                                    id="serviceName"
                                    label="Service Name"
                                    name = "name"
                                    variant="outlined"
                                    fullWidth
                                    value={name}
                                    onChange={(e) =>  {
                                        setName(e.target.value)
                                    }}
                                    className={classes.profileFormTextField}
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
                                <TextField id="outlined-basic" className={classes.profileFormTextField} 
                                    fullWidth 
                                    label="Price" 
                                    name="price"
                                    variant="outlined" 
                                    value={price}
                                    onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}
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
                                <TextField id="outlined-basic" className={classes.profileFormTextField} 
                                    fullWidth 
                                    label="Service Description" 
                                    name="description"
                                    multiline
                                    variant="outlined" 
                                    rows={2}
                                    rowsMax={4}
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
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
                                    className={classes.profileFormButton}
                                    >
                                        Submit
                                    </Button>
                            </form>
                        </Card>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid item xs={12} md={9} className={classes.profileData}>
                   <ProfileDataTable />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MechanicProfile;