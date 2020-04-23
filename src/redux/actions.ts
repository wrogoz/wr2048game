export const AddNewNumberToBoard = (array:any)=>{
    let myArray = [...array];
    let index1=Math.floor(Math.random()*4)
    let index2=Math.floor(Math.random()*4)
    let isNumberHasAdded=false;
        while (!isNumberHasAdded) {
        if(myArray[index1][index2]===null && isNumberHasAdded===false){
            myArray[index1][index2]=2;
            isNumberHasAdded=true;
            console.log('while loop added 2')
        }else{
            index1=Math.floor(Math.random()*4)
            index2=Math.floor(Math.random()*4)
            console.log('while loop')
        }
    }

    return { type:'ADD_NEW_NUMBER_TO_TABLE',boardArray:myArray
   }
  }