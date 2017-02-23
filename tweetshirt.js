function updateTweets(tweets) {
  const tweetsSelection = document.getElementById('tweets');

  tweets.forEach((element, index) => {
    const tweet = element[index];
    const option = document.createElement('option');
    option.text = tweet.text;
    option.value = tweet.text.replace('"', '"');
  });

  tweetsSelection.selectedIndex = 0;
}

function fillBackgroundColor(canv, ctx) {
  const canvas = canv;
  const context = ctx;
  const selectObj = document.getElementById('backgroundColor');
  const index = selectObj.selectedIndex;
  const backgroundColor = selectObj[index].value;

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircle(canv, ctx) {
  const canvas = canv;
  const context = ctx;
  const r = Math.floor(Math.random() * 40);
  const x = Math.floor(Math.random() * canvas.width);
  const y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, true);

  context.fillStyle = 'red';
  context.fill();
}


function drawSquare(canv, ctx) {
  const canvas = canv;
  const context = ctx;
  let x = 0;
  let y = 0;
  let w = 0;

  // Calculate a random width for the square and random x, y positions
  w = Math.floor(Math.random() * 40);
  x = Math.floor(Math.random() * canvas.width);
  y = Math.floor(Math.random() * canvas.height);

  // Set the fillStyle to 'lightblue'
  context.fillStyle = 'lightblue';

  // Draw a square a position x, y with width w
  context.fillRect(x, y, w, w);
}

function previewHandler() {
  const canvas = document.getElementById('tshirtCanvas');
  const context = canvas.getContext('2d');

  const selectObj = document.getElementById('shape');
  const index = selectObj.selectedIndex;
  const shape = selectObj[index].value;

  fillBackgroundColor(canvas, context);

  if (shape === 'squares') {
    for (let squares = 0; squares < 20; squares += 1) {
      drawSquare(canvas, context);
    }
  } else if (shape === 'circles') {
    for (let circles = 0; circles < 20; circles += 1) {
      drawCircle(canvas, context);
    }
  }
}

window.addEventListener('load', () => {
  const previewBtn = document.getElementById('previewButton');
  previewBtn.onclick = previewHandler;
});
