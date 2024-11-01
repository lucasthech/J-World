window.addEventListener('resize', function() {
    let img = document.getElementsByClassName('download-button')[0];
    if (window.innerWidth < 700) {
        img.style.display = 'none';
     }
     else{
        img.style.display = 'block';
     }
   }); 
   