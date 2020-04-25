import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { AddNewNumberToBoard } from "./redux/actions";
import {MoveToTheRight} from './redux/actions';
import {MoveToTheLeft} from './redux/actions';
interface BoardProps {
  boardArray: any;
  dispatch: any;
  bubu: boolean;
}

const Board = (props: BoardProps) => {

  const KeyPressAction = (e: { keyCode: number }) => {
    if (e.keyCode === 39) {
      // props.dispatch(AddNewNumberToBoard(props.boardArray));
      props.dispatch(MoveToTheRight(props.boardArray,KeyPressAction))

    }
    else if(e.keyCode===37){
      props.dispatch(MoveToTheLeft(props.boardArray,KeyPressAction))
    }
    else if(e.keyCode===38){
      console.log('arrow up clicked')
    }
    else if(e.keyCode===40){
      console.log('arrow down clicked')
    }



  };



  window.addEventListener("keyup", KeyPressAction);

  const board = props.boardArray.map((el: any, key: number) => {
    return (
      <BoardRow key={key}>
        <Tile>{el[0]}</Tile>
        <Tile>{el[1]}</Tile>
        <Tile>{el[2]}</Tile>
        <Tile>{el[3]}</Tile>
      </BoardRow>
    );
  });
  return <>{board}</>;
};

const BoardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
`;
const Tile = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const mapStateToProps = (state: { boardArray: any; bubu: boolean }) => {
  return {
    boardArray: state.boardArray,
    bubu: state.bubu,
  };
};

export default connect(mapStateToProps)(Board);
