'use strict';

function init() {
   renderGallery();
}

function downloadCanvas(elLink) {
   const data = gCanvas.toDataURL();
   elLink.href = data;
   elLink.download = 'my-meme.jpg';
}

function onImageChoose(imgId) {
   document.querySelector('.main-home').classList.toggle('hide')
   document.querySelector('.main-editor').classList.toggle('hide')
   resizeCanvas();
   createNewMeme(imgId);
   drawCanvasImage()
}

function renderGallery() {
   let strHtml = loadGallery();
   const elGallery = document.querySelector('.gallery');
   elGallery.innerHTML = strHtml;
}



function resizeCanvas() {
   const elBox= document.querySelector('.canvas-box')
   const xSize = elBox.offsetWidth;
   const ySize = elBox.offsetHeight;
   console.log(xSize,ySize);
   let elCanvas = document.getElementById('imgCanvas');;
   elCanvas.hight=ySize;
   elCanvas.width=xSize;
}

