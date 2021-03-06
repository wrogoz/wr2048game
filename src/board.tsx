import React,{useEffect} from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {  MoveToTheTop, MoveToTheBottom } from "./redux/actions/actions";
import {MoveToTheRight} from './redux/actions/actions';
import {MoveToTheLeft} from './redux/actions/actions';
interface BoardProps {
  boardArray: any;
  dispatch: any;
  result:number;
  gameOver:boolean;
}

const Board = (props: BoardProps) => {




  const KeyPressAction = (e: { keyCode: number }) => {
    if (e.keyCode === 39) {
      props.dispatch(MoveToTheRight(props.boardArray,KeyPressAction,props.result))
      }
    else if(e.keyCode===37){
      props.dispatch(MoveToTheLeft(props.boardArray,KeyPressAction,props.result));
    }
    else if(e.keyCode===38){
      props.dispatch(MoveToTheTop(props.boardArray,KeyPressAction,props.result));
    }
    else if(e.keyCode===40){
      props.dispatch(MoveToTheBottom(props.boardArray,KeyPressAction,props.result));
    }
    else if(e.keyCode===65){


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
  font-size:20px;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #777;
  border-radius:10%;
`;

const mapStateToProps = (state: { boardArray: any ,result:number,gameOver:boolean }) => {
  return {
    boardArray: state.boardArray,
    gameOver:state.gameOver,
    result:state.result
  };
};

export default connect(mapStateToProps)(Board);
