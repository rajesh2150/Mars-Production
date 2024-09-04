"use strict";

// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById("pano"));
var urlPrefix = "tiles";

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  urlPrefix + "/" + "0-studio-1_4---panorama" + "/{z}/{f}/{y}/{x}.jpg",
  {
    cubeMapPreviewUrl:
      urlPrefix + "/" + "0-studio-1_4---panorama" + "/preview.jpg",
  }
);
var geometry = new Marzipano.CubeGeometry([
  {
    tileSize: 256,
    size: 256,
    fallbackOnly: true,
  },
  {
    tileSize: 512,
    size: 512,
  },
  {
    tileSize: 512,
    size: 1024,
  },
  {
    tileSize: 512,
    size: 2048,
  },
]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(
  4096,
  (100 * Math.PI) / 180
);
var view = new Marzipano.RectilinearView(null, limiter);

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true,
});
scene.switchTo();

// Get the hotspot container for scene.
var container = scene.hotspotContainer();

// Create hotspot with different sources.
container.createHotspot(
  document.getElementById("iframespot"),
  { yaw: 0.0035, pitch: -0.04 },
  { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" } }
);
container.createHotspot(document.getElementById("iframeselect"), {
  yaw: -0.35,
  pitch: -0.239,
});

// HTML sources.
var hotspotHtml = {
  video1:
    '<video width="990" height="350" controls><source src="http://13.201.135.134:1337/uploads/bandtu_thata_song_6013d95176.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  video2:
    '<video width="990" height="350" controls><source src="http://13.201.135.134:1337/uploads/power_song_1d6a8e8e5c.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  video3:
    '<video width="990" height="350" controls><source src="http://13.201.135.134:1337/uploads/romance_song_13cebca37a.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  video4:
    '<video width="990" height="350" controls><source src="http://13.201.135.134:1337/uploads/sad_song_f4086f7457.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  video5:
    '<video width="990" height="350" controls><source src="../src/assets/Video/love song.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  video6:
    '<video width="990" height="350" controls><source src="../src/assets/Video/bantu thata song.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
};

var player; // YouTube player instance
var currentIndex = 0; // Keep track of the current iframe

function onYouTubeIframeAPIReady() {
  // This function will be called automatically by the YouTube API
}

function switchHotspot(index) {
  var ids = Object.keys(hotspotHtml);
  var id = ids[index];
  var wrapper = document.getElementById("iframespot");

  wrapper.classList.add("fade-out");

  setTimeout(function () {
    wrapper.innerHTML = hotspotHtml[id];
    wrapper.classList.remove("fade-out");

    // Initialize YouTube player after inserting the iframe
    player = new YT.Player(id, {
      events: {
        onStateChange: onPlayerStateChange,
        onReady: onPlayerReady,
      },
    });
  }, 1000); // Reduce the delay to 1 second
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    console.log("Video is playing");
  } else if (event.data === YT.PlayerState.PAUSED) {
    console.log("Video is paused");
  } else if (event.data === YT.PlayerState.ENDED) {
    console.log("Video ended");
  }
}

function showPrevious() {
  currentIndex =
    (currentIndex - 1 + Object.keys(hotspotHtml).length) %
    Object.keys(hotspotHtml).length;
  switchHotspot(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % Object.keys(hotspotHtml).length;
  switchHotspot(currentIndex);
}

window.onload = function () {
  switchHotspot(currentIndex);
};

// Event listeners for the 'Previous' and 'Next' buttons
document.getElementById("prevButton").addEventListener("click", showPrevious);
document.getElementById("nextButton").addEventListener("click", showNext);
