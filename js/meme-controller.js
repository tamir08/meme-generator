'use strict';

let gCanvas;
let gCtx;
function drawCanvasImage() {
   gCanvas = document.getElementById('imgCanvas');
   gCtx = gCanvas.getContext('2d');
   let elImg = document.querySelector(`[data-id='${gMeme.selectedImgId}']`)
   gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
}



function updateTxt(ev) {
   if (ev.key === 'Enter') return onAddLine();
   const txt = ev.target.value;
   updateMeme('txt', txt);
   renderMeme();
}

function onSizeTxt(val) {
   updateMemeSize(val);
   renderMeme();
}

function onAlignTxt(val) {
   updateMeme('align', val);
   renderMeme();
}
function onColorChange(key, val) {
   updateMeme(key, val);
   renderMeme();
}

function onAddLine() {
   const elInput = document.querySelector('[name=text]');
   if (elInput.value !== '') {
      elInput.value = '';
      addNewLine();
   }
}

function onMoveTxt(val) {
   moveTxt(val);
   renderMeme();
}

function onDeleteLine() {
   const txt = deleteLine();
   document.querySelector('[name=text]').value = txt;
   renderMeme();
}

function onSwitchLine() {
   const txt = switchLine();
   document.querySelector('[name=text]').value = txt;
}

function renderMeme() {
   drawCanvasImage();
   drawLines();
}

function drawText(line, idx) {
   gCtx.lineWidth = '2';
   gCtx.strokeStyle = line.strokeClr;
   gCtx.fillStyle = line.fontClr;
   gCtx.textAlign = line.align;
   gCtx.font = line.size + 'px' + ' Impact';
   let x = gCanvas.width / 2;
   if (line.align === 'left') x = 0;
   if (line.align === 'right') x = gCanvas.width;
   let y = line.cordY;
   gCtx.fillText(line.txt, x, y);
   gCtx.strokeText(line.txt, x, y);
}
