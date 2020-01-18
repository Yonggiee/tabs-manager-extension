import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

class Main extends Component {
  state = {};

  render() {
    return (
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Card>
            <h1> Hello </h1>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Main;
