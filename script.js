elementImg= document.getElementById("idImage");
listImage= ["gamvar/iklan.png", "gamvar/golden.png"];
i=0;
function gantiGambar(){
    elementImg.src= listImage[i];
    i= (i + 1) % listImage.length;
}
setInterval(gantiGambar, 4000)