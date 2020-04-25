
let initialState = {

    boardArray:[
      [4,null,2,2],
      [2,2,null,2],
      [16,null,null,null],
      [16,16,null,32]
],
  bubu:true
}



  const reducer = (state = initialState, action: { type: string ,boardArray:any})=> {
      switch (action.type) {
        case 'TEST':
          return {
          ...state,
            boardArray:[
              ['00','01','02','03'],
              ['10','aza','12','13'],
              ['20','21','22','23'],
              ['30','31','32','33']
        ]

          }
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