/*global chrome*/
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import DragAndDrop from "./drag-n-drop";
import Cookies from "js-cookie";

const defs = (
  <Card>
    <h2>default</h2>
  </Card>
);

class Main extends Component {
  state = {
    tabs: [],
    cards: [defs]
  };

  // favIconUrl
  // url
  componentDidMount() {
    // console.log(chrome.storage.local.get(['cards'], function(result) {
     
    // }));
    // let reloadCards = chrome.storage.local.get(['cards'], function(result) {
    //   console.log("get");
    // });

    let tabOpened = [];
    chrome.tabs.query({}, function(tabs) {
      tabOpened = tabs;
      console.log(tabs);
    });

    // if (reloadCards != null){
    //   this.setState({ tabs: tabOpened, cards: reloadCards });
    // }

    this.setState({ tabs: tabOpened });
  }

  onAddCard = () => {
    const cards = this.state.cards;
    cards.push(
      <Card>
        <h2>lala</h2>
      </Card>
    );

    this.setState({cards});
    // chrome.storage.local.set({ 'cards': cards }, function() {
    //   console.log("set card");
    // });
    // console.log(chrome.storage.local.get(['cards'], function(result) {
    // }));
    console.log(this.state.cards);
  };

  render() {
    const { tabs, cards } = this.state;
    const { favIconUrl, url } = tabs;

    return (
      <Grid
        container
        xs={12}
        style={{ padding: "5%", backgroundColor: "black" }}
      >
        <Grid item xs={12} style={{ padding: "2%", backgroundColor: "orange" }}>
          <div>
            {cards.map(card => (
              <div> {card} </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={this.onAddCard} />
            </Fab>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Main;
