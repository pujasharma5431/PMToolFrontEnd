import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {FeaturedPlayList} from "@material-ui/icons";
import InfoIcon from '@material-ui/icons/Info';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import {Link} from "react-router-dom";

export const mainListItems = (
    <div>
        <Link to={"/"} style={{textDecoration:"none",color:"inherit"}}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
        </Link>

        <Link to={"/board"} style={{textDecoration:"none",color:"inherit"}}>

        <ListItem button>
            <ListItemIcon>
                <AssignmentTurnedInIcon/>
            </ListItemIcon>
            <ListItemText primary="Project Board"/>
        </ListItem>
        </Link>

        <Link to={"/feature"} style={{textDecoration:"none",color:"inherit"}}>
        <ListItem button>
            <ListItemIcon>
                <FeaturedPlayList/>
            </ListItemIcon>
            <ListItemText primary="Features"/>
        </ListItem>
        </Link>



    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Other Info</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <InfoIcon/>
            </ListItemIcon>
            <ListItemText primary="About Us"/>
        </ListItem>

    </div>
);
