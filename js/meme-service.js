'use strict';
var gMeme = {}

function createNewMeme(id) {
   gMeme = {
      selectedImgId: id,
      selectedLineIdx: 0,
      lines: [
         {
            txt: '',
            size: 28,
            align: 'center',
            fontClr: '#ffffff',
            strokeClr: '#000000',
            cordY: 50
         }
      ]
   }
}


function updateMeme(key, val) {
   let currLine = gMeme.lines[gMeme.selectedLineIdx];
   currLine[key] = val;
}

function updateMemeSize(val) {

   let currLineSize = gMeme.lines[gMeme.selectedLineIdx]['size'];
   if (currLineSize + val < 18 || currLineSize + val > 100) return
   gMeme.lines[gMeme.selectedLineIdx]['size'] += val;
}


function drawLines() {
   gMeme.lines.forEach((line, idx) => {
      drawText(line, idx);
   });
}

function addNewLine() {
   gMeme.selectedLineIdx++;
   gMeme.lines.push({
      txt: '',
      size: 28,
      align: 'center',
      fontClr: '#ffffff',
      strokeClr: '#000000',
      cordY: gCanvas.height / 2
   });
   if (gMeme.selectedLineIdx === 1) gMeme.lines[1].cordY = gCanvas.height - 50;
}

function moveTxt(val) {
   gMeme.lines[gMeme.selectedLineIdx].cordY += val;
}

function deleteLine() {
   gMeme.lines.splice(gMeme.selectedLineIdx, 1);
   gMeme.selectedLineIdx = 0;
   if (gMeme.lines.length === 0) {
      createNewMeme(gMeme.selectedImgId);
   }
   return gMeme.lines[gMeme.selectedLineIdx].txt;
}

function switchLine() {
   if (gMeme.selectedLineIdx === 0) gMeme.selectedLineIdx = gMeme.lines.length - 1;
   else gMeme.selectedLineIdx--;
   return gMeme.lines[gMeme.selectedLineIdx].txt;
}

