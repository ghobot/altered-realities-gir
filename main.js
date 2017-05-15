var startExperienteBtn = document.getElementById('start_experience');
var currentLoc = 0;

startExperienteBtn.onclick = function () {
    document.getElementById('container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = '1';

    /* add camera to to desktop scene*/
    if ( !AFRAME.utils.device.checkHeadsetConnected() ) {

        var camera_div = document.getElementById('desktop_camera');
        var camera = document.createElement('a-entity');

        var cameraHTML  = '<a-camera look-controls wasd-controls rotation="0 90 0">';
            cameraHTML += '<a-entity position="0 0 -2" material.color="#00FFFF" geometry="primitive: ring; radiusOuter: 0.10; radiusInner: 0.05;" material="color: #00FFFF; shader: flat" cursor raycaster="far: 10; interval: 1000; objects: .scan">';
            cameraHTML += '<a-animation begin="mouseenter" easing="ease-in" attribute="scale" fill="backwards" to="0.1 0.1 0.1" from="1 1 1"></a-animation>';
            cameraHTML += '<a-animation begin="mouseenter" easing="ease-in" attribute="material.color" fill="backwards" from="#00FFFF" to="#FF0000" dur="500"></a-animation>';
            cameraHTML += '</a-entity>';
            cameraHTML += '</a-camera>';        
        
        camera.innerHTML = cameraHTML;
        camera_div.appendChild( camera );
    }

     /* Add slidedeck controls if on desktop*/
    if ( !AFRAME.utils.device.checkHeadsetConnected() ) {
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