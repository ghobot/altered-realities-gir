var startExperienteBtn = document.getElementById('start_experience');

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
    }
};