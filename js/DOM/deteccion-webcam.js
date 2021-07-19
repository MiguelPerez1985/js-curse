const d = document,
  n = navigator;

export default function detectionWebCam(videoElement) {
  if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    console.log("Let's get this party started");
  } else {
    console.log("NAAAAAAAAAAAA");
  }

  n.mediaDevices.getUserMedia({audio: false, video: { width: 1280, height: 720 } }).then(exitoCallback, falloCallback);

  function exitoCallback(localMediaStream) {
    console.log(localMediaStream);
    const $camera = d.querySelector(videoElement);
    console.log($camera);
    $camera.srcObject = localMediaStream;
    //$camera.src = localMediaStream;
    
    $camera.onloadedmetadata = function(e) {
        console.log("a");
        $camera.play();
      };
  }
  function falloCallback(err) {
    console.log("Ocurrió el siguiente error: " + err);
  }
}
