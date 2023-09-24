document.addEventListener("DOMContentLoaded", () => {
    const storyForm = document.getElementById("story-form");
    const storyPrompt = document.getElementById("story-prompt");
    const generatedStory = document.getElementById("generated-story");
    const saveButton = document.getElementById("save-story");
    const shareButton = document.getElementById("share-story");
    const ReadButton = document.getElementById("Read-story");

    storyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const generatedText = "Once upon a time...";
        generatedStory.textContent = generatedText;
    });
    saveButton.addEventListener("click", () => {
    });

    shareButton.addEventListener("click", () => {
    });

    ReadButton.addEventListener("click", () => {
    });
    const leaderboard = document.getElementById("story-leaderboard");
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = `Story ${i}`;
        li.appendChild(a);
        leaderboard.appendChild(li);
    }
});
