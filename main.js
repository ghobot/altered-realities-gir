var startExperienteBtn = document.getElementById('start_experience');
var currentLoc = 0;
//var e=this.el.sceneEl.camera.el; //grab the scenes camera

startExperienteBtn.onclick = function () {
    document.getElementById('container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = '1';

     /* Add slidedeck controls if on desktop*/
    if ( !AFRAME.utils.checkHeadsetConnected() ) {
        var buttonElPrevious = document.createElement('button'), buttonElNext = document.createElement('button');
        var nextText = "Next", previousText = "Previous";
        buttonElPrevious.className += "slideButton";
        buttonElNext.className += "slideButton";
        buttonElPrevious.innerHTML = previousText;
        buttonElNext.innerHTML = nextText;

        var wrapper = document.getElementById("presentation-nav");
        wrapper.appendChild(buttonElPrevious);
        wrapper.appendChild(buttonElNext);

        document.body.appendChild(wrapper);

        const spotHeight = 3;
        const slideSpots = [

            /* South hallway */
            {x: 1, y: spotHeight, z: -4},
            {x: 1, y: spotHeight, z: -6.7},
            {x: 1, y: spotHeight, z: -9.4},
            {x: 1, y: spotHeight, z: -12.1},

            {x: 0, y: spotHeight, z: -13},

            {x: -1, y: spotHeight, z: -4},
            {x: -1, y: spotHeight, z: -6.7},
            {x: -1, y: spotHeight, z: -9.4},
            {x: -1, y: spotHeight, z: -12.1}
        ]; 

        console.log("slidedeck started");

        buttonElNext.onclick = function () {
        	currentLoc++;
        	if (currentLoc > slideSpots.length() ) {
        		currentLoc = 0;
        	}
        	//e.setAttribute("position",slideSpots[currentLoc]);
        	console.log("current location: " + currentLoc);
        };

    }
};