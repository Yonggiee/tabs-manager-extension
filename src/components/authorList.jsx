/*global chrome*/
import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";
import TextField from "@material-ui/core/TextField";

export const AuthorList = ({ listId, listType, tabs }) => {
  function switchTab(tabid) {
    // find the tab
    chrome.tabs.get(tabid, function(tab) {
      // Focus the window before the tab to fix issue #273
      //chrome.windows.update(tab.windowId, { focused: true }, function () {
      // focus the tab
      chrome.tabs.update(tabid, { active: true }, function(tab) {});
      //});
    });
  }

  return (
    <React.Fragment>
      <TextField id="standard-basic" fullWidth value={listId}></TextField>
      <Droppable
        droppableId={listId}
        type={listType}
        direction="horizontal"
        isCombineEnabled={false}
        style={{ height: "50px" }}
      >
        {dropProvided => (
          <div {...dropProvided.droppableProps}>
            <div>
              <div>
                <div
                  style={{ display: "flex", height: "50px" }}
                  ref={dropProvided.innerRef}
                >
                  {tabs.map((tab, index) => (
                    <Draggable
                      key={`${tab.id}`}
                      draggableId={`${tab.id}`}
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
                            onClick={() => switchTab(tab.id)}
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
