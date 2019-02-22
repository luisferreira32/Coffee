var text = "";
setInterval(makeid, 3000);

function check_token()
{
	var token = document.forms["coffee_form"]["token"].value;
	if(token == "")
	{
		document.getElementById("error_span").innerHTML = '<div class="error"> Insert a token... </div>';
		return false;
	}
	else if(token != text)
	{
		document.getElementById("error_span").innerHTML = '<div class="error"> Invalid token </div>';
		return false;
	}
	else
	{
		return true;
	}
}

function check_submit(e)
{
   if(e && e.keyCode == 13)
   {
   		return true;
   }
}

function makeid()
{
	text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 5; i++)
	{
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	document.getElementById("redeem_token").innerHTML = text;
}