export const AddNewNumberToBoard = (array: any) => {
  let propsArray = [...array];
  let index1 = Math.floor(Math.random() * 4);
  let index2 = Math.floor(Math.random() * 4);
  let isNumberHasAdded = false;
  while (!isNumberHasAdded) {
    if (propsArray[index1][index2] === null && isNumberHasAdded === false) {
      propsArray[index1][index2] = 2;
      isNumberHasAdded = true;
      console.log("while loop added 2");
    } else {
      index1 = Math.floor(Math.random() * 4);
      index2 = Math.floor(Math.random() * 4);
      console.log("while loop");
    }
  }

  return { type: "ADD_NEW_NUMBER_TO_TABLE", boardArray: propsArray };
};

export const MoveToTheRight = (array: any) => {
  let propsArray = [...array];

  let counter = 0;
  while (counter<3) {
    for (let i = 0; i < propsArray.length - 1; i++) {
      if (propsArray[0][i] !== null && propsArray[0][i + 1] === null) {
        propsArray[0][i + 1] = propsArray[0][i];
        propsArray[0][i] = null;


      }
      else if(propsArray[0][i]===propsArray[0][i+1] && propsArray[0][i]!==null ){

        propsArray[0][i+1]=propsArray[0][i]+propsArray[0][i+1];
        propsArray[0][i]=null;
        console.log(typeof(propsArray[0][i+1]))
      }
      counter++
      console.log(counter)
    }
  }

  return { type: "MOVETOTHERIGHT", boardArray: propsArray };
};
