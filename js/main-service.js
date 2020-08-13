'use-script';
var gKeywords = { 'happy': 5, 'funny': 1 }
var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['politic'] },
{ id: 2, url: 'imgs/2.jpg', keywords: ['funny'] }

];

function getImgUrlById(id) {
   const idx = gImgs.findIndex(img => {
      return (img.id === id)
   })
   return gImgs[idx].url;
}

function loadGallery() {
   let imgsStr = '';
   gImgs.forEach(img => {
      imgsStr += `<img src="${img.url}" onclick="onImageChoose(${img.id})">`;
   })
   return imgsStr;
}