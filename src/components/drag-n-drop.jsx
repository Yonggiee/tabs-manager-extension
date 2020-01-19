import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { AuthorList } from "./authorList";

const DragAndDrop = ({ tabs, setIconMap }) => {
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
