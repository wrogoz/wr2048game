const AddNewNumberToBoard = (
  array: [number][]

) => {
  let modifiedArray = [...array];
  let index1 = Math.floor(Math.random() * 4);
  let index2 = Math.floor(Math.random() * 4);
  let isNumberHasAdded = false;
  while (!isNumberHasAdded) {
    if (modifiedArray[index1][index2] === null && isNumberHasAdded === false) {
      modifiedArray[index1][index2] = 2 ;
      isNumberHasAdded = true;
      console.log("while loop added 2 or 4");
    } else {
      index1 = Math.floor(Math.random() * 4);
      index2 = Math.floor(Math.random() * 4);
      console.log("number isnt added");
    }
  }

  return { type: "ADD_NEW_NUMBER_TO_TABLE", boardArray: modifiedArray };
};








export const MoveToTheRight = (
  array: [[null | number]],
  disableThisAction: any
) => {
  let modifiedArray = [...array];

  for (let row = 0; row < modifiedArray.length; row++) {
    let counter = 0;
    while (counter < 4) {
      for (let indexOfTile = modifiedArray.length - 1;indexOfTile > 0;indexOfTile--
      ) {
        // if the number on beside is same as this number
        if (
          modifiedArray[row][indexOfTile] ===
            modifiedArray[row][indexOfTile - 1] &&
          modifiedArray[row][indexOfTile] !== null
        ) {
          modifiedArray[row][indexOfTile] =
            modifiedArray[row][indexOfTile] +
            modifiedArray[row][indexOfTile - 1];
          modifiedArray[row][indexOfTile - 1] = null;
        }

        // if the tile beside of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row][indexOfTile - 1] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row][indexOfTile - 1];
          modifiedArray[row][indexOfTile - 1] = null;
        }
      }
      counter++;
    }
  }
  AddNewNumberToBoard(modifiedArray)
  window.removeEventListener("keyup", disableThisAction);
  return { type: "MOVETOTHERIGHT", boardArray: modifiedArray };
};








export const MoveToTheLeft = (array: [[null | number]],disableThisAction: any ) => {
  let modifiedArray = [...array];
  for (let row = 0; row < modifiedArray.length; row++) {
    let counter = 0;
    while (counter < 4) {
      for (let indexOfTile = 0; indexOfTile <modifiedArray.length-1; indexOfTile++) {
        // if the number on beside is same as this number
        if (
          modifiedArray[row][indexOfTile] === modifiedArray[row][indexOfTile + 1] &&  modifiedArray[row][indexOfTile] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row][indexOfTile] + modifiedArray[row][indexOfTile +1];
          modifiedArray[row][indexOfTile +1] = null;
        }

        // if the tile beside of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row][indexOfTile + 1] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row][indexOfTile +1];
          modifiedArray[row][indexOfTile +1] = null;
        }
      }
      counter++;
    }
  }
  AddNewNumberToBoard(modifiedArray)
  console.log("move to the left :)");
  window.removeEventListener("keyup", disableThisAction);

  return { type: "MOVETOTHELEFT", boardArray: modifiedArray };
};








export const MoveToTheTop = (
  array: [[null | number]],
  disableThisAction: any

) => {
  let modifiedArray = [...array];
  for (let indexOfTile = 0; indexOfTile <modifiedArray.length; indexOfTile++) {
    let counter = 0;
    while (counter < 4) {
       for (let row = 0; row < modifiedArray.length-1; row++) {
        // if the number below is same as this number
        if (
          modifiedArray[row][indexOfTile] === modifiedArray[row+1][indexOfTile ] &&  modifiedArray[row][indexOfTile] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row][indexOfTile] + modifiedArray[row+1][indexOfTile ];
          modifiedArray[row+1][indexOfTile] = null;
        }

        // if the tile below of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row + 1][indexOfTile] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row + 1][indexOfTile];
          modifiedArray[row +1][indexOfTile] = null;
        }
      }
      counter++;
    }
  }
  AddNewNumberToBoard(modifiedArray)

  console.log("moved up:)");
  window.removeEventListener("keyup", disableThisAction);

  return { type: "MOVETOTHETOP", boardArray: modifiedArray };
};










export const MoveToTheBottom = (
  array: [[null | number]],
  disableThisAction: any
) => {

  let modifiedArray = [...array];

  for (let indexOfTile=0; indexOfTile<modifiedArray.length;indexOfTile++ ) {
    let counter = 0;
    while (counter < 4) {
      for (let row = modifiedArray.length-1; row>0; row--) {

        // if the upper number  is same as this number
        if (
          modifiedArray[row][indexOfTile] ===
            modifiedArray[row - 1][indexOfTile ] &&
          modifiedArray[row][indexOfTile] !== null
        ) {
          modifiedArray[row][indexOfTile] =
            modifiedArray[row][indexOfTile] +
            modifiedArray[row- 1][indexOfTile ];
          modifiedArray[row - 1][indexOfTile ] = null;
        }

        // if the tile upper of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row - 1][indexOfTile ] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row- 1][indexOfTile ];
          modifiedArray[row - 1][indexOfTile ] = null;
        }
      }
      counter++;

    }
  }
  AddNewNumberToBoard(modifiedArray)
  console.log("moved bottom:)");
  window.removeEventListener("keyup", disableThisAction);

  return { type: "MOVETOTHEBOTTOM", boardArray: modifiedArray };
};