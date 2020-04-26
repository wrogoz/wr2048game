import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import { AddNewNumberToBoard, MoveToTheTop, MoveToTheBottom } from "./redux/actions";
import {MoveToTheRight} from './redux/actions';
import {MoveToTheLeft} from './redux/actions';
interface BoardProps {
    boardArray: any;
    dispatch: any;

  }

class Boardwithclasses extends Component<BoardProps,{}> {

componentDidMount(){
    this.props.dispatch(AddNewNumberToBoard(this.props.boardArray,2+2*Math.round(Math.random())))
    this.props.dispatch(AddNewNumberToBoard(this.props.boardArray,2+2*Math.round(Math.random())))
}

    KeyPressAction = (e: { keyCode: number }) => {
        if (e.keyCode === 39) {
          this.props.dispatch(MoveToTheRight( this.props.boardArray,this.KeyPressAction))

          }

        else if(e.keyCode===37){
          this.props.dispatch(MoveToTheLeft(this.props.boardArray,this.KeyPressAction));


        }
        else if(e.keyCode===38){
            this.props.dispatch(MoveToTheTop(this.props.boardArray,this.KeyPressAction));


        }
        else if(e.keyCode===40){
            this.props.dispatch(MoveToTheBottom(this.props.boardArray,this.KeyPressAction));


        }
        else if(e.keyCode===65){


        }

      };

    render() {
        window.addEventListener("keyup", this.KeyPressAction)
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

const mapStateToProps = (state: { boardArray: any;}) => {
  return {
    boardArray: state.boardArray,

  };
};

export default connect(mapStateToProps)(Boardwithclasses);
