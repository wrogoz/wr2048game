
let initialState:{} = {

  result:0,
  gameOver:false,
    boardArray:[
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null]
]
}



  const reducer = (state = initialState, action: { type: string ,boardArray:number[][],gameOver:boolean,result:number})=> {
      switch (action.type) {

          case 'ADD_NEW_NUMBER_TO_TABLE':
            return {
            ...state,
            boardArray:action.boardArray,
              result:action.result
            }
            case 'MOVETOTHERIGHT':
            return {
            ...state,
            boardArray:action.boardArray,
              result:action.result,
              gameOver:action.gameOver


            }
            case 'MOVETOTHELEFT':
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result,
              gameOver:action.gameOver
              }
              case "MOVETOTHETOP":
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result,
              gameOver:action.gameOver
              }
              case 'MOVETOTHEBOTTOM':
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result,
              gameOver:action.gameOver
              }
              case "START_NEW_GAME":
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result,
              gameOver:false
              }
              case 'CHANGE_RESULT':
                return{
                  ...state,
                  result:action.result
                }
                case 'GAME_OVER':
            return {
            ...state,
            gameOver:true
            }
        default:
          return state
      }

    }

    export default reducer;