window.addEventListener("deviceorientation", on device_orientation);

function on_device_orientation(e)
{
  document.getElementById("id_orientation").innerHTML = e.alpha + " " + e.beta + " " + e.gamma;










<