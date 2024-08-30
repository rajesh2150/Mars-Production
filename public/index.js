'use strict';

// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));
var urlPrefix = "tiles";

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  urlPrefix + "/" + "0-studio-1_4---panorama" + "/{z}/{f}/{y}/{x}.jpg",
  { cubeMapPreviewUrl: urlPrefix + "/" + "0-studio-1_4---panorama" + "/preview.jpg" });
var geometry = new Marzipano.CubeGeometry([
  {
    "tileSize": 256,
    "size": 256,
    "fallbackOnly": true
  },
  {
    "tileSize": 512,
    "size": 512
  },
  {
    "tileSize": 512,
    "size": 1024
  },
  {
    "tileSize": 512,
    "size": 2048
  }
]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100 * Math.PI / 180);
var view = new Marzipano.RectilinearView(null, limiter);

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});
scene.switchTo();

// Get the hotspot container for scene.
var container = scene.hotspotContainer();

// Create hotspot with different sources.
container.createHotspot(document.getElementById('iframespot'), { yaw: 0.0035, pitch: -0.04 },
  { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" } });
container.createHotspot(document.getElementById('iframeselect'), { yaw: -0.35, pitch: -0.239 });

// HTML sources.
var hotspotHtml = {
  youtube: '<iframe id="youtube" width="990" height="350" src="https://www.youtube.com/embed/N9KXh34IT94?enablejsapi=1" frameborder="0" allowfullscreen></iframe>',
  youtubeWithControls: '<iframe id="youtubeWithControls" width="990" height="350" src="https://www.youtube.com/embed/tY8aNLzUUJw?enablejsapi=1" frameborder="0" allowfullscreen></iframe>',
};


var carouselInterval;
var isCarouselRunning = true;
var player; // YouTube player instance

function onYouTubeIframeAPIReady() {
  // This function will be called automatically by the YouTube API
}

function switchHotspot(id) {
  var wrapper = document.getElementById('iframespot');

  wrapper.classList.add('fade-out');

  setTimeout(function () {
    wrapper.innerHTML = hotspotHtml[id];
    wrapper.classList.remove('fade-out');

    // Initialize YouTube player after inserting the iframe
    player = new YT.Player(id, {
      events: {
        'onStateChange': onPlayerStateChange,
        'onReady': onPlayerReady  
      }
    });
  }, 3000);
}

function onPlayerReady(event) {
  event.target.playVideo();  
  // stopCarousel();  
}

function startCarousel() {
  var ids = Object.keys(hotspotHtml);
  var index = 0;

  carouselInterval = setInterval(function () {
    if (isCarouselRunning) {  
      switchHotspot(ids[index]);
      index = (index + 1) % ids.length;
    }
  }, 3000);
}

function stopCarousel() {
  clearInterval(carouselInterval);
  isCarouselRunning = false;
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    console.log('Video is playing');
    stopCarousel();
  } else if (event.data === YT.PlayerState.PAUSED) {
    console.log('Video is paused');
  } else if (event.data === YT.PlayerState.ENDED) {
    console.log('Video ended');
    startCarousel(); 
  }
}

window.onload = function () {
  startCarousel();
};

// In case you have any click event elements, retain this part
var switchElements = document.querySelectorAll('[data-source]');
if (isCarouselRunning) {
  for (var i = 0; i < switchElements.length; i++) {
    var element = switchElements[i];
    addClickEvent(element);
  }
}

function addClickEvent(element) {
  element.addEventListener('click', function () {
    stopCarousel(); // Stop carousel when manual switch happens
    switchHotspot(element.getAttribute('data-source'));
  });
}

