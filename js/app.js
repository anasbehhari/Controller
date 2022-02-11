const CameraKeys = document.querySelectorAll(".Camera-contoller .key");
const MachineKeys = document.querySelectorAll(".Machine-contoller .key");

// onclick

CameraKeys.forEach((key) => {
  key.onclick = () => {
    if (key.classList.contains("Left")) {
      console.log("left camera");
    } else if (key.classList.contains("Right")) {
      console.log("right camera");
    } else if (key.classList.contains("Top")) {
      console.log("top camera");
    } else {
      console.log("bottom camera");
    }
  };
});

MachineKeys.forEach((key) => {
    key.onclick = () => {
      if (key.classList.contains("left")) {
        console.log("left machine");
      } else if (key.classList.contains("right")) {
        console.log("right machine");
      } else if (key.classList.contains("top")) {
        console.log("top machine");
      } else {
        console.log("bottom machine");
      }
    };
  });


