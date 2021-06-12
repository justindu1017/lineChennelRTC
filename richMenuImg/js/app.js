const DomToImage = require("dom-to-image");
const $ = require("jquery");

// node = $("#ddive");
node = document.getElementById("ddive");

console.log(DomToImage);

DomToImage.toPng(node)
  .then((dataURL) => {
    let a = document.createElement("a");
    // console.log(URL.createObjectURL(dataURL));
    a.href = dataURL;
    a.textContent = "下載";
    a.download = "img";
    document.body.appendChild(a);
  })
  .catch((err) => {
    console.log("have err!!!");
    console.log(err);
  });
