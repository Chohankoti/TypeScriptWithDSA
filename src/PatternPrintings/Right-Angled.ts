interface printRightAnglePatternProps {
  rows: number;
  columns?: number;
  type: "Stars" | "Numbers" | "Alphabets" | "Binary";
  angle?: "Right-Angled" | "Right-Angled-Inverted";
}

enum RightAngleType {
  Stars = "Stars",
  Numbers = "Numbers",
  Alphabets = "Alphabets",
  Binary = "Binary",
}

enum Angle {
  RightAngled = "Right-Angled",
  RightAngledInverted = "Right-Angled-Inverted",
}

const printRightAnglePattern = ({
  rows,
  columns = rows,
  type,
  angle = "Right-Angled",
}: printRightAnglePatternProps) => {
  console.log(`Printing ${type} Right Angled Inverted Pattern:\n`);
  switch (angle) {
    case Angle.RightAngled: {
      switch (type) {
        case RightAngleType.Stars: {
          for (let i = 1; i <= rows; i++) {
            console.log("* ".repeat(i));
          }
          console.log();
          break;
        }
        case RightAngleType.Numbers: {
          for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, (_, j) => j + 1).join(" "));
          }
          console.log();
          for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, (_) => i).join(" "));
          }
          console.log();
          let counter = 1;
          for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, () => counter++).join(" "));
          }
          console.log();
          break;
        }
        case RightAngleType.Alphabets: {
          for (let i = 1; i <= rows; i++) {
            console.log(
              Array.from({ length: i }, (_, j) =>
                String.fromCharCode(65 + j)
              ).join(" ")
            );
          }
          console.log();
          for (let i = 1; i <= rows; i++) {
            console.log(
              Array.from({ length: i }, (_) =>
                String.fromCharCode(65 + (i - 1))
              ).join(" ")
            );
          }
          console.log();
          for (let i = 1; i <= rows; i++) {
            console.log(
              Array.from({ length: i  }, (_, j) =>
                String.fromCharCode(65 + (rows - i) + j)
              ).join(" ")
            );
          }
          console.log();
          break;
        }
        case RightAngleType.Binary: {
          for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, (_, j) => j % 2).join(" "));
          }
          console.log();
          for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, (_) => i % 2).join(" "));
          }
          console.log();
          for (let i = 1; i <= rows; i++) {
            console.log(
              Array.from({ length: i }, (_, j) => (i + j) % 2).join(" ")
            );
          }
          console.log();
          break;
        }
        default:
          console.log("Invalid RightAngleType");
      }
      break;
    }

    case Angle.RightAngledInverted: {
      switch (type) {
        case RightAngleType.Stars: {
          for (let i = rows; i >= 1; i--) {
            console.log("* ".repeat(i));
          }
          console.log();
          break;
        }
        case RightAngleType.Numbers: {
          for (let i = rows; i >= 1; i--) {
            console.log(Array.from({ length: i }, (_, j) => j + 1).join(" "));
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(Array.from({ length: i }, (_) => i).join(" "));
          }
          console.log();
          let counter = (rows * (rows + 1)) / 2;
          for (let i = rows; i >= 1; i--) {
            console.log(Array.from({ length: i }, () => counter--).join(" "));
          }
          console.log();
          break;
        }
        case RightAngleType.Alphabets: {
          for (let i = rows; i >= 1; i--) {
            console.log(
              Array.from({ length: i }, (_, j) =>
                String.fromCharCode(65 + j)
              ).join(" ")
            );
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(
              Array.from({ length: i }, (_) =>
                String.fromCharCode(65 + (i - 1))
              ).join(" ")
            );
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(
              Array.from({ length: i }, (_, j) =>
                String.fromCharCode(65 + (i - 1))
              ).join(" ")
            );
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(
              Array.from({ length: i  }, (_, j) =>
                String.fromCharCode(65 + (rows - i) + j)
              ).join(" ")
            );
          }
          console.log();
          break;
        }
        case RightAngleType.Binary: {
          for (let i = rows; i >= 1; i--) {
            console.log(Array.from({ length: i }, (_, j) => j % 2).join(" "));
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(Array.from({ length: i }, (_) => i % 2).join(" "));
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(
              Array.from({ length: i }, (_, j) => (i + j) % 2).join(" ")
            );
          }
          console.log();
          break;
        }
        default:
          console.log("Invalid RightAngleType");
      }
      break;
    }

    default:
      console.log("Invalid Angle");
  }
};

// printRightAnglePattern({ rows: 5, type: "Stars", angle: "Right-Angled" });
// printRightAnglePattern({ rows: 5, type: "Stars", angle: "Right-Angled-Inverted" });
printRightAnglePattern({ rows: 5, type: "Numbers", angle: "Right-Angled" });
printRightAnglePattern({ rows: 5, type: "Numbers", angle: "Right-Angled-Inverted" });
// printRightAnglePattern({ rows: 5, type: "Alphabets", angle: "Right-Angled" });
// printRightAnglePattern({ rows: 5, type: "Alphabets", angle: "Right-Angled-Inverted" });
// printRightAnglePattern({ rows: 5, type: "Binary", angle: "Right-Angled" });
// printRightAnglePattern({ rows: 5, type: "Binary", angle: "Right-Angled-Inverted" });
