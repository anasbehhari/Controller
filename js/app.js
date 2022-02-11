//CAMERA SELECTORS and FUNCTION

const CameraKeys = document.querySelectorAll(".Camera-contoller .key");

const SetCamera = (direction) => {
  switch (direction) {
    case "LEFT":
      alert("LEFT CAMERA");
      break;

    case "RIGHT":
      alert("RIGHT CAMERA");
      break;
    case "UP":
      alert("UP CAMERA");
      break;
    case "DOWN":
      alert("DOWN CAMERA");
      break;
    default:
      alert("please SET DIRECTION (RIGHT,LEFT,DOWN,UP)");
      break;
  }
};

const MachineKeys = document.querySelectorAll(".Machine-contoller .key");

const SetMachine = (direction) => {
  switch (direction) {
    case "LEFT":
      alert("LEFT MACHINE");
      break;

    case "RIGHT":
      alert("RIGHT MACHINE");
      break;
    case "UP":
      alert("UP MACHINE");
      break;
    case "DOWN":
      alert("DOWN MACHINE");
      break;
    default:
      alert("please SET DIRECTION (RIGHT,LEFT,DOWN,UP)");
      break;
  }
};
// onclick

CameraKeys.forEach((key) => {
  key.onclick = () => {
    if (key.classList.contains("Left")) {
      SetCamera("LEFT");
    } else if (key.classList.contains("Right")) {
      SetCamera("RIGHT");
    } else if (key.classList.contains("Top")) {
      SetCamera("UP");
    } else {
      SetCamera("DOWN");
    }
  };
});

MachineKeys.forEach((key) => {
  key.onclick = () => {
    if (key.classList.contains("left")) {
      SetMachine("LEFT");
    } else if (key.classList.contains("right")) {
      SetMachine("RIGHT");
    } else if (key.classList.contains("top")) {
      SetMachine("UP");
    } else {
      SetMachine("DOWN");
    }
  };
});

// Keyboard
window.onkeyup = (e) => {
  //Machine keys

  //LEFT <-
  if (e.keyCode === 37) {
    SetMachine("LEFT");
  }
  //RIGHT ->
  if (e.keyCode === 39) {
    SetMachine("RIGHT");
  }
  //UP
  if (e.keyCode === 38) {
    SetMachine("UP");
  }
  //DOWN
  if (e.keyCode === 40) {
    SetMachine("DOWN");
  }
  //MACHINE FINISH.

  /* ************************************************ */


  //CAMERA keys

  if (e.keyCode === 76) {
    SetCamera("LEFT");
  }
  //RIGHT ->
  if (e.keyCode === 82) {
    SetCamera("RIGHT");
  }
  //UP
  if (e.keyCode === 85) {
    SetCamera("UP");
  }
  //DOWN
  if (e.keyCode === 68) {
    SetCamera("DOWN");
  }

  
};
