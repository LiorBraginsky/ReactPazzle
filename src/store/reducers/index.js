import { MOVE, RELOAD, EAZY_WIN } from '../constants/index';
import { isNull } from "lodash";

import blocks from "../../components/generateBlocksObjects";
import { find } from "lodash";
import { BLOCKS } from "../../components/const";

const allBlocks = blocks();

const initialState = {
  allBlocks,
  isWin: false,
};

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case MOVE: {
      const { allBlocks } = state;
      const emptyBlock = find(allBlocks, { id: null });
      const currentBlock = action.payload;
      if (isClose(emptyBlock, currentBlock)) {
        const newBlocks = allBlocks
          .map(b => {
            if (b.position === emptyBlock.position) {
              b.id = currentBlock.id;
            }
            return b;
          })
          .map(b => {
            if (b.position === currentBlock.position) {
              b.id = null;
            }
            return b;
          });
        return {
          ...state,
          allBlocks: newBlocks,
          isWin: isWin(allBlocks),
        }
      }
      return state;
    }

    case RELOAD: {
      return {
        allBlocks: blocks(state.allBlocks),
      };
    }

    case EAZY_WIN: {
      return {
        ...allBlocks,
        isWin: "true",
      }
    }

    default:
      return state;
  }
}

export default rootReducer;


function isClose(emptyBlock, currentBlock) {
  return (
    emptyBlock.position + 1 === currentBlock.position ||
    emptyBlock.position - 1 === currentBlock.position ||
    emptyBlock.position + BLOCKS === currentBlock.position ||
    emptyBlock.position - BLOCKS === currentBlock.position
  )
}

function isWin(allBlocks) {
  return allBlocks.every((block) => {
    if (isNull(block.id) && block.position === (allBlocks.length - 1)) {
      return true;
    }
    if (block.id === block.position) {
      return true;
    }
  })
}