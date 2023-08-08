//https://alexwohlbruck.github.io/cat-facts/docs/
function changeCatFact(){
	fetch('https://cat-fact.herokuapp.com/facts')
		.then((response)=>{
			// console.log(response);
		return response.json();
	}).then((jsonData)=>{
		console.log(jsonData);

		let catDiv=document.getElementById('page');
		let catFact=document.getElementById('Cat-Fact');
		let fact=jsonData[Math.floor(Math.random()*jsonData.length)].text;
		catFact.innerHTML=fact;

	});
}
let catFactBTN=document.getElementById('catFactsBTN');
catFactBTN.onclick=()=>{
	event.preventDefault();
	changeCatFact();
}

//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
function changeCatImg(){
fetch('https://api.thecatapi.com/v1/images/search')
	.then((imageCat)=>{
		return imageCat.json();
	}).then((catimg)=>{
		console.log(catimg);

	let catImg=document.getElementById('cat-photo');
	// console.dir(catImg);
	catImg.src=catimg[0].url;
	// catImg.style.width='700px';
	// catImg.style.height='500px';
	})
}
let catPhotoBTN=document.getElementById('catPictureBTN');
catPhotoBTN.onclick=()=>{
event.preventDefault();
changeCatImg();
}