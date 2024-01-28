AFRAME.registerComponent("player-movement", {
  init: function () {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowDown"
      ) {
   //add the sound for movement
        this.playSound
      }
    });
  },
  playSound: function(){
    entity = document.querySelector("#footstepSound");
    entity.components.sound.playSound();
  }
});

