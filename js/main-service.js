'use strict';
var gKeywords = { 'happy': 5, 'funny': 1 }
var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['politic'] },
{ id: 2, url: 'imgs/2.jpg', keywords: ['funny'] },
{ id: 3, url: 'imgs/3.jpg', keywords: ['funny'] },
{ id: 4, url: 'imgs/4.jpg', keywords: ['funny'] },
{ id: 5, url: 'imgs/5.jpg', keywords: ['funny'] },
{ id: 6, url: 'imgs/6.jpg', keywords: ['funny'] },
{ id: 7, url: 'imgs/7.jpg', keywords: ['funny'] },
{ id: 8, url: 'imgs/8.jpg', keywords: ['funny'] },
{ id: 9, url: 'imgs/9.jpg', keywords: ['funny'] },
{ id: 10, url: 'imgs/10.jpg', keywords: ['funny'] },
{ id: 11, url: 'imgs/11.jpg', keywords: ['funny'] },
{ id: 12, url: 'imgs/12.jpg', keywords: ['funny'] },
{ id: 13, url: 'imgs/13.jpg', keywords: ['funny'] },
{ id: 14, url: 'imgs/14.jpg', keywords: ['funny'] },
{ id: 15, url: 'imgs/15.jpg', keywords: ['funny'] },
{ id: 16, url: 'imgs/16.jpg', keywords: ['funny'] },
{ id: 17, url: 'imgs/17.jpg', keywords: ['funny'] },
{ id: 18, url: 'imgs/18.jpg', keywords: ['funny'] }
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
      imgsStr += `<img src="${img.url}" data-id="${img.id}" 
      onclick="onImageChoose(${img.id})">`;
   })
   return imgsStr;
}
