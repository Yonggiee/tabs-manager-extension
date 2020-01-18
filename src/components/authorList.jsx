import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";

export const AuthorList = ({ listId, listType, tabs }) => {
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      direction="horizontal"
      isCombineEnabled={false}
    >
      {dropProvided => (
        <div {...dropProvided.droppableProps}>
          <div>
            <div>
              <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                {tabs.map((tab, index) => (
                  <Draggable key={tab} draggableId={tab} index={index}>
                    {dragProvided => (
                      <div
                        {...dragProvided.dragHandleProps}
                        {...dragProvided.draggableProps}
                        ref={dragProvided.innerRef}
                      >
                        <img src={tab.favIconUrl}></img>
                        <p>{tab}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
};

// interface Props {
//   colors: string[];
//   listId: string;
//   listType?: string;
//   internalScroll?: boolean;
//   isCombineEnabled?: boolean;
// }
