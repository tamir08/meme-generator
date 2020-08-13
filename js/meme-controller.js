

let gCanvas;
let gCtx;
function drawCanvasImage() {
   gCanvas = document.getElementById('myCanvas');
   gCtx = gCanvas.getContext('2d');
   const imgUrl = getImgUrlById(gMeme.selectedImgId);
   const img = new Image();
   img.onload = () => {
      gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
   }
   img.src = imgUrl;
}

function isEnter(ev) {
   if (ev.key === 'Enter') onAddLine(ev.target);

}

function sizeFont(val) {
   console.log(gMeme.lines[gMeme.selectedLineIdx]);
   if (gMeme.lines[gMeme.selectedLineIdx]['size'] < 12 ||
      gMeme.lines[gMeme.selectedLineIdx]['size'] > 50) return
   gMeme.lines[gMeme.selectedLineIdx]['size'] += val;
}

function alignFont(val) {
   gMeme.lines[gMeme.selectedLineIdx]['align'] = val;
}

function onAddLine(elInput) {
   const txt = elInput.value;
   elInput.value = '';
   const fontClr = document.querySelector('[name=font-color]').value;
   const strokeClr = document.querySelector('[name=stroke-color]').value;
   addTxtToMeme(txt, fontClr, strokeClr);
}

function drawText(txt, fontClr, strokeClr, size, align, idx) {
   console.log(txt, fontClr, strokeClr, size, align)
   gCtx.lineWidth = '2';
   gCtx.strokeStyle = strokeClr;
   gCtx.fillStyle = fontClr;
   gCtx.textAlign = align;
   gCtx.font = size + 'px'+' Impact';
   let x = gCanvas.width / 2;
   if (align === 'left') x = 0;
   if (align === 'right') x = gCanvas.width;
   let y = gCanvas.height / 2;
   if (idx === 0) y = size;
   if (idx === 1) y = gCanvas.height - size;
   gCtx.fillText(txt, x, y);
   gCtx.strokeText(txt, x, y);
}
