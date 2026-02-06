document.getElementById("change_button").addEventListener("click", function () {

  let blockId = document.getElementById("block_id").value;
  let color = document.getElementById("colour_id").value;

  let blocks = document.querySelectorAll("#grid-item");

  // Reset all blocks first
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  // Change selected block color
  blocks.forEach(block => {
    if (block.getAttribute("data-id") === blockId) {
      block.style.backgroundColor = color;
    }
  });

});

// Reset button
document.getElementById("Reset").addEventListener("click", function () {

  let blocks = document.querySelectorAll("#grid-item");

  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

});
