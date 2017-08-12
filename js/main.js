//ABOUT OVERLAY
const about = document.querySelector('.about')
const overlay = document.querySelector('.overlay')
const modalBox = document.querySelector('.modalbox')
const aboutClose = document.querySelector('.menuclose')

about.addEventListener('click', function(){
	if (overlay.classList.contains('is-open')){
		overlay.classList.remove('is-open')
	} else {
		overlay.classList.add('is-open')
	}

	if (modalBox.classList.contains('is-open')){
		modalBox.classList.remove('is-open')
	} else {
		modalBox.classList.add('is-open')
	}

	event.stopPropagation()
})

aboutClose.addEventListener('click', function(){
	if (overlay.classList.contains('is-open')){
		overlay.classList.remove('is-open')
	}

	if (modalBox.classList.contains('is-open')){
		modalBox.classList.remove('is-open')
	}

	event.stopPropagation()
})

document.body.addEventListener('click', function(){
	event.stopPropagation()
	console.log('click')
})



//MOBILE KEYBOARD
const keyboardMobile = document.querySelector('.keyboard-mobile')

keyboardMobile.addEventListener('mousedown', function (e){
	 //to extract the content of the HTML tag
	 playAudio(e.target.innerHTML)
	 showCharacter(e.target.innerHTML)

	 event.stopPropagation()
	})

keyboardMobile.addEventListener('mouseup', function (e){
	showCharacter(e.target.innerHTML)
})

function playAudio(num){
	document.getElementById("audio" + num).currentTime = 0
	document.getElementById("audio" + num).play()
}

function showCharacter(num){
	const getCharacter = document.getElementById("image" + num);

	getCharacter.classList.toggle('hidden')
}


//MEDIUM KEYBOARD
const keyboardMedium = document.querySelector('.shortsounds')
const keyboardRhythm = document.querySelector('.rhythm')

keyboardMedium.addEventListener('mousedown', function (e){
	playAudio(e.target.innerHTML)
	showCharacter(e.target.innerHTML)

	event.stopPropagation()
})

keyboardMedium.addEventListener('mouseup', function (e){
	showCharacter(e.target.innerHTML)
})

keyboardRhythm.addEventListener('mousedown', function (e){
	playRhythm(e.target.innerHTML)
})

function playRhythm(num){
	//document.getElementById("baseaudio_" + string).currentTime = 0


	const baseAudio = document.getElementById("baseaudio_" + num)

	if (baseAudio.currentTime !== 0) {
		console.log('playing, will pause!')
		baseAudio.pause()
		baseAudio.currentTime = 0
	} else {
		baseAudio.loop = true
		baseAudio.play()
	}



	// if (typeof baseAudio.loop == 'boolean')
	// {
	// 	baseAudio.loop = true;
	// }
	// else
	// {
	// 	baseAudio.addEventListener('ended', function() {
	// 		this.currentTime = 0;
	// 		this.play();
	// 	}, false);
	// }

	// baseAudio.play()
}

//DESKTOP KEYBOARD
