import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";

const Projects = () => {
    return (
            <Grid container style={{display:"flex"}}>
                <Button variant={"contained"}>Create Project</Button>
                <Grid item xs={12} md={12} sm={12}>
                    <Paper style={{height: "200px",margin:"20px",alignContent:"center"}}>Arjun Gautam</Paper>
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <Paper style={{height: "200px",margin:"20px"}}>Arjun Gautam</Paper>

                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                    <Paper style={{height: "200px",margin:"20px"}}>Arjun Gautam</Paper>

                </Grid>
            </Grid>
    );
};

export default Projects;
