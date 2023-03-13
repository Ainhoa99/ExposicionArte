function reproducir(e) {
  // var element = document.getElementById("audios");
  // while (element.firstChild) {
  //   element.removeChild(element.firstChild);
  // };
  var sound = document.createElement('audio');
  sound.id = 'audio-player';
  sound.controls = 'controls';
  sound.src = 'audio/' + e + '.mp3';
  sound.type = 'audio/mpeg';
  var br = document.createElement('br');
  document.getElementById(e).appendChild(br);
  document.getElementById(e).appendChild(sound);
  sound.play();
}