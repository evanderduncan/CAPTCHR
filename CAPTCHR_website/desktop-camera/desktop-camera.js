window.onload = function() {
    
    

    let video = document.getElementById('video');
    let canvas = document.getElementById('photo-gallery');
    let ctx = canvas.getContext('2d');
  
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        video.srcObject = stream;
        video.play();
  
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
  
        function draw() {
          ctx.drawImage(video, 0, 0);
          requestAnimationFrame(draw);
        }
  
        video.addEventListener('play', function() {
          draw();
        }, false);
      })
      .catch(function(err) {
        console.error('Error accessing webcam: ', err);
      });
  };
