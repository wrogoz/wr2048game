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