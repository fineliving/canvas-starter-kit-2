var canvas = document.getElementById('canvas'),
   context = canvas.getContext('2d'),
   fontHeight = 24,
   alignValues = ['start', 'center', 'end'],
   baselineValues = ['top', 'middle', 'bottom',
      'alphabetic', 'ideographic', 'hanging'
   ],
   x, y;

// Functions..........................................................

function drawGrid(color, stepx, stepy) {
   context.save()

   context.strokeStyle = color;
   context.fillStyle = '#ffffff';
   context.lineWidth = 0.5;
   context.fillRect(0, 0, context.canvas.width, context.canvas.height);

   for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, context.canvas.height);
      context.stroke();
   }

   for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
   }

   context.restore();
}

function drawTextMarker() {
   context.fillStyle = 'yellow';
   context.fillRect(x, y, 7, 7);
   context.strokeRect(x, y, 7, 7);
}

function drawText(text, textAlign, textBaseline) {
   if (textAlign) context.textAlign = textAlign;
   if (textBaseline) context.textBaseline = textBaseline;

   context.fillStyle = 'cornflowerblue';
   context.fillText(text, x, y);
}

function drawTextLine() {
   context.strokeStyle = 'gray';

   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(x + 738, y);
   context.stroke();
}

// Initialization.....................................................

context.font = 'oblique normal bold 24px palatino';

drawGrid('lightgray', 10, 10);

for (var align = 0; align < alignValues.length; ++align) {
   for (var baseline = 0; baseline < baselineValues.length; ++baseline) {
      x = 20 + align * fontHeight * 15;
      y = 20 + baseline * fontHeight * 3;

      drawText(alignValues[align] + '/' + baselineValues[baseline],
         alignValues[align], baselineValues[baseline]);

      drawTextMarker();
      drawTextLine();
   }
}