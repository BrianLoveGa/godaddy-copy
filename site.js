console.log("test");





//////  2   business card - links to myspace - careerbuilder - aim - geocities - fax # 

///// coming soon


document
  .getElementById("themeSwitch")
  .addEventListener("change", function(event) {
    event.target.checked
      ? document.body.setAttribute("data-theme", "light")
      : document.body.removeAttribute("data-theme");
  });