const text = document.querySelector("#text");
const count = document.querySelector("#count");

text.addEventListener("input", () => {
    let word = text.value.trim();

    // Fix typo and split text correctly
    let textWords = word.split(/\s+/).filter(word => word.length > 0);
    count.textContent = textWords.length;
});
