const CameraKeys = document.querySelectorAll(".Camera-contoller .key");
const MachineKeys = document.querySelectorAll(".Machine-contoller .key");

// onclick

CameraKeys.forEach((key) => {
  key.onclick = () => {
    if (key.classList.contains("Left")) {
      alert("left camera");
    } else if (key.classList.contains("Right")) {
      alert("right camera");
    } else if (key.classList.contains("Top")) {
      alert("top camera");
    } else {
      alert("bottom camera");
    }
  };
});

MachineKeys.forEach((key) => {
    key.onclick = () => {
      if (key.classList.contains("left")) {
        alert("left machine");
      } else if (key.classList.contains("right")) {
        alert("right machine");
      } else if (key.classList.contains("top")) {
        alert("top machine");
      } else {
        alert("bottom machine");
      }
    };
  });


