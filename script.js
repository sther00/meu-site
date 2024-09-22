document.getElementById("scareButton").addEventListener("click", function() {
    document.getElementById("videoModal").style.display = "block";
    document.getElementById("jumpscareVideo").play();
  });
  
  document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("jumpscareVideo").pause();
  });
  