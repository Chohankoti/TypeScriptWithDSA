interface PyramidProps {
  rows: number;
  columns?: number;
  type?: PyramidType;
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
  Diamond = "Diamond",
}
const Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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
          for (let i = 1; i <= rows; i++) {
            // Calculate spacing and create it all at once
            let spaces = " ".repeat(rows - i);

            // Create left side using slice and reverse
            let leftSide = Alphabets.slice(0, i).split("").reverse().join("");

            // Create right side using slice (excluding the middle character to avoid duplication)
            let rightSide = Alphabets.slice(1, i);

            // Print the entire row at once
            console.log(spaces + leftSide + rightSide);
          }
          console.log();
          break;
        }
        case PyramidType.Alphabets: {
          for (let i = 1; i <= rows; i++) {
            console.log(
              " ".repeat(rows - i) +
                Array.from({ length: i }, (_, j) =>
                  String.fromCharCode(65 + j)
                ).join(" ")
            );
          }
          console.log();
          for (let i = 1; i <= rows; i++) {
            console.log(
              " ".repeat(rows - i) +
                Array.from({ length: i }, () =>
                  String.fromCharCode(65 + i - 1)
                ).join(" ")
            );
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
          for (let i = rows; i >= 1; i--) {
            console.log(" ".repeat(rows - i) + "* ".repeat(i));
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            let spaces = " ".repeat(rows - i);

            // Create left side using slice and reverse
            let leftSide = Alphabets.slice(0, i).split("").reverse().join("");

            // Create right side using slice (excluding the middle character to avoid duplication)
            let rightSide = Alphabets.slice(1, i);

            // Print the entire row at once
            console.log(spaces + leftSide + rightSide);
          }
          console.log();
          break;
        }
        case PyramidType.Alphabets: {
          for (let i = rows; i >= 1; i--) {
            console.log(
              " ".repeat(rows - i) +
                Array.from({ length: i }, (_, j) =>
                  String.fromCharCode(65 + j)
                ).join(" ")
            );
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(
              " ".repeat(rows - i) +
                Array.from({ length: i }, () =>
                  String.fromCharCode(65 + i - 1)
                ).join(" ")
            );
          }
          console.log();
          break;
        }
      }
      break;
    }
    case Angle.Diamond: {
      switch (type) {
        case PyramidType.Stars: {
          for (let i = 1; i <= 2 * rows; i++) {
            let spaces = Math.abs(rows - i); // Controls leading spaces
            let stars = rows - spaces; // Controls the number of stars
            console.log(" ".repeat(spaces) + "* ".repeat(stars));
          }
          break;
        }
      }
      break;
    }
    default: {
      console.log("Invalid Angle");
      break;
    }
  }
};

printPyramidPattern({ rows: 5, type: PyramidType.Stars, angle: Angle.Pyramid });
printPyramidPattern({
  rows: 5,
  type: PyramidType.Stars,
  angle: Angle.PyramidInverted,
});
// printPyramidPattern({ rows: 5, type: PyramidType.Alphabets, angle: Angle.Pyramid });
// printPyramidPattern({ rows: 5, type: PyramidType.Alphabets, angle: Angle.PyramidInverted });
// printPyramidPattern({ rows: 6, type: PyramidType.Stars, angle: Angle.Diamond });
// printPyramidPattern({ rows: 7, type: PyramidType.Stars, angle: Angle.Diamond });
