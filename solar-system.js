document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector("body");
  const universe = document.getElementById("universe");
  const solarsys = document.getElementById("solar-system");

  const setView = function (view) {
    universe.className = "";
    universe.classList.add(view);
  };

  document.getElementById("toggle-data").addEventListener("click", function (e) {
    body.classList.toggle("data-open");
    body.classList.toggle("data-close");
    e.preventDefault();
  });

  document.getElementById("toggle-controls").addEventListener("click", function (e) {
    body.classList.toggle("controls-open");
    body.classList.toggle("controls-close");
    e.preventDefault();
  });

  const dataLinks = document.querySelectorAll("#data a");
  dataLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
    
      let ref = link.getAttribute("class");
      solarsys.className = "";
      solarsys.classList.add(ref);
      
      let parentLinks = link.parentNode.querySelectorAll('a');
      parentLinks.forEach(function(parentLink) {
        parentLink.classList.remove('active');
      });
      
      link.classList.add('active');
    });
  });

  document.querySelector(".set-view").addEventListener("click", function () {
    body.classList.toggle("view-3D");
    body.classList.toggle("view-2D");
  });

  document.querySelector(".set-zoom").addEventListener("click", function () {
    body.classList.toggle("zoom-large");
    body.classList.toggle("zoom-close");
  });

  document.querySelector(".set-speed").addEventListener("click", function () {
    setView("scale-stretched set-speed");
  });

  document.querySelector(".set-size").addEventListener("click", function () {
    setView("scale-s set-size");
  });

  document.querySelector(".set-distance").addEventListener("click", function () {
    setView("scale-d set-distance");
  });

  body.classList.remove('view-2D', 'opening');
  body.classList.add("view-3D");
  setTimeout(function () {
    body.classList.remove('hide-UI');
    body.classList.add("set-speed");
  }, 2000);
});
