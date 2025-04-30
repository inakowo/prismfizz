elementImg= document.getElementById("idImage");
listImage= ["menu.jpg", ".png", ".png"];
i=0;
function gantiGambar(){
    elementImg.src= listImage[i];
    i= (i + 1) % listImage.length;
}
setInterval(gantiGambar, 5000)