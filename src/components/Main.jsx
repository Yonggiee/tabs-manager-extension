/*global chrome*/
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class Main extends Component {
  state = {
    tabs: []
  };

  printChromeTabs = () => {
    let tabOpened = [];
    chrome.tabs.query({}, function(tabs) {
      tabOpened = tabs;
      console.log(tabs);
    });
    this.setState(tabOpened);
  };

  render() {
    return (
      <Grid
        container
        xs={12}
        style={{ padding: "5%", backgroundColor: "black" }}
      >
        <Grid item xs={12} style={{ padding: "2%", backgroundColor: "orange" }}>
          <Card>
            <TextField id="standard-basic" fullWidth />
            <Card>
              <img src="./logo192.png"></img>
              <img src="./logo192.png"></img>
              <img src="./logo192.png"></img>
              <img src="./logo192.png"></img>
            </Card>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={this.printChromeTabs} />
            </Fab>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Main;
