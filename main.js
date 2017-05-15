var startExperienteBtn = document.getElementById('start_experience');
var currentLoc = 0;

startExperienteBtn.onclick = function () {
    document.getElementById('container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = '1';

    /* add camera to to desktop scene*/
    if ( !AFRAME.utils.checkHeadsetConnected() ) {

        var camera_div = document.getElementById('desktop_camera');
        var camera = document.createElement('a-entity');

        var cameraHTML  = '<a-camera look-controls wasd-controls rotation="0 90 0">';
            cameraHTML += '<a-entity position="0 0 -3" geometry="primitive: ring; radiusOuter: 0.10;radiusInner: 0.05;"material="color: cyan; shader: flat"cursor="maxDistance: 10; fuse: false"></a-entity>';
            cameraHTML += '</a-camera>';        
        
        camera.innerHTML = cameraHTML;
        camera_div.appendChild( camera );
    }

     /* Add slidedeck controls if on desktop*/
    if ( !AFRAME.utils.checkHeadsetConnected() ) {
        var buttonElPrevious = document.createElement('button'), buttonElNext = document.createElement('button'), slideStatus = document.createElement("span");;
        buttonElPrevious.className += "slideButton";
        buttonElNext.className += "slideButton";
        buttonElPrevious.innerHTML = "Previous";
        buttonElNext.innerHTML = "Next";
        slideStatus.className += "slideStatus";
             
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
        ], slideRotations = [
            {x:0 , y: 90 , z:0}, 
            {x:0 , y:0 , z:0}, 
            {x:0 , y:90 , z:0}, 
            {x:0 , y:90 , z:0},
            {x:0 , y:90 , z:0},
            {x:0 , y:-90 , z:0},
            {x:0 , y:180 , z:0},            
        ]

        
        var spotNum = slidePositions.length;
        var updateStatus = function() {
            slideStatus.innerHTML = currentLoc+1 + " / " + spotNum
        };

        var next = function() {
             if ( currentLoc < spotNum-1 ) { currentLoc++; }
             updateStatus();
        }

        var previous = function() {
             if ( currentLoc ) { currentLoc--; }
             updateStatus();
        }

        updateStatus();
        document.body.appendChild(slideStatus);
        
        buttonElNext.onclick = function () {        	
            next();
            document.querySelector('a-camera').setAttribute('position' , slidePositions[currentLoc]);
            document.querySelector('a-camera').setAttribute('rotation' , slideRotations[currentLoc]);            
            console.log("currentloc = " + currentLoc);        	
        };
        
        buttonElPrevious.onclick = function () {         
            previous();
            document.querySelector('a-camera').setAttribute('position' , slidePositions[currentLoc]);
            document.querySelector('a-camera').setAttribute('rotation' , slideRotations[currentLoc]);
            console.log("currentloc = " + currentLoc);            
        };
    }
};