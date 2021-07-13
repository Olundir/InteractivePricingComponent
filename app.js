const slider = document.querySelector("#rangeViews");
const pageViews = document.querySelector("#viewsN");
const amount = document.querySelector("#amount");

slider.addEventListener("input", () => {
  switch (slider.value) {
    case "0":
      pageViews.innerText = "10K";
      amount.innerText = "$4.00";
      break;
    case "1":
      pageViews.innerText = "25K";
      amount.innerText = "$8.00";
      break;
    case "2":
      pageViews.innerText = "100K";
      amount.innerText = "$16.00";
      break;
    case "3":
      pageViews.innerText = "500K";
      amount.innerText = "$24.00";
      break;
    case "4":
      pageViews.innerText = "1M";
      amount.innerText = "$36.00";
      break;
  }
});
