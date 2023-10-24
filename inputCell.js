var inputCells = document.querySelectorAll(".inputCell");
for (const inputCell of inputCells) {
  const buttons = inputCell.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("click", function(){
      button.disabled=true;

      for (const otherButton of buttons) {
        if (otherButton != button){
          otherButton.disabled=false;
        }
      }
    });
  }
}
