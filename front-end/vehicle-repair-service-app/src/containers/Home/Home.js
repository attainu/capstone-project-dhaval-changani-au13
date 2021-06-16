import "./Home.css";
import useStyles from "./HomeStyles";
import { Button, Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
// import IconButton from "@material-ui/core/IconButton";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import { TextField } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import DomainSlider from '../../components/Slider/Slider';
import ServiceDesc from "../../components/ServiceDescription/ServiceDesc";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
// import GoogleMaps from "./GoogleMaps";

const Home = () => {
  const classes = useStyles();
  const carTypes = [
    {
      value: "",
      label: "Select your car type"
    },
    {
      value: 'hyundai',
      label: 'Hyundai'
    },
    {
      value: 'toyota',
      label: 'Toyota'
    },
    {
      value: 'honda',
      label: 'Honda'
    },
    {
      value: 'volksvogen',
      label: 'Volksvogen'
    },
    {
      value: 'bmw',
      label: 'BMW'
    },
    {
      value: 'audi',
      label: 'Audi'
    }
  ]
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.gridRoot}>
          <Grid container spacing={0}>
            <Grid item sm={12}>
              <Typography
                variant="h1"
                style={{
                  color: "#222528",
                  marginTop: "0.6em",
                  fontWeight: "bolder",
                }}
                align="center"
                className={classes.themeHeading}
              >
                Vehicle Repair Service
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.landingSec} justify="center">
            <Grid item xs={12} md={4} className={classes.formGrid}>
              <Grid container justify="center">
              <Card className={classes.cardRoot}>
                <CardContent>
                  <Typography variant="h6" spacing={3}>
                    Experience the best car services
                  </Typography>
                  <br />
                  <form className={classes.formRoot}>
                    <InputLabel
                      style={{ color: "white" }}
                      className={classes.locationLabel}
                    >
                      Location
                    </InputLabel>
                    <TextField 
                    variant="outlined" 
                    id="location" 
                    name="location" 
                    fullWidth p={0.5}
                    className={classes.textFieldRoot}
                    InputProps={{
                      classes: {input: classes.textField}
                    }}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      startIcon={<GpsFixedIcon />}
                      fullWidth
                    >
                      Use my location
                    </Button>
                    <InputLabel
                      style={{ color: "white" }}
                      className={classes.locationLabel}
                    >Car Type</InputLabel>
                    <TextField select variant="outlined" fullWidth className={classes.carTypeRoot} InputProps={{
                      classes: {input: classes.textField}
                    }}>
                    {carTypes.map((option) => {
                      return <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    })}
                    </TextField>
                    <InputLabel
                      style={{ color: "white" }}
                      className={classes.locationLabel}
                    >Mobile</InputLabel>
                    <TextField 
                    variant="outlined" 
                    id="location" 
                    name="location" 
                    fullWidth p={0.5}
                    className={classes.mobileTextRoot}
                    InputProps={{
                      classes: {input: classes.textField}
                    }}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      color="default"
                      className={classes.submitButton}
                      fullWidth
                    >
                      Request Call Back
                    </Button>
                  </form>
                </CardContent>
              </Card>
              </Grid>
              
            </Grid>
            <Grid item xs={12} md={8} className={classes.imageSec}></Grid>
          </Grid>
        </div>
      </div>
      <Container maxWidth="xl" className={classes.sliderContainer}>
        <Typography variant="h4" className={classes.sliderTitle} align="center">
          Domains we serve
        </Typography>
        <DomainSlider />
      </Container>
      <Container maxWidth="xl" className={classes.serviceDetails}>
        <ServiceDesc />
      </Container>
      <Container maxWidth="xl" className={classes.contactField}>
        <ContactForm />
        <Footer/>
      </Container>
      
    </div>
  );
};

export default Home;
