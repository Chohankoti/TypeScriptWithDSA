import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const srcPath = path.join(__dirname);

// Get all folders inside `src/`
const folders = fs.readdirSync(srcPath).filter((file) =>
  fs.statSync(path.join(srcPath, file)).isDirectory()
);

async function selectFolder() {
  const { selectedFolder } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedFolder",
      message: "Select a folder inside src:",
      choices: folders,
    },
  ]);

  return selectedFolder;
}

async function selectFile(folderName: string) {
  const folderPath = path.join(srcPath, folderName);
  const files = fs.readdirSync(folderPath).filter((file) => file.endsWith(".ts"));

  const { selectedFile } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedFile",
      message: `Select a file inside ${folderName}:`,
      choices: files,
    },
  ]);

  return selectedFile;
}

async function runFile() {
  const folderName = await selectFolder();
  const fileName = await selectFile(folderName);
  const filePath = `./${folderName}/${fileName}`;

  console.log(`\n📂 Running file: ${folderName}/${fileName}\n`);

  await import(filePath);
}

runFile();
