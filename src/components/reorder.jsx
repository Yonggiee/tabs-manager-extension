import { DraggableLocation } from "react-beautiful-dnd";

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderIcons = (temp, source, destination) => {
  // console.log("temp", temp);
  let icons = [];
  let category = "";
  let index = "";
  Object.entries(temp).map(([k, v]) => {
    icons[v.category] = v.icons;
    category = v.category;
    index = k;
  });

  const current = [...icons[source.droppableId]];
  const next = [...icons[destination.droppableId]];
  const target = current[source.index];
  // console.log("sourceindex", index);
  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    temp[index].icons = icons[category];
    // console.log("final temp", temp);
    return {
      ...temp
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  return {
    ...icons,
    [source.droppableId]: current,
    [destination.droppableId]: next,
    sourceIndex: source.index,
    destinationIndex: destination.index
  };
};
