'use strict';

(function(){

var templateCarousel = document.getElementById('newCarousel').innerHTML;
Mustache.parse(templateCarousel);
var listCells = '';
for (var i = 0; i < cellsCarousel.length; i++) {
	console.log(cellsCarousel[i]);
	listCells += Mustache.render(templateCarousel, cellsCarousel[i]);
	var miko;
	miko = cellsCarousel[i].coords;
	console.log(miko);
}

var carousel = document.querySelector('.main-carousel');
carousel.innerHTML += listCells;

window.initMap = function(){
		//var miko;// = {lat: 48.856, lng: 2.344};
		//for (var i = 0; i < cellsCarousel.length; i++) {
			//miko = cellsCarousel[i].coords;
		//};

		var map = new google.maps.Map(document.getElementById('map'), {zoom: 9, center: miko});
		var markerOne = new google.maps.Marker({position: miko, map: map});
		
	};

var flkty = new Flickity( carousel, {
	imagesLoaded: true,
	percentPosition: false,
	pageDots: false,
	cellAlign:'left',
	contain: true,
	hash: true,
	freeScroll: true,
	wrapAround: true,
});
var restartBtn = document.querySelector('.myButton');
restartBtn.addEventListener('click', function(){
	flkty.next(true);
	flkty.select( 0 );
})

var progressBar = document.querySelector('.progress-bar')
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
	

})();

