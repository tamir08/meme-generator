'use-script';

function init() {
   renderGallery();
}

function onImageChoose(id) {
   createNewMeme(id)
   document.querySelector('.main-home').classList.toggle('hide')
   document.querySelector('.main-editor').classList.toggle('hide')
   updateCanvas()
}

function renderGallery() {
   let strHtml = loadGallery();
   const elGallery = document.querySelector('.gallery');
   elGallery.innerHTML = strHtml;
}
function updateCanvas() {
   // let elCanvasDiv = document.querySelector('.canvas');
   // const xSize = elCanvasDiv.offsetWidth;
   // const ySize = elCanvasDiv.offsetHeight;
   // console.log(xSize,ySize);
   // drawCanvas(xSize,ySize)
   drawCanvas()

}




