import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderColors } from "./reorder";
import { AuthorList } from "./authorList";

const DragAndDrop = ({ tabs }) => {
  const [iconMap, setIconMap] = React.useState({
    tab: tabs.slice(0, 5),
    tabb: tabs.slice(6, 8)
  });

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        // // dropped outside the list
        if (!destination) {
          return;
        }
        setIconMap(reorderColors(iconMap, source, destination));
      }}
    >
      <div>
        {Object.entries(iconMap).map(([k, v]) => (
          <AuthorList
            internalScroll
            key={k}
            listId={k}
            listType="CARD"
            tabs={v}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default DragAndDrop;
