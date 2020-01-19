import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { AuthorList } from "./authorList";

const DragAndDrop = ({ tabs, setIconMap }) => {
  // console.log("tabs");
  // console.log(tabs);
  // console.log(tempTabs);

  let tempTabs = [];
  Object.entries(tabs).map(([k, v]) => {
    tempTabs[v.category] = v.icons;
  });

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }
        setIconMap(tabs, source, destination);
      }}
    >
      <div>
        {Object.entries(tempTabs).map(([k, v]) => {
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
