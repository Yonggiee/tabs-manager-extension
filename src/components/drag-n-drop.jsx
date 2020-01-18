import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderIcons } from "./reorder";
import { AuthorList } from "./authorList";

const DragAndDrop = ({ tabs, setIconMap }) => {
  console.log("tabs");
  console.log(tabs);

  // const [iconMap, setIconMap] = React.useState(tabs);
  // // const [iconMap, setIconMap] = React.useState({
  // //   tab: tabs.slice(0, 5),
  // //   tabb: tabs.slice(6, 8)
  // // });

  // console.log("iconmap");
  // console.log(iconMap);

  function addCategory(category, icons) {
    const iconMap = { ...iconMap };
    iconMap[category] = icons;
  }

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }
        setIconMap(reorderIcons(tabs, source, destination));
      }}
    >
      <div>
        {Object.entries(tabs).map(([k, v]) => {
          return (
            <AuthorList
              internalScroll
              key={k}
              listId={k}
              listType="CARD"
              tabs={v}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default DragAndDrop;
