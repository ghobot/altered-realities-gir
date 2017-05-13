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

        const camHeight = 1.600;
        var slidePositions = [
            {x:  0.000 , y: camHeight, z: 0.000}, // origin
            {x: -4.600 , y: camHeight, z: 0.264}, // busts
            {x: -5.536 , y: camHeight, z: 0}, // slideshow
            {x: -0.900 , y: camHeight, z: 3.931}, // 360 photo
            {x: -0.900 , y: camHeight, z: 6.970}, // 360 video
            {x:  0.500 , y: camHeight, z: 7.947}, // livers
            {x:  0.000 , y: camHeight, z: 11.600}, // Tilt Brush             
        ]; 

        var slideRotations = [
            {x:0 , y: 90 , z:0}, 
            {x:0 , y:0 , z:0}, 
            {x:0 , y:90 , z:0}, 
            {x:0 , y:90 , z:0},
            {x:0 , y:90 , z:0},
            {x:0 , y:-90 , z:0},
            {x:0 , y:180 , z:0},            
        ]

        console.log("slidedeck started");

        var spotNum = slidePositions.length;

        buttonElNext.onclick = function () {
        	
            if (currentLoc > spotNum-1) {
                currentLoc = -1;
            }

            currentLoc++;
            document.querySelector('a-camera').setAttribute('position' , slidePositions[currentLoc]);
            document.querySelector('a-camera').setAttribute('rotation' , slideRotations[currentLoc]);
            

           console.log("currentloc = " + currentLoc);
        	
        };
        buttonElPrevious.onclick = function () {
            
            currentLoc--;            
            document.querySelector('a-camera').setAttribute('position' , slidePositions[currentLoc]);
            document.querySelector('a-camera').setAttribute('rotation' , slideRotations[currentLoc]);
            

            if (currentLoc < 0) {
                currentLoc = spotNum-1;
                document.querySelector('a-camera').setAttribute('position' , slidePositions[currentLoc]);
                document.querySelector('a-camera').setAttribute('rotation' , slideRotations[currentLoc]);
            }
            console.log("currentloc = " + currentLoc);
            
        };

    }
};