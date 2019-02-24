import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import "./styles.css";
import bgPositions from "./bgPosition";
import { move, reload, eazyWin } from "../store/actions";
import { GameField, ImageBlock } from "./styledDivs";

function Pazzle(props) {
  const { myBlocks, move, isWin, reload, eazyWin } = props;

  return (
    <Fragment>
      <div className="controle">
        <button
          className="btn"
          onClick={() => reload()}
        >Reload Game
        </button>
        <button
          className="btn"
          onClick={() => eazyWin()}
        >Eazy Win
        </button>
      </div>
      <GameField isWin={isWin}>
        {
          !isWin && myBlocks.map(block => {
            const { bgPositionX, bgPositionY } = bgPositions(block.id)
            return (
              <ImageBlock
                onClick={() => move(block)}
                x={block.x}
                y={block.y}
                bgPositionX={bgPositionX + "px"}
                bgPositionY={bgPositionY + "px"}
                id={block.id}
              >
              </ImageBlock>
            );
          })
        }
      </GameField>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    myBlocks: state.allBlocks || [],
    isWin: state.isWin,
  };
}

const mapDispatchToProps = {
  move,
  reload,
  eazyWin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pazzle);