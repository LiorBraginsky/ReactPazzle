import { range, shuffle, merge } from "lodash";
import { BLOCKS } from "./const";
import countPos from "./countPosition";

export default function () {
  const blocksPositions = countPos();

  let blocksTMP = range(BLOCKS * BLOCKS).map(block => ({
    id: block
  }));
  const EmptyBlock = blocksTMP.pop();
  EmptyBlock.id = null;
  blocksTMP.push(EmptyBlock);
  blocksTMP = shuffle(blocksTMP);
  const blocks = [];
  for (let i = 0; i < blocksTMP.length; i++) {
    blocks.push(merge(blocksPositions[i], blocksTMP[i]));
  }

  return blocks;
}
