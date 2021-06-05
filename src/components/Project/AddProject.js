import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  makeStyles,
  TextareaAutosize,
  TextField,
  withStyles,
} from "@material-ui/core";
import DatePeak from "./DatePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "70ch",
    },
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "inherit",
    },

    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "inherit",
      },
    },
  },
})(TextField);

export default function AddProject() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Create Project
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Project</DialogContentText>

          <form className={classes.root} noValidate autoComplete="on">
            <CssTextField
              className={classes.margin}
              label="Project Name"
              variant="outlined"
            />
            <CssTextField
              className={classes.margin}
              label="Unique Project ID"
              variant="outlined"
            />
            <CssTextField
              className={classes.margin}
              label="Project Leader"
              variant="outlined"
            />

            <TextareaAutosize
              className={classes.margin}
              style={{
                width: "99%",
                backgroundColor: "inherit",
                color: "inheritsLoose",
              }}
              label="Project Identifier"
              variant={"outlined"}
              placeholder={"Description of the Project"}
              rowsMin={4}
            />

            <DatePeak />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant={"outlined"} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} variant={"outlined"} color="inherit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
