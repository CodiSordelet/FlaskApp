document.getElementById('textForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const userInput = document.getElementById('textInput').value;
  displayText(userInput);
  document.getElementById('textInput').value = ''; // Clear input field after submission
});

function displayText(text) {
  const displayDiv = document.getElementById('displayText');
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  displayDiv.appendChild(paragraph);
}

