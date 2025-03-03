interface printPatternProps {
  rows: number;
  columns?: number;
  type: "Stars" | "Numbers" | "Alphabets" | "Binary";
  angle?: "Right-Angled" | "Right-Angled-Inverted";
}

enum Type {
  Stars = "Stars",
  Numbers = "Numbers",
  Alphabets = "Alphabets",
  Binary = "Binary",
}

enum Angle {
  RightAngled = "Right-Angled",
  RightAngledInverted = "Right-Angled-Inverted",
}

const printPattern = ({
  rows,
  columns = rows,
  type,
  angle = "Right-Angled",
}: printPatternProps) => {
  switch (angle) {
    case Angle.RightAngled: {
      console.log(`Printing ${type} Right Angled Pattern: \n`);
      switch (type) {
        case Type.Stars: {
          for (let i = 1; i <= rows; i++) {
            console.log("* ".repeat(i));
          }
          console.log();
          break;
        }
        case Type.Numbers: {
          for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, (_, j) => j + 1).join(" "));
          }
          console.log();
          for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, (_) => i).join(" "));
          }
          console.log();
          break;
        }
        case Type.Alphabets: {
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
          break;
        }
        case Type.Binary: {
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
          console.log("Invalid Type");
      }
      break;
    }

    case Angle.RightAngledInverted: {
      console.log(`Printing ${type} Right Angled Inverted Pattern:\n`);
      switch (type) {
        case Type.Stars: {
          for (let i = rows; i >= 1; i--) {
            console.log("* ".repeat(i));
          }
          console.log();
          break;
        }
        case Type.Numbers: {
          for (let i = rows; i >= 1; i--) {
            console.log(Array.from({ length: i }, (_, j) => j + 1).join(" "));
          }
          console.log();
          for (let i = rows; i >= 1; i--) {
            console.log(Array.from({ length: i }, (_) => i).join(" "));
          }
          console.log();
          break;
        }
        case Type.Alphabets: {
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
          break;
        }
        case Type.Binary: {
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
          console.log("Invalid Type");
      }
      break;
    }

    default:
      console.log("Invalid Angle");
  }
};

printPattern({ rows: 5, type: "Stars", angle: "Right-Angled" });
printPattern({ rows: 5, type: "Stars", angle: "Right-Angled-Inverted" });
printPattern({ rows: 5, type: "Numbers", angle: "Right-Angled" });
printPattern({ rows: 5, type: "Numbers", angle: "Right-Angled-Inverted" });
printPattern({ rows: 5, type: "Alphabets", angle: "Right-Angled" });
printPattern({ rows: 5, type: "Alphabets", angle: "Right-Angled-Inverted" });
printPattern({ rows: 5, type: "Binary", angle: "Right-Angled" });
printPattern({ rows: 5, type: "Binary", angle: "Right-Angled-Inverted" });
