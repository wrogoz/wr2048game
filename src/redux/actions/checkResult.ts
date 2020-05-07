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