import React, { Component } from 'react'
import styled,{keyframes,css} from "styled-components";
import { connect } from "react-redux";
import {MoveToTheTop } from "./redux/actions/moveTileTop";
import {MoveToTheBottom } from "./redux/actions/moveTileBottom";
import {MoveToTheRight} from './redux/actions/moveTileRight';
import {MoveToTheLeft} from './redux/actions/moveTileLeft';
import {StartNewGame} from './redux/actions/startGame';
interface BoardProps {
    boardArray: number[][];
    dispatch: any;
    result:number;
    gameOver:boolean;
    displayAnimation:boolean;
    animationDirection:string;

  }

class Boardwithclasses extends Component<BoardProps,{}> {

componentDidMount(){
    this.props.dispatch(StartNewGame());
}

    KeyPressAction = (e: { preventDefault: () => void; keyCode: number; }) => {
      e.preventDefault();
        if (e.keyCode === 39) {
          this.props.dispatch(MoveToTheRight( this.props.boardArray,this.KeyPressAction,this.props.result))
          this.props.dispatch({type:"DISPLAY_ANIMATION",displayAnimation:false})
          }

        else if(e.keyCode===37){
          this.props.dispatch(MoveToTheLeft(this.props.boardArray,this.KeyPressAction,this.props.result));
          this.props.dispatch({type:"DISPLAY_ANIMATION",displayAnimation:false})

        }
        else if(e.keyCode===38){
            this.props.dispatch(MoveToTheTop(this.props.boardArray,this.KeyPressAction,this.props.result));
            this.props.dispatch({type:"DISPLAY_ANIMATION",displayAnimation:false})

        }
        else if(e.keyCode===40){
            this.props.dispatch(MoveToTheBottom(this.props.boardArray,this.KeyPressAction,this.props.result));
            this.props.dispatch({type:"DISPLAY_ANIMATION",displayAnimation:false})

        }
      };





    render() {
      if(!this.props.gameOver){
        window.addEventListener("keyup", this.KeyPressAction)
      }


        const board = this.props.boardArray.map((el: React.ReactNode[], key: number) => {
            return (
              <BoardRow key={key}>
                <Tile ><Num animate={this.props.displayAnimation} >{el[0]}</Num></Tile>
                <Tile><Num animate={this.props.displayAnimation}>{el[1]}</Num></Tile>
                <Tile><Num animate={this.props.displayAnimation}>{el[2]}</Num></Tile>
                <Tile><Num animate={this.props.displayAnimation}>{el[3]}</Num></Tile>

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

const Tile:any = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;




`;
const moveNumToRight=keyframes`
 from{
  opacity:0;
  transform:translateX(-30px);
 }
 to{
opacity:1;
transform:translateX(0px);
 }
`
const moveNumToLeft=keyframes`
 from{
  opacity:0;
  transform:translateX(30px);
 }
 to{
opacity:1;
transform:translateX(0px);

 }
`
const moveNumToBottom=keyframes`
 from{
  opacity:0;
  transform:translateY(30px);
 }
 to{
opacity:1;
transform:translateX(0px);
 }
`
const moveNumToTop=keyframes`
 from{
  opacity:0.5;
  transform:translateY(-100px);
 }
 to{
opacity:1;
transform:translateX(0px);
 }
`

let animationDirection:any;

  animationDirection=moveNumToLeft



const numAnimation =
  css`
    ${animationDirection } 0.1s linear;
  `
const Num:any=styled.p`

    animation:${(props:any)=>props.animate===true?numAnimation :null};

    font-size: 2rem;
    color:#777;
  `

const mapStateToProps = (state: { boardArray: number[][],result:number,gameOver:boolean,displayAnimation:boolean,animationDirection:string}) => {
  return {
    boardArray: state.boardArray,
    result:state.result,
    gameOver:state.gameOver,
    displayAnimation:state.displayAnimation,
    animationDirection:state.animationDirection
  };
};

export default connect(mapStateToProps)(Boardwithclasses);
