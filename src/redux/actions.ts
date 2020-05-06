import {IsGameOver} from '../gameOver'


const Add2or4ToArray=(userArray:any[][])=>{
  let array=userArray;
  let index1 = Math.floor(Math.random() * 4);
  let index2 = Math.floor(Math.random() * 4);
  let isNumberHasAdded = false;
  while (!isNumberHasAdded) {
    if (userArray[index1][index2] === null && isNumberHasAdded === false) {
      userArray[index1][index2] = 2+2*Math.round(Math.random());
      isNumberHasAdded = true;

    } else {
      index1 = Math.floor(Math.random() * 4);
      index2 = Math.floor(Math.random() * 4);
    }
  }
  return array
}
export const StartNewGame = ()=>{

   let modifiedArray: any[][]=[
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null]
];
modifiedArray=Add2or4ToArray(modifiedArray);
modifiedArray=Add2or4ToArray(modifiedArray);
  return {
    type:"START_NEW_GAME",
    boardArray:modifiedArray,
    result:0
  }

}





export const AddNewNumberToBoard = (array: number[][], numberValue: number) => {
  let modifiedArray = [...array];



    let index1 = Math.floor(Math.random() * 4);
    let index2 = Math.floor(Math.random() * 4);
    let isNumberHasAdded = false;
    while (!isNumberHasAdded) {
      if (modifiedArray[index1][index2] === null && isNumberHasAdded === false) {
        modifiedArray[index1][index2] = numberValue;
        isNumberHasAdded = true;

    } else {
      index1 = Math.floor(Math.random() * 4);
      index2 = Math.floor(Math.random() * 4);

    }
  }

  return { type: "ADD_NEW_NUMBER_TO_TABLE", boardArray: modifiedArray };
  };






export const CheckResult=(userArray:any[][],userResult:number)=>{
  let result=userResult;
  userArray.forEach(element => {
    element.forEach( tile => {
      if(tile>result){
        result=tile
      }
    });
  });

  return result;
}

export const MoveToTheRight = (
  array: number[][],
  disableThisAction: any,
  userResult:number
) => {
  let modifiedArray = [...array];
  let canAddNewNumber = false;

  for (let row = 0; row < modifiedArray.length; row++) {
    let counter = 0;
    let neighbouringNumAdded = false;
    while (counter < 4) {
      for (
        let indexOfTile = modifiedArray.length - 1;
        indexOfTile > 0;
        indexOfTile--
      ) {
        // if the number on beside is same as this number
        if (
          modifiedArray[row][indexOfTile] ===
            modifiedArray[row][indexOfTile - 1] &&
          modifiedArray[row][indexOfTile] !== null &&
          neighbouringNumAdded === false
        ) {
          modifiedArray[row][indexOfTile] =
            modifiedArray[row][indexOfTile] +
            modifiedArray[row][indexOfTile - 1];
          modifiedArray[row][indexOfTile - 1] = null;
          canAddNewNumber = true;
          neighbouringNumAdded = true;
        }

        // if the tile beside of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row][indexOfTile - 1] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row][indexOfTile - 1];
          modifiedArray[row][indexOfTile - 1] = null;
          canAddNewNumber = true;
        }
      }
      counter++;
    }
  }
  window.removeEventListener("keyup", disableThisAction);
  let result=CheckResult(modifiedArray,userResult);
  if (canAddNewNumber) {
    AddNewNumberToBoard(modifiedArray, 2);
  }
  let gameOver= (result===2048? true : IsGameOver(modifiedArray));
  return { type: "MOVETOTHERIGHT", boardArray: modifiedArray,result:result,gameOver:gameOver };
};

