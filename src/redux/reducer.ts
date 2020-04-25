
let initialState = {

    boardArray:[
      [2,null,null,4],
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null]
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

        default:
          return state
      }
    }

    export default reducer;