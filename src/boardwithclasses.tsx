import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import {  MoveToTheTop, MoveToTheBottom, StartNewGame } from "./redux/actions";
import {MoveToTheRight} from './redux/actions';
import {MoveToTheLeft} from './redux/actions';
interface BoardProps {
    boardArray: number[][];
    dispatch: any;
    result:number;
    gameOver:boolean;

  }

class Boardwithclasses extends Component<BoardProps,{}> {

componentDidMount(){
    this.props.dispatch(StartNewGame());
}

    KeyPressAction = (e: { keyCode: number }) => {
        if (e.keyCode === 39) {
          this.props.dispatch(MoveToTheRight( this.props.boardArray,this.KeyPressAction,this.props.result))

          }

        else if(e.keyCode===37){
          this.props.dispatch(MoveToTheLeft(this.props.boardArray,this.KeyPressAction,this.props.result));


        }
        else if(e.keyCode===38){
            this.props.dispatch(MoveToTheTop(this.props.boardArray,this.KeyPressAction,this.props.result));


        }
        else if(e.keyCode===40){
            this.props.dispatch(MoveToTheBottom(this.props.boardArray,this.KeyPressAction,this.props.result));


        }
        else if(e.keyCode===65){


        }

      };

    render() {
      if(!this.props.gameOver){
        window.addEventListener("keyup", this.KeyPressAction)
      }


        const board = this.props.boardArray.map((el: React.ReactNode[], key: number) => {
            return (
              <BoardRow key={key}>
                <Tile>{el[0]}</Tile>
                <Tile>{el[1]}</Tile>
                <Tile>{el[2]}</Tile>
                <Tile>{el[3]}</Tile>
              </BoardRow>
            );
          });
        return (
            <>{board}</>

        )
    }
}


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

const mapStateToProps = (state: { boardArray: number[][],result:number,gameOver:boolean}) => {
  return {
    boardArray: state.boardArray,
    result:state.result,
    gameOver:state.gameOver
  };
};

export default connect(mapStateToProps)(Boardwithclasses);
