
let initialState:{} = {

    boardArray:[
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null]
]
}



  const reducer = (state = initialState, action: { type: string ,boardArray:number[][]})=> {
      switch (action.type) {

          case 'ADD_NEW_NUMBER_TO_TABLE':
            return {
            ...state,
            boardArray:action.boardArray


            }
            case 'MOVETOTHERIGHT':
            return {
            ...state,
            boardArray:action.boardArray


            }
            case 'MOVETOTHELEFT':
              return {
              ...state,
              boardArray:action.boardArray
              }
              case "MOVETOTHETOP":
              return {
              ...state,
              boardArray:action.boardArray
              }
              case 'MOVETOTHEBOTTOM':
              return {
              ...state,
              boardArray:action.boardArray
              }

        default:
          return state
      }

    }

    export default reducer;