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
        //wrapper.appendChild(buttonElPrevious);
        wrapper.appendChild(buttonElNext);

        document.body.appendChild(wrapper);

        var camHeight = 1.600;
        var slidePositions = [

            
            {x: -4.600 , y: camHeight, z: 0.264},
            {x: -5.536 , y: camHeight, z: 0},
            {x: -0.900 , y: camHeight, z: 3.931},
            {x: -0.900 , y: camHeight, z: 6.970},
            
        ]; 

        var slideRotations = [
            {x:-3.209 , y:0 , z:0},
            {x:0 , y:90 , z:0},
            {x:0 , y:90 , z:0},
            {x:0 , y:90 , z:0},
            
        ]

        console.log("slidedeck started");

        var spotNum = slidePositions.length;

        buttonElNext.onclick = function () {
        	
            document.querySelector('a-camera').setAttribute('position' , slidePositions[currentLoc]);
            document.querySelector('a-camera').setAttribute('rotation' , slideRotations[currentLoc]);
            currentLoc++;

            if (currentLoc == spotNum) {
                currentLoc = 0;
            }

            console.log("currentloc = " + currentLoc);
        	
        };
        // buttonElPrevious.onclick = function () {
            
        //     currentLoc--;
        //     document.querySelector('a-camera').setAttribute('position' , slidePositions[currentLoc]);
        //     document.querySelector('a-camera').setAttribute('rotation' , slideRotations[currentLoc]);
            

        //     if (currentLoc < 0) {
        //         currentLoc = 0;
        //     }
        //     console.log("currentloc = " + currentLoc);
            
        // };

    }
};