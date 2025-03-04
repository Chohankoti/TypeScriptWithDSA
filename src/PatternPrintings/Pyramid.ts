interface PyramidProps {
  rows: number;
  columns?: number;
  type: PyramidType;
  angle?: Angle;
}
enum PyramidType {
  Stars = "Stars",
  Numbers = "Numbers",
  Alphabets = "Alphabets",
  Binary = "Binary",
}
enum Angle {
  Pyramid = "Pyramid",
  PyramidInverted = "Pyramid-Inverted",
}
const printPyramidPattern = ({
  rows,
  columns = rows,
  type,
  angle,
}: PyramidProps) => {
  console.log(`Printing ${type} Pyramid Pattern:\n`);
  switch (angle) {
    case Angle.Pyramid: {
      switch (type) {
        case PyramidType.Stars: {
          for (let i = 1; i <= rows; i++) {
            console.log(" ".repeat(rows - i) + "* ".repeat(i));
          }
          console.log();
          break;
        }
      }
      break;
    }
    case Angle.PyramidInverted: {
        switch (type) {
            case PyramidType.Stars: {
            for(let i = rows; i >= 1; i--){
                console.log(" ".repeat(rows - i) + "* ".repeat(i));
            }
            console.log();
            break;
            }
        }
        break;
        }
    default: {  
        console.log("Invalid angle type");
        break;
    }
  }
};

printPyramidPattern({ rows: 5, type: PyramidType.Stars, angle: Angle.Pyramid });
printPyramidPattern({ rows: 5, type: PyramidType.Stars, angle: Angle.PyramidInverted });
