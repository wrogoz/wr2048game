import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

import {StartNewGame} from './redux/actions/startGame';
interface ButtonProps{
    btnText: string;
    boardArray: [number][];

    dispatch:any,

}
const Button = (props:ButtonProps)=>{

    const startNewGame =  ()=>{

      props.dispatch(StartNewGame());
    }

    return(
        <StyledButton
        onClick={startNewGame}>
            {props.btnText}
        </StyledButton>
    )
}


const StyledButton = styled.button`
  background-color:#fff;
  border-radius:1px solid #777;
  padding:10px;
  position:absolute;
  right:40%;
  top:-60px;
  border-radius:10%;
`
const mapStateToProps = (state: { boardArray: any;}) => {
    return {
      boardArray: state.boardArray,

    };
  };

  export default connect(mapStateToProps)(Button);