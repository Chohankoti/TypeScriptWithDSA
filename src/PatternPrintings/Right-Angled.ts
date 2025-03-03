interface printPatternProps {
  rows: number;
  columns?: number;
  type: "Stars" | "Numbers" | "Alphabets";
  angle?: "Right-Angled" | "Right-Angled-Inverted";
}
enum Type {
  Stars = "Stars",
  Numbers = "Numbers",
  Alphabets = "Alphabets",
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
  switch (type) {
    case Type.Stars: {
      switch (angle) {
        case Angle.RightAngled: {
          for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= i; j++) {
              process.stdout.write("* ");
            }
            console.log();
          }
          console.log();
          break;
        }
        case Angle.RightAngledInverted: {
          for (let i = rows; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
              process.stdout.write("* ");
            }
            console.log();
          }
          console.log();
          break;
        }
      }
      break;
    }
    default: {
      console.log("Invalid Type");
    }
  }
};


printPattern({ rows: 5, type: "Stars", angle: "Right-Angled" });
printPattern({ rows: 5, type: "Stars", angle: "Right-Angled-Inverted" });