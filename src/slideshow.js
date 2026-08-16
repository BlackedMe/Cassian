// Shuffles an array
function shuffle(array) {
  let n = array.length,
    i;

  while (n) {
    // Returns a random index in [0, n):
    i = Math.floor(Math.random() * n--);

    temp = array[n];
    // Swap the last unshuffled element with the random element
    array[n] = array[i];

    array[i] = temp;
  }
  return array;
}

function slideshow() {
  const filePaths = [
    "images/bird.jpeg",
    "images/cow.jpeg",
    "images/dinosaur.jpeg",
    "images/dog.jpeg",
    "images/duck.jpeg",
    "images/hermes-1.jpeg",
    "images/hermes-2.jpeg",
    "images/horse.jpeg",
    "images/monkey.jpeg",
    "images/rabbit.jpeg",
  ];

  let permutation = [];

  for (let i = 0; i < filePaths.length; i++) {
    permutation[i] = i;
  }

  shuffle(permutation);

  const nodeList = document.querySelectorAll("#slideshow img");
  nodeList[0].src = filePaths[permutation[0]];
  nodeList[1].src = filePaths[permutation[1]];
  nodeList[2].src = filePaths[permutation[2]];

  let next = 3;
  // Slide the images in the slideshow forward by one
  setInterval(
    function () {
      nodeList[0].src = nodeList[1].src;
      nodeList[1].src = nodeList[2].src;
      nodeList[2].src = filePaths[permutation[next++ % filePaths.length]];
    },
    3000,
    permutation,
    filePaths,
  );
}
