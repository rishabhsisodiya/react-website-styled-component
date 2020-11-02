import React, { useState } from "react";
// import { db } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
      display: "flex",
      flexDirection: "column",
      marginLeft: "16px",
      marginRight: "16px",

      "@media screen and (max-width: 820px)": {
        width: "90%",
        margin: "0 0 16px 16px",
      },
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formLabel:{
    marginTop:"5px",
    fontSize:"1.15rem"
  },
  paper: {
    position: 'absolute',
    width: "20%",
    marginLeft:"50%",
    marginRight:"50%",
    marginTop:"10%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const initialState = {
  spoc: "",
  email: "",
  phone: "",
  city: "",
  subSectors: "",
  subDomain: "",
  publicUse: "",
  share: "",
};

const subSectorsList = [
  "Landuse",
  "Administrative Boundaries",
  "Roads",
  "Traffic",
  "Parking",
  "Railways",
  "Metro Rail",
  "Road Safety",
  "Environment",
  "Fuel",
  "Vehicles",
  "Freight",
  "Public Buses",
  "Informal Transport",
  "Electric Vehicles",
  "Public WiFi",
  "Future Projects",
  "Shared Mobility",
  "Finance",
  "Civil Aviation ",
  "Shipping",
  "Ports",
  "Inland Water Services",
  "Other socio-economic datasets",
];

const subDomainList = {
  Landuse: [
    "Existing city level landuse map",
    "Proposed city level landuse map",
  ],
  "Administrative Boundaries": ["City boundaries and divisons"],
  Roads: [
    "Road network base map",
    "Street lights",
    "Footpaths",
    "Cycle tracks",
    "Potholes",
  ],
  Traffic: [
    "Traffic signals",
    "Traffic Speed",
    "Traffic density",
    "Traffic alerts",
    "Traffic flow",
    "Traffic condition",
    "Travel behavior",
  ],
  Parking: [
    "Private vehicles parking infrastructure",
    "Illegal parking tickets",
    "Real-time Illegal Parking",
    "Auto-rickshaws parking infrastructure",
    "E-rickshaws parking infrastructure",
    "Public parking for other Intermediate/ informal modes of transport (minivans, minibuses, shared autorickshaws,etc.)  ",
  ],
  Railways: ["Parking at railway stations", "Railway stations"],
  "Metro Rail": [
    "Parking at metro stations",
    "Metro operations",
    "Metro stations",
  ],
  "Road Safety": ["Road traffic accidents"],
  Environment: ["Air Quality (FSCL)"],
  Fuel: ["Fuel Stations - Petrol, Diesel", "Fuel Stations - CNG"],
  Vehicles: ["Anonymized registered vehicles"],
  Freight: ["Freight Terminals", "E-way bills"],
  "Public Buses": [
    "Bus operations",
    "Bus stations, stops, terminals and depots",
  ],
  "Informal Transport": [
    "Auto-rickshaws vehicle counts",
    "Auto-rickshaw operations",
  ],
  "Electric Vehicles": [
    "EV Charging infrastructure",
    "EV service centers",
    "E-rickshaws operations",
  ],
  "Public WiFi": ["Public WiFi services"],
  "Future Projects": ["Proposed Transport projects"],
  "Shared Mobility": ["Public Bike Sharing"],
  Finance: ["Public Transport Finance", "Road and Infrastructure Finance"],
  "Civil Aviation ": ["Infrastructure and Traffic Patterns"],
  Shipping: ["Infrastructure and Traffic Patterns"],
  Ports: ["Infrastructure and Traffic Patterns"],
  "Inland Water Services": ["Infrastructure and Traffic Patterns"],
  "Other socio-economic datasets": [
    "Employment",
    "civil supplies",
    "consumer affairs",
    "demographics",
    "education",
    "geographical data",
    "housing",
    "labour and workforce",
    "meteorological data",
    "per capita availability",
    "petroleum",
    "power",
    "Others",
  ],
};
const ContactUs = () => {
  const history= useHistory();
  const [forms, setForms] = useState(initialState);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const setInput = (key, value) => {
    setForms({ ...forms, [key]: value });
  };

  // const addFormData = () => {
  //   db.collection("forms").add({
  //     ...forms
  //   });
  // };
  const handleForm = (event) => {
    event.preventDefault();
    // addFormData();
    setForms(initialState);
    handleOpen();
    setTimeout(() => {
      history.push("/");
    }, 3000);
    
  };

  const handleRedirect = (event) => {
    event.preventDefault();
    // addFormData();
    setForms(initialState);
    window.open("https://majesteamarketing.com/", "_self");
  };

  const modelBody = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Thank You !!!</h2>
      <p id="simple-modal-description">
        We will get back to you!.
      </p>
      <p id="simple-modal-description">
        Redirecting you to home page .....
      </p>
    </div>
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1>Share Your Data Here !!</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="spoc"
          label="Spoc"
          variant="outlined"
          value={forms.spoc}
          onChange={(event) => setInput("spoc", event.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          value={forms.email}
          onChange={(event) => setInput("email", event.target.value)}
        />
        <TextField
          id="phone"
          label="Phone"
          variant="outlined"
          value={forms.phone}
          onChange={(event) => setInput("phone", event.target.value)}
        />
        <TextField
          id="city"
          label="City"
          variant="outlined"
          value={forms.city}
          onChange={(event) => setInput("city", event.target.value)}
        />
        {/* <FormControl variant="outlined" className={classes.formControl}> */}
          <FormLabel component="legend" className={classes.formLabel}>Your data belongs to:</FormLabel>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="subsectors-label">
              Sub Sectors
            </InputLabel>
            <Select
              labelId="subsectors-label"
              id="subsectors"
              value={forms.subSectors}
              onChange={(event) => setInput("subSectors", event.target.value)}
              label="Sub Sectors"
            >
              {subSectorsList.map((sector, id) => (
                <MenuItem key={id} value={sector}>
                  {sector}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="subdomain-label">
              Sub Domain
            </InputLabel>
            <Select
              labelId="subdomain-label"
              id="subdomain"
              value={forms.subDomain}
              onChange={(event) => setInput("subDomain", event.target.value)}
              label="Sub Domain"
            >
              {forms.subSectors
                ? subDomainList[forms.subSectors].map((sector, id) => (
                    <MenuItem key={id} value={sector}>
                      {sector}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        {/* </FormControl> */}
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formLabel}>Is the data for public use?</FormLabel>
          <RadioGroup
            row
            aria-label="publicUse"
            name="publicUse"
            value={forms.publicUse}
            onChange={(event) => setInput("publicUse", event.target.value)}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.formLabel}>
            Do you have the data ready to share now?
          </FormLabel>
          <RadioGroup
            row
            aria-label="share"
            name="share"
            value={forms.share}
            onChange={(event) => setInput("share", event.target.value)}
          >
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        {forms.share === "yes" ? (
          <Button variant="outlined" color="primary" onClick={handleRedirect} >
            Continue
          </Button>
        ) : (
          <Button variant="outlined" color="primary" onClick={handleForm}>
            Submit
          </Button>
        )}
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modelBody}
      </Modal>
    </>
  );
};

export default ContactUs;
