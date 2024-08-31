/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));
    var urlPrefix = "tiles";

// Create source.
 var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + "0-studio-1_4---panorama" + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" +"0-studio-1_4---panorama" + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(   [{
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
        }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(4096, 100*Math.PI/180);
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
  { perspective: { radius: 1640, extraTransforms: "rotateX(5deg)" }});
container.createHotspot(document.getElementById('iframeselect'), { yaw: -0.35, pitch: -0.239 });

// HTML sources.
var hotspotHtml = {
  youtube: '<iframe id="youtube" width="990" height="350" src="https://www.youtube.com/embed/N9KXh34IT94?si=WWoWSqhutuy3bE1P;" frameborder="0"></iframe>',
  youtubeWithControls: '<iframe id="youtubeWithControls" width="990" height="350" src="https://www.youtube.com/embed/tY8aNLzUUJw?si=hLk8wwhSuesDOU8g" frameborder="0" allowfullscreen></iframe>',
};

function switchHotspot(id) {
  var wrapper = document.getElementById('iframespot');

  wrapper.classList.add('fade-out');

  setTimeout(function() {
    wrapper.innerHTML = hotspotHtml[id];

    wrapper.classList.remove('fade-out');
  }, 1000); 
}

function startCarousel() {
  var ids = Object.keys(hotspotHtml);
  var index = 0;

  setInterval(function() {
    switchHotspot(ids[index]);
    index = (index + 1) % ids.length;
  }, 3000); 
}

window.onload = function() {
  startCarousel();
};
var switchElements = document.querySelectorAll('[data-source]');
for (var i = 0; i < switchElements.length; i++) {
  var element = switchElements[i];
  addClickEvent(element);
}

function addClickEvent(element) {
  element.addEventListener('click', function() {
    switchHotspot(element.getAttribute('data-source'));
  });
}
