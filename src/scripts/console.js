// Call the function with the desired words, element ID, and optional colors
consoleText(['Tecnología', 'Programación', 'Filosofía'], 'text', ['#0b0c0c']);

function consoleText(words, id, colors) {
  // Set default colors if not provided
  if (colors === undefined) {
    colors = ['#0b0c0c'];
  }

  // Initialize variables
  let visible = true;
  let con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id);

  // Set the initial text color
  target.style.color = colors[0];

  // Function to update the text in the target element
  function updateText() {
    if (letterCount === 0 && !waiting) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      setTimeout(function () {
        // Rotate colors and words
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);

        x = 1;
        target.style.color = colors[0];
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && !waiting) {
      waiting = true;
      setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (!waiting) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }

  // Update the text periodically
  setInterval(updateText, 120);

  // Add blinking underscore
  setInterval(function () {
    if (visible) {
      con.className = 'console-underscore hidden';
      visible = false;
    } else {
      con.className = 'console-underscore';
      visible = true;
    }
  }, 400);
}