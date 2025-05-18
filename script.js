
const input = document.getElementById('userInput');
const button = document.getElementById('submitBtn');
const outputContainer = document.getElementById('outputContainer');

button. addEventListener('click', function (e) {
  const value = input.value.trim(); // trim() built-in method use to remove whitespace from both ends of a string -- but not in middle

  if (value) {
    const newElement = document.createElement('p');
    newElement.textContent = `Entered Name: ${value}`;
    console.log(newElement)
    outputContainer.appendChild(newElement);
    console.log(outputContainer)
    input.value = ''; // Clean the input
    console.log(`New Element created ${newElement.textContent}`)
  } else {
    alert('Please enter a name.');
  }

});

/*

// -- 1st stage
**********************
// show this to ChatGPT

to summarize what chatGPT
Use table

<table id="dataTable">
  <thead>
    <tr>
      <th>Input A</th>
      <th>Input B</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

**********************

// -- second stage
use indexDB

<!-- 
 Stocktake App
 version : 1.0
 Project Started: May 15, 2025
 Author: Ivan Mendoza
-->

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stocktake </title>
    <script defer src="script.js"></script>
</head>
<body>

```
<div>
    <label for="userInput">Tell me your name:</label>
    <input type="text" name="userInput" id="userInput">
    <br>
    <br>
    <button id="submitBtn">Submit</button>
</div>

<div id="outputContainer"></div>
```

</body>
</html>

const input = document.getElementById('userInput');
const button = document.getElementById('submitBtn');
const outputContainer = document.getElementById('outputContainer');

button. addEventListener('click', function (e) {
const value = input.value.trim(); // trim() built-in method use to remove whitespace from both ends of a string -- but not in middle

if (value) {
const newElement = document.createElement('p');
newElement.textContent = `Entered Name: ${value}`;
console.log(newElement)
outputContainer.appendChild(newElement);
console.log(outputContainer)
input.value = ''; // Clean the input
console.log(`New Element created ${newElement.textContent}`)
} else {
alert('Please enter a name.');
}

});

is this code good when manipulating DOM or let's say

I am planning to scale this into Data when user enter A and B input
and show like tabular data like excel



*/