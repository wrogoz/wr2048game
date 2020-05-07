import {IsGameOver} from './gameOver'
import {AddNewNumberToBoard} from './addNewNumberToBoard';
import {CheckResult} from './checkResult';


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
  return { type: "MOVETOTHERIGHT", boardArray: modifiedArray,result:result,gameOver:gameOver,displayAnimation:true };
};

