window.onload = function() {
        try {
          TagCanvas.Start('myCanvas','tags',{
            textColour: '#06C5A9',
            outlineMethod:"none",
            textHeight:22,
            textFont:'Archivo Narrow',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
              weight:true,
            weightMode:"size",
              depth: 0.4,
              initial: [-0.2,-0.1],
              fadeIn:3000,
              shuffleTags:true,
              dragControl:true,
              shadowBlur:10,
              shadow:"#06C5A9",
              shadowOffset:[1,1],
          });
          
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
      };