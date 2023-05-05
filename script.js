
document.getElementById('about-me-image').addEventListener('click', function(){
    document.getElementById('me-personally-div').style.display="block";
    document.getElementById('image-change').style.display="none";
    document.getElementById('my-work-section').style.display="none";
});

document.getElementById('my-work-image').addEventListener('click', function(){
    document.getElementById('my-work-section').style.display="block";
    document.getElementById('image-change').style.display="none";
    document.getElementById('me-personally-div').style.display="none";
});


document.getElementById('get-in-touch-image').addEventListener('click', function(){
    document.getElementById('my-work-section').style.display="none";
    document.getElementById('image-change').style.display="block";
    document.getElementById('me-personally-div').style.display="none";
});







// https://www.youtube.com/watch?v=nxoHR9lltK0