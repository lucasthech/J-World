
    let img = document.getElementsByClassName('download-button')[0];
    if (window.innerWidth < 700) {
        img.style.display = 'none';
        document.getElementsByClassName('description2')[0].style.fontSize = '50px';
     }
     else{
        img.style.display = 'block';
        document.getElementsByClassName('description2')[0].style.fontSize = '18px';
     }