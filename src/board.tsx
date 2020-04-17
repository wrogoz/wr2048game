import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
interface BoardProps {
  array: [][];
}
const Board = (props: BoardProps) => {
  const board = props.array.map((el: any) => {
    return (
      <BoardRow>
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

const mapStateToProps = (state: { array: [][] }) => {
  return {
    array: state.array,
  };
};

export default connect(mapStateToProps)(Board);
