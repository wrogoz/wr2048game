import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { MoveToTheTop } from "./redux/actions/moveTileTop";
import { MoveToTheBottom } from "./redux/actions/moveTileBottom";
import { MoveToTheRight } from "./redux/actions/moveTileRight";
import { MoveToTheLeft } from "./redux/actions/moveTileLeft";
import { StartNewGame } from "./redux/actions/startGame";
import { TileNumb } from "./tilenumber";
interface BoardProps {
  boardArray: number[][];
  dispatch: any;
  result: number;
  gameOver: boolean;
  displayAnimation: boolean;
  animationDirection: string;
}

class Boardwithclasses extends Component<BoardProps, {}> {
  componentDidMount() {
    this.props.dispatch(StartNewGame());
  }

  KeyPressAction = (e: { preventDefault: () => void; keyCode: number }) => {
    if (e.keyCode === 39) {
      this.props.dispatch(
        MoveToTheRight(
          this.props.boardArray,
          this.KeyPressAction,
          this.props.result
        )
      );
      setTimeout(() => {
        this.props.dispatch({ type: "RESET_TILE_ANIMATION" });
      }, 400);
    } else if (e.keyCode === 37) {
      this.props.dispatch(
        MoveToTheLeft(
          this.props.boardArray,
          this.KeyPressAction,
          this.props.result
        )
      );
      setTimeout(() => {
        this.props.dispatch({ type: "RESET_TILE_ANIMATION" });
      }, 400);
    } else if (e.keyCode === 38) {
      this.props.dispatch(
        MoveToTheTop(
          this.props.boardArray,
          this.KeyPressAction,
          this.props.result
        )
      );
      setTimeout(() => {
        this.props.dispatch({ type: "RESET_TILE_ANIMATION" });
      }, 400);
    } else if (e.keyCode === 40) {
      this.props.dispatch(
        MoveToTheBottom(
          this.props.boardArray,
          this.KeyPressAction,
          this.props.result
        )
      );
      setTimeout(() => {
        this.props.dispatch({ type: "RESET_TILE_ANIMATION" });
      }, 400);
    }
  };

  render() {
    if (!this.props.gameOver) {
      window.addEventListener("keyup", this.KeyPressAction);
    }

    const board = this.props.boardArray.map(
      (el: React.ReactNode[], key: number) => {
        return (
          <BoardRow key={key}>
            <Tile>
              <TileNumb >
                {el[0]}
              </TileNumb>
            </Tile>
            <Tile>
              <TileNumb >
                {el[1]}
              </TileNumb>
            </Tile>
            <Tile>
              <TileNumb >
                {el[2]}
              </TileNumb>
            </Tile>
            <Tile>
              <TileNumb >
                {el[3]}
              </TileNumb>
            </Tile>
          </BoardRow>
        );
      }
    );
    return <>{board}</>;
  }
}

const BoardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
`;

const Tile: any = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const mapStateToProps = (state: {
  boardArray: number[][];
  result: number;
  gameOver: boolean;
  displayAnimation: boolean;
  animationDirection: string | null;
}) => {
  return {
    boardArray: state.boardArray,
    result: state.result,
    gameOver: state.gameOver,
    displayAnimation: state.displayAnimation,
    animationDirection: state.animationDirection,
  };
};

export default connect(mapStateToProps)(Boardwithclasses);
