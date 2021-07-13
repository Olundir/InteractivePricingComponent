const slider = document.querySelector("#rangeViews");

slider.addEventListener("change", () => {
  console.log("clicked");
  console.log(slider.value);
});
