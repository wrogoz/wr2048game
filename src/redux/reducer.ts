
const initialState = {

    array:[
        ['00','01','02','03'],
    ['10','11','12','13'],
    ['20','21','22','23'],
    ['30','31','32','33']
  ]
}
  const reducer = (state = initialState, action: { type: string,width:number })=> {
      switch (action.type) {
        case 'Test':
          return {
            ...state,

          }

        default:
          return state
      }
    }

    export default reducer;