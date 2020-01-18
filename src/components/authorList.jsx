import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";
import TextField from "@material-ui/core/TextField";

export const AuthorList = ({ listId, listType, tabs }) => {
  console.log("author");

  return (
    <React.Fragment>
      <TextField id="standard-basic" fullWidth />
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
                    <Draggable
                      key={`${tab.id}${tab.index}`}
                      draggableId={`${tab.id}${tab.index}`}
                      index={index}
                    >
                      {dragProvided => (
                        <div
                          {...dragProvided.dragHandleProps}
                          {...dragProvided.draggableProps}
                          ref={dragProvided.innerRef}
                        >
                          <img
                            src={tab.favIconUrl}
                            style={{ height: "40px" }}
                          ></img>
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
    </React.Fragment>
  );
};

// interface Props {
//   colors: string[];
//   listId: string;
//   listType?: string;
//   internalScroll?: boolean;
//   isCombineEnabled?: boolean;
// }
