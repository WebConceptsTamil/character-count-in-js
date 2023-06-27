// DOM
const description = document.getElementById("description");
const charCount = document.getElementById("count");

const maxLength = 30;
const warnLength = 20;

// Event Listener
["cut", "copy", "paste"].forEach(function (e) {
  description.addEventListener(e, preventCutCopyPaste);
});

["keyup", "change", "keydown", "focus", "blur"].forEach(function (e) {
  description.addEventListener(e, descriptionCounter);
});

function preventCutCopyPaste(e) {
  e.preventDefault();
  alert("No cut copy paste allowed");
  return false;
}

function descriptionCounter(e) {
  let count = description.value.length;
  charCount.innerText = `${maxLength - count}/${maxLength}`;
  charCount.classList.remove("text-danger");

  if(count == ""){
    charCount.innerText = `${maxLength}/${maxLength}`;
  }

  if (count > maxLength) {
    description.value = description.value.substring(0, maxLength);
    count--;
  }

  if (count > warnLength) {
    charCount.classList.add("text-danger");
    charCount.innerText = `${maxLength - count}/${maxLength}`;
  }
}

descriptionCounter();
