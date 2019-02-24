export default function () {
  const size = 800;
  const blocks = 4;

  const blockSize = size / blocks;
  const pazzlesPositions = [];

  for (let y = 0; y / blockSize < blocks; y = y + blockSize) {
    for (let x = 0; x / blockSize < blocks; x = x + blockSize) {
      pazzlesPositions.push({
        y,
        x,
        position: pazzlesPositions.length
      });
    }
  }
  return pazzlesPositions;
}
