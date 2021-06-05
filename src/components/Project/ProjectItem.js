import React from "react";
import { Grid, Paper } from "@material-ui/core";
import AddProject from "./AddProject";

const ProjectItem = () => {
  return (
    <Grid container style={{ display: "flex" }}>
      <AddProject />
      <Grid item xs={12} md={12} sm={12}>
        <Paper
          style={{ height: "200px", margin: "20px", alignContent: "center" }}
        >
          Arjun Gautam
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} sm={12}>
        <Paper style={{ height: "200px", margin: "20px" }}>Arjun Gautam</Paper>
      </Grid>
      <Grid item xs={12} md={12} sm={12}>
        <Paper style={{ height: "200px", margin: "20px" }}>Arjun Gautam</Paper>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
