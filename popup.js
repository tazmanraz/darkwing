
if (document.querySelector(".popup")) {
  const darkSwitch = document.querySelector(".dark-switch");
  let toggleOn = false;
  function invert() {
      alert("hi")
      document.body.style.filter = "invert(1) hue-rotate(180deg)";
      let media = document.querySelectorAll("img, picture, video");
      media.forEach((mediaItem) => {
          mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
      })
  }
  darkSwitch.addEventListener("click", () => {
      if (!toggleOn) {
          toggleOn = true;
          chrome.tabs.executeScript({
              file: 'darkOn.js'
          })
      }
      else {
          toggleOn = false;
          chrome.tabs.executeScript({
              file: 'darkOff.js'
          })
      }
  })

}