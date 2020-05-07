

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