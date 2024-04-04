import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";

const GameOfLife = ({ height, width }) => {
  const sketchRef = useRef();
  const [p5Instance, setP5Instance] = useState(null);
  const canvaSize = [width, height];
  const squareSize = 12;

  console.log(width, height);
  useEffect(() => {
    const sketch = (p) => {
      const cols = Math.round(canvaSize[0] / squareSize);
      const rows = Math.round(canvaSize[1] / squareSize);
      const grid = new Array(cols).fill(null).map(() => new Array(rows));

      p.setup = () => {
        p.frameRate(15);
        p.createCanvas(canvaSize[0], canvaSize[1]);
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            grid[i][j] = p.floor(p.random(2));
          }
        }
      };

      p.draw = () => {
        p.noStroke();
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            if (grid[i][j] === 1) {
              p.fill(173, 231, 0);
            } else {
              p.fill(17, 24, 39);
            }

            p.rect(i * squareSize, j * squareSize, squareSize, squareSize);
          }
        }

        let next = new Array(cols)
          .fill(null)
          .map(() => new Array(rows).fill(0));

        // Compute next based on grid
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            // Count live neighbors
            let neighbors = 0;
            for (let x = -1; x <= 1; x++) {
              for (let y = -1; y <= 1; y++) {
                if (x === 0 && y === 0) {
                  continue;
                }
                let col = (i + x + cols) % cols;
                let row = (j + y + rows) % rows;
                neighbors += grid[col][row];
              }
            }

            // Rules of Life
            if (state === 0 && neighbors === 3) {
              next[i][j] = 1;
            } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
              next[i][j] = 0;
            } else {
              next[i][j] = state;
            }
          }
        }

        grid.splice(0, cols, ...next);
      };
      p.mouseMoved = () => {
        let i = Math.floor(p.mouseX / squareSize);
        let j = Math.floor(p.mouseY / squareSize);
        if (i >= 0 && i < cols - 1 && j >= 0 && j < rows - 1) {
          grid[i][j] = 1;
          grid[i + 1][j] = 1;
          grid[i][j + 1] = 1;
        }
      };
    };

    if (!p5Instance) {
      setP5Instance(new p5(sketch, sketchRef.current));
    }

    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, [p5Instance, height, width]);

  return <div ref={sketchRef}></div>;
};

export default GameOfLife;
