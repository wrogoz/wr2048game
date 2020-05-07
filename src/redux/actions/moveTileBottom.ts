import {IsGameOver} from './gameOver'
import {AddNewNumberToBoard} from './addNewNumberToBoard';
import {CheckResult} from './checkResult';

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

    return { type: "MOVETOTHEBOTTOM", boardArray: modifiedArray,result:result,gameOver:gameOver,displayAnimation:true };
  };