import styled from 'styled-components';
import { BOX_SIZE, BLOCKS } from "./const";
import { isNull } from "lodash";

const image = require("../assets/imageForPazzle.jpg");

export const GameField = styled.div`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${BLOCKS}, ${BOX_SIZE / BLOCKS}px);
  background-image: ${props => props.isWin ? `url(${image})` : 'none'};
`;

export const ImageBlock = styled.div`
  position: absolute;
  top: ${props => props.y || 0}px;
  left: ${props => props.x || 0}px;
  width: ${BOX_SIZE / BLOCKS}px;
  height: ${BOX_SIZE / BLOCKS}px;
  box-sizing: border-box;
  padding: 5px;
  z-index: 10;
  align-items: center;
  justify-content: center;
  display: ${props => (isNull(props.id) ? "none" : "flex")};

  border: 2px solid rgba(145,145,145,0.6);
  background-image: url(${image});
  background-position-y: ${props => props.bgPositionY};
  background-position-x: ${props => props.bgPositionX};
`;