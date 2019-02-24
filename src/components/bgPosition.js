const blocks = 4;
const size = 200;

export default function (id) {

  let row = Math.floor(id / blocks);
  let col = Math.abs(row * blocks - id);
  const bgPositionX = -(col * size);
  const bgPositionY = -(row * size);

  return {
    bgPositionX,
    bgPositionY,
  };
};

