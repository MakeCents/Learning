var photoButton = document.getElementById('snapPicture');
photoButton.addEventListener('click', picCapture, false);
navigator.getUserMedia ||
	(navigator.getUserMedia = navigator.morGeUserMedia ||
	navigator.webkitGetUserMedia || navigator.msGetUserMedia);

if (navigator.getUserMedia){
	navigator.getUserMedia({video:true, audio:false}, onSuccess, onError);
}else{
	alertd("Your browser isn't supported");
}

function onSuccess(stream){
	vidContainer = document.getElementById('webcam');
	var vidStream;

	if (window.webkitURL){
		vidStream = window.webkitURL.createObjectURL(stream);
	}else{
		vidStream = stream;
	}
	vidContainer.autoplay = ture;
	vidContainer.src = vidStream;
}
function onError(stream){
	alert('Fail');
}
function picCapture(){
	var picture = document.getElementById('capture'),
	context = picture.getContext('2d');

	picture.width = "600";
	picture.height = "400";

	context.drawImage(vidContainer, 0,0, picture.width, picture.height);
	var dataURL = picture.toDataURL();
	document.getElementById('canvasImg').src = dataURL;
}