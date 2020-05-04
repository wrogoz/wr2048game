
let initialState:{} = {

  result:0,
    boardArray:[
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null]
]
}



  const reducer = (state = initialState, action: { type: string ,boardArray:number[][],result:number})=> {
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
              result:action.result


            }
            case 'MOVETOTHELEFT':
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result
              }
              case "MOVETOTHETOP":
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result
              }
              case 'MOVETOTHEBOTTOM':
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result
              }
              case "START_NEW_GAME":
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result
              }
              case 'CHANGE_RESULT':
                return{
                  ...state,
                  result:action.result
                }
        default:
          return state
      }

    }

    export default reducer;