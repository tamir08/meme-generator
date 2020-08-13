'use-script';
var gMeme = {}

function createNewMeme(id) {
   gMeme = {
      selectedImgId: id,
      selectedLineIdx: 0,
      lines: [
         {
            size: 28,
            align: 'center'
         }
      ]
   }
}

function addTxtToMeme(txt, fontClr, strokeClr) {

   gMeme.lines[gMeme.selectedLineIdx].txt = txt;
   gMeme.lines[gMeme.selectedLineIdx].fontClr = fontClr;
   gMeme.lines[gMeme.selectedLineIdx].strokeClr = strokeClr;
   const size = gMeme.lines[gMeme.selectedLineIdx].size;
   const align = gMeme.lines[gMeme.selectedLineIdx].align;
   drawText(txt, fontClr, strokeClr, size, align, gMeme.selectedLineIdx);
   console.log(gMeme.lines);
   gMeme.lines.push({ size: 28, align: 'center' });
   gMeme.selectedLineIdx++;
}
function getText() {

   return gMeme.lines[gMeme.selectedLineIdx].txt;
}

// function fillCanvas(w,h){

// }