export const MoveToTheLeft = (
  array: number[][],
  disableThisAction: any,
  userResult:number
) => {
  let modifiedArray = [...array];
  let canAddNewNumber = false;
  for (let row = 0; row < modifiedArray.length; row++) {
    let counter = 0;
    let neighbouringNumAdded = false;
    while (counter < 4) {
      for (
        let indexOfTile = 0;
        indexOfTile < modifiedArray.length - 1;
        indexOfTile++
      ) {
        // if the number on beside is same as this number
        if (
          modifiedArray[row][indexOfTile] ===
            modifiedArray[row][indexOfTile + 1] &&
          modifiedArray[row][indexOfTile] !== null &&
          neighbouringNumAdded === false
        ) {
          modifiedArray[row][indexOfTile] =
            modifiedArray[row][indexOfTile] +
            modifiedArray[row][indexOfTile + 1];
          modifiedArray[row][indexOfTile + 1] = null;
          canAddNewNumber = true;
          neighbouringNumAdded = true;
        }

        // if the tile beside of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row][indexOfTile + 1] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row][indexOfTile + 1];
          modifiedArray[row][indexOfTile + 1] = null;
          canAddNewNumber = true;
        }
      }
      counter++;
    }
  }
  window.removeEventListener("keyup", disableThisAction);
  let result=CheckResult(modifiedArray,userResult);
  if (canAddNewNumber) {
    AddNewNumberToBoard(modifiedArray, 2);
  }
  let gameOver= (result===2048? true : IsGameOver(modifiedArray));
  return { type: "MOVETOTHELEFT", boardArray: modifiedArray,result:result,gameOver:gameOver };
};

export const MoveToTheTop = (
  array: number[][],
  disableThisAction: any,
  userResult:number
) => {
  let modifiedArray = [...array];
  let canAddNewNumber = false;
  for (let indexOfTile = 0; indexOfTile < modifiedArray.length; indexOfTile++) {
    let neighbouringNumAdded = false;
    let counter = 0;
    while (counter < 4) {
      for (let row = 0; row < modifiedArray.length - 1; row++) {
        // if the number below is same as this number
        if (
          modifiedArray[row][indexOfTile] ===
            modifiedArray[row + 1][indexOfTile] &&
          modifiedArray[row][indexOfTile] !== null &&
          neighbouringNumAdded === false
        ) {
          modifiedArray[row][indexOfTile] =
            modifiedArray[row][indexOfTile] +
            modifiedArray[row + 1][indexOfTile];
          modifiedArray[row + 1][indexOfTile] = null;
          canAddNewNumber = true;
          neighbouringNumAdded = true;
        }

        // if the tile below of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row + 1][indexOfTile] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row + 1][indexOfTile];
          modifiedArray[row + 1][indexOfTile] = null;
          canAddNewNumber = true;
        }
      }
      counter++;
    }
  }
  window.removeEventListener("keyup", disableThisAction);
  let result=CheckResult(modifiedArray,userResult);

  if (canAddNewNumber) {
    AddNewNumberToBoard(modifiedArray, 2);
  }
  let gameOver= (result===2048? true : IsGameOver(modifiedArray));

  return { type: "MOVETOTHETOP", boardArray: modifiedArray,result:result,gameOver:gameOver };
};

export const MoveToTheBottom = (
  array: number[][],
  disableThisAction: any,
  userResult:number
) => {
  let modifiedArray = [...array];
  let canAddNewNumber = false;
  for (let indexOfTile = 0; indexOfTile < modifiedArray.length; indexOfTile++) {
    let counter = 0;
    let neighbouringNumAdded = false;
    while (counter < 4) {
      for (let row = modifiedArray.length - 1; row > 0; row--) {
        // if the upper number  is same as this number
        if (
          modifiedArray[row][indexOfTile] ===
            modifiedArray[row - 1][indexOfTile] &&
          modifiedArray[row][indexOfTile] !== null &&
          neighbouringNumAdded === false
        ) {
          modifiedArray[row][indexOfTile] =
            modifiedArray[row][indexOfTile] +
            modifiedArray[row - 1][indexOfTile];
          modifiedArray[row - 1][indexOfTile] = null;
          canAddNewNumber = true;
          neighbouringNumAdded = true;
        }

        // if the tile upper of this is number and this tile is null
        else if (
          modifiedArray[row][indexOfTile] === null &&
          modifiedArray[row - 1][indexOfTile] !== null
        ) {
          modifiedArray[row][indexOfTile] = modifiedArray[row - 1][indexOfTile];
          modifiedArray[row - 1][indexOfTile] = null;
          canAddNewNumber = true;
        }
      }
      counter++;
    }
  }
window.removeEventListener("keyup", disableThisAction);
  let result=CheckResult(modifiedArray,userResult);

  if (canAddNewNumber) {
    AddNewNumberToBoard(modifiedArray, 2);
  }
  let gameOver= (result===2048? true : IsGameOver(modifiedArray));

  return { type: "MOVETOTHELEFT", boardArray: modifiedArray,result:result,gameOver:gameOver };
};
