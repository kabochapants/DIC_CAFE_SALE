function addLink() {
  const element = document.createElement("a");
  element.setAttribute("href", "https://diveintocode.jp/");
  element.innerText = "DPro";
  const parentElement = document.getElementsByTagName("div")[0];
  parentElement.appendChild(element);
};

window.onload = addLink;

$(document).ready(function() {
  $("#btn").click(function() {
    alert("クリックされました")
  })
});

$(function(){
  $("#btn").on("click", function() {
    $("p").show("500", "linear")
  });
});
