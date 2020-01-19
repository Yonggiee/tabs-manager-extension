/*global chrome*/
import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import DragAndDrop from "./drag-n-drop";
import { reorderIcons } from "./reorder";
// import "../../public/background";

// const defs = (
//   <Card>
//     <h2>default</h2>
//   </Card>
// );

class Main extends Component {
  state = {
    uncategorised: [],
    tabs: [],
    array: {
      Work: [],
      Study: [],
      Games: [],
      Movies: [],
      Uncategorised: []
    }
    // cards: [defs]
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
      const array = { ...this.state.array };
      array.Work = [];
      array.Study = [];
      array.Games = [];
      array.Movies = [];
      array.Uncategorised = tabs;
      this.setState({ tabs, loaded: true, array });
    });
  }

  // onAddCard = () => {
  //   const cards = this.state.cards;
  //   cards.push(
  //     <Card>
  //       <h2>lala</h2>
  //     </Card>
  //   );
  //   this.setState({ cards });
  //   console.log(this.state.cards);
  // };

  setIconMap = (tabs, source, destination) => {
    const response = reorderIcons(tabs, source, destination);
    this.setState({ array: response });
  };

  addCategory = (category, icons) => {
    const array = { ...this.state.array };
    const len = Object.entries(array).length;

    array[Object.entries(array).length] = {
      category: len,
      icons: [
        {
          // id: "1293921873912638"
          // favIconUrl: "https://github.githubassets.com/favicon.ico"
        }
      ]
    };
    this.setState({ array });
  };

  render() {
    const { tabs, array } = this.state;
    console.log(tabs);

    return (
      <Grid
        container
        xs={12}
        style={{ padding: "2%", backgroundColor: "black" }}
      >
        <Grid item xs={12} style={{ padding: "2%", backgroundColor: "orange" }}>
          <Card style={{ width: "600px" }}>
            {tabs.length > 0 && (
              <DragAndDrop
                tabs={array}
                setIconMap={this.setIconMap}
              ></DragAndDrop>
            )}
          </Card>
          {/* <div>
            {cards.map(card => (
              <div> {card} </div>
            ))}
          </div> */}
        </Grid>
        {/* <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={this.addCategory} />
            </Fab>
          </div>
        </Grid> */}
      </Grid>
    );
  }
}

export default Main;
