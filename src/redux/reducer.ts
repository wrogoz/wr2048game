
let initialState:{} = {

  result:0,
  gameOver:false,
    boardArray:[
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null],
      [null,null,null,null]
],
  displayAnimation:false,
  animationDirection:'bottom'
}



  const reducer = (state = initialState, action: { type: string ,boardArray:number[][],gameOver:boolean,result:number, displayAnimation:boolean,animationDirection:string | boolean})=> {
      switch (action.type) {


          case "START_NEW_GAME":
                return {
                ...state,
                boardArray:action.boardArray,
                result:action.result,
                gameOver:false,
                animationDirection:false
                }
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
              gameOver:action.gameOver,
              animationDirection:'right'


            }
            case 'MOVETOTHELEFT':
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result,
              gameOver:action.gameOver,
              animationDirection:'left'
              }
              case "MOVETOTHETOP":
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result,
              gameOver:action.gameOver,
              animationDirection:'top'
              }
              case 'MOVETOTHEBOTTOM':
              return {
              ...state,
              boardArray:action.boardArray,
              result:action.result,
              gameOver:action.gameOver,
              animationDirection:'bottom'
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
            case 'RESET_TILE_ANIMATION':
            return {
            ...state,
            displayAnimation:false
            }
        default:
          return state
      }

    }

    export default reducer;