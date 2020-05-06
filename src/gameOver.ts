export const IsGameOver = (array:any)=>{
    let gameOver=true;

console.log(`right ${isPossibleToMoveTileRight(array)}`)
console.log(`left ${isPossibleToMoveTileLeft(array)}`)
console.log(`top ${isPossibleToMoveTileTop(array)}`)
console.log(`bottom ${isPossibleToMoveTileBottom(array)}`)

    if(isPossibleToMoveTileLeft(array) || isPossibleToMoveTileRight(array) || isPossibleToMoveTileTop(array) || isPossibleToMoveTileBottom(array)){
        gameOver=false;
    }


      return gameOver
      };




const isPossibleToMoveTileRight = (array:any)=>{
        let isPossibletoMove=false;
        //possibility to move right
        for (let row = 0; row < array.length; row++) {



            for (
              let indexOfTile = array.length - 1;
              indexOfTile > 0;
              indexOfTile--
            ) {

              if (
                (array[row][indexOfTile] ===
                  array[row][indexOfTile - 1] &&
                array[row][indexOfTile] !== null)
                ||
               (array[row][indexOfTile] === null &&
               array[row][indexOfTile - 1] !== null)
              ) {
                isPossibletoMove=true;
              }
          }
        }

        return isPossibletoMove
      }
      const isPossibleToMoveTileLeft = (array:any)=>{
        let isPossibletoMove=false;
        //possibility to move left
        for (let row = 0; row < array.length; row++) {

              for (
                let indexOfTile = 0;
                indexOfTile < array.length - 1;
                indexOfTile++
              ) {

                if (
                 ( array[row][indexOfTile] ===
                    array[row][indexOfTile + 1] &&
                  array[row][indexOfTile] !== null
) || (array[row][indexOfTile] === null &&
    array[row][indexOfTile + 1] !== null)
                ) {
                    isPossibletoMove=true;
                }
              }

          }



        return isPossibletoMove
      }

      const isPossibleToMoveTileTop = (array:any)=>{
        let isPossibletoMove=false;
        //possibility to move top
        for (let indexOfTile = 0; indexOfTile < array.length; indexOfTile++) {


            for (let row = 0; row < array.length - 1; row++) {

              if (
                (array[row][indexOfTile] ===
                  array[row + 1][indexOfTile] &&
                array[row][indexOfTile] !== null ) || ( array[row][indexOfTile] === null &&
                  array[row + 1][indexOfTile] !== null)
                )
               {
                isPossibletoMove=true;
              }
            }

        }
        return isPossibletoMove
      };

      const isPossibleToMoveTileBottom = (array:any)=>{
        let isPossibletoMove=false;
        for (let indexOfTile = 0; indexOfTile < array.length; indexOfTile++) {

            for (let row = array.length - 1; row > 0; row--) {
              // if the upper number  is same as this number
              if (
              (  array[row][indexOfTile] ===
                  array[row - 1][indexOfTile] &&
                array[row][indexOfTile] !== null ) ||  (
                  array[row][indexOfTile] === null &&
                  array[row - 1][indexOfTile] !== null
                )
              ) {
                  isPossibletoMove=true;
              }

            }

        }
        return isPossibletoMove
      };
