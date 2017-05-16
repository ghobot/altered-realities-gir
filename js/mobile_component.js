AFRAME.registerComponent('mobile', {
    init: function () {

        if( AFRAME.utils.device.isMobile() ){
            /* Add mobile controls */
            var scene = document.querySelector('a-scene');
            var entityEl = document.createElement('a-entity');


            //entityEl.setAttribute('id', 'something');

            entityEl.setAttribute('universal-controls', {
              movementControls: 'checkpoint',
            });

            entityEl.setAttribute('checkpoint-controls', {
              mode: 'animate',
            });


            entityEl.setAttribute('position', {x:0, y: 1.764, z: 0});
            entityEl.setAttribute('camera','camera');


            /* *** */
            var innerEl = document.createElement('a-entity');
            innerEl.setAttribute('cursor', {maxDistance: 30});
            innerEl.setAttribute('position', {x:0, y: 0, z: -1});

            innerEl.setAttribute('geometry', {
                primitive: 'ring',
                radiusInner: 0.02,
                radiusOuter: 0.03
            });

            innerEl.setAttribute('material', {
                color: '#CCC',
                shader: 'flat'
            });

            /* *** */
            entityEl.appendChild(innerEl);

            scene.appendChild(entityEl);

            /* *** CHECKPOINTS */

            const spotHeight = 0.0;
            const teleportSpots = [
                {x:  0.000 , y: spotHeight, z: 0.000}, // origin
                {x: -4.600 , y: spotHeight, z: 0.264}, // busts
                {x: -5.536 , y: spotHeight, z: 0}, // slideshow
                {x: -0.900 , y: spotHeight, z: 3.931}, // 360 photo
                {x: -0.900 , y: spotHeight, z: 6.970}, // 360 video
                {x:  0.500 , y: spotHeight, z: 7.947}, // livers
                {x:  0.000 , y: spotHeight, z: 11.600}, // Tilt Brush 
                {x:  5.200 , y: spotHeight, z: 0.000}, // Aframe video
            ];


            var checkPointsContainer = document.createElement('a-entity'),
                checkPointEl,
                teleportPosition,
                checkpointColor = '#FFFF00';

            for(var k=0; k < teleportSpots.length; k++){
                teleportPosition = teleportSpots[k];
                checkPointEl = document.createElement('a-cylinder');
                checkPointEl.setAttribute('checkpoint','checkpoint');
                checkPointEl.setAttribute('radius','.25');
                checkPointEl.setAttribute('height','.1');
                checkPointEl.setAttribute('position',teleportPosition);
                checkPointEl.setAttribute('color', checkpointColor);


                checkPointsContainer.appendChild(checkPointEl);
            }


            scene.appendChild(checkPointsContainer);

            /* --- CHECKPOINTS */

        }

    },

    update: function(){

    },

    tick: function(){



    },

    remove: function(){

    }
});


/*    <a-entity camera mobile
                universal-controls="movementControls: checkpoint"
                checkpoint-controls="mode: animate"
                position="0 1.764 0">

        <a-entity cursor="maxDistance: 30"
                  position="0 0 -1"
                  geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03;"
                  material="color: #CCC; shader: flat;">
        </a-entity>
      </a-entity>*/