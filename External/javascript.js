function Print(){
	window.print();
}
function Report(){
	alert("Really? You have nothing else better to do than report this website? Quit being a whiny little bitch and go do something productive...");
}
function myMap() {
  var myCenter = new google.maps.LatLng(34.5802827,-118.0753823);
  var mapCanvas = document.getElementById("googlemap");
  var mapOptions = {center: myCenter, zoom: 18, mapTypeId: google.maps.MapTypeId.SATELLITE};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
function contact(){
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var question = document.getElementById('question').checked;
	var comment = document.getElementById('comment').checked;
	var contacttxtarea = document.getElementById('contacttxtarea').value;

	if(firstname=="" || lastname=="" || phone=="" || email=="" || contacttxtarea==""){
		alert('Please fill in all fields');
		return false;
	}else if(question==false && comment==false){
		alert('Please fill in all fields');
		return false;
	}else{
		return true;
	}
}