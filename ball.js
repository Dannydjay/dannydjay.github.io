
document.getElementById("id_business_level").innerHTML = "Business version = 2018.03.23.1";


setInterval(deseneaza, 30);

function deseneaza()
{
var t = document.getElementById("id_transform");
t.setAttribute("translation", "0 " + y + " 0");
y+=directie;
if (y> 10)
	directie = -1;
else
	if (y < 0)
		directie = 1;

}
