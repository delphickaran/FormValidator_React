import React from "react";
import { Card, Typography, Grid } from "@material-ui/core";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Home = () => {
  const { data } = useSelector((store) => store.registration);

  return (
    <Grid container style={styles.root} justify="center" alignItems="center">
      <Grid item md={5} sm={8} xs={11}>
        <Card style={styles.card}>
          <Typography variant={"h5"}>Details</Typography>
          <br />
          {data &&
          data.responseObject &&
          Object.keys(data.responseObject).length > 0 ? (
            <Grid container spacing={2}>
              <Grid item md={6} sm={12} xs={12}>
                <Typography style={styles.label}>Name</Typography>
                <Typography style={styles.label}>
                  {data.responseObject.name}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography style={styles.label}>Email</Typography>
                <Typography style={styles.label}>
                  {data.responseObject.email}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography style={styles.label}>Phone Number</Typography>
                <Typography style={styles.label}>
                  {data.responseObject.phoneNumber}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography style={styles.label}>Address</Typography>
                <Typography style={styles.label}>
                  {data.responseObject.address}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography style={styles.label}>Photo</Typography>
                <Typography style={styles.label}>
                  {data.responseObject.photo}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography style={styles.label}>Gender</Typography>
                <Typography style={styles.label}>
                  {data.responseObject.gender}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography style={styles.label}>Password</Typography>
                <Typography style={styles.label}>
                  {data.responseObject.password}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Typography>No details found</Typography>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
