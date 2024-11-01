
    let img = document.getElementsByClassName('download-button')[0];
    if (window.innerWidth < 768) {
        img.style.display = 'none';
        document.getElementsByClassName('description2')[0].style.fontSize = '25px';
        document.getElementsByClassName('image-container')[0].style.display = 'none';
     }
     else{
        img.style.display = 'block';
        document.getElementsByClassName('description2')[0].style.display = 'none';
     }