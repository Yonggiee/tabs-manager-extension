/*global chrome*/
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DragAndDrop from "./drag-n-drop";

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

  async componentDidMount() {
    async function getTabs() {
      return new Promise(function(resolve, reject) {
        chrome.tabs.query({}, tabs => {
          resolve(tabs);
        });
      });
    }

    await getTabs().then(tabs => {
      this.setState({ tabs });
    });
  }

  onAddCard = () => {
    const cards = this.state.cards;
    cards.push(
      <Card>
        <h2>lala</h2>
      </Card>
    );
    this.setState({ cards });
    console.log(this.state.cards);
  };

  render() {
    const { tabs, cards } = this.state;
    const { favIconUrl, url } = tabs;

    return (
      <Grid
        container
        xs={12}
        style={{ padding: "2%", backgroundColor: "black" }}
      >
        <Grid item xs={12} style={{ padding: "2%", backgroundColor: "orange" }}>
          <Card style={{ width: "600px" }}>
            {tabs.length > 0 && <DragAndDrop tabs={tabs}></DragAndDrop>}
          </Card>
          {/* <div>
            {cards.map(card => (
              <div> {card} </div>
            ))}
          </div> */}
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
