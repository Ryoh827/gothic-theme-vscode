import { createTheme, createThemesDirectory } from "./build";
import { gothicPallet } from "./themes/gothic/palette";

function main() {
  createThemesDirectory();

  // Create a theme
  createTheme({
    name: "Gothic",
    fileName: "gothic-color-theme",
    author: "ryoh827",
    palette: gothicPallet,
    type: "dark",
  });
}

main();
