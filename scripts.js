document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    startButton.addEventListener('click', () => {
        page1.style.display = 'none';
        page2.style.display = 'block';
    });

    const storyForm = document.getElementById('story-form');
    const storyInput = document.getElementById('story-input');
    const storiesContainer = document.getElementById('stories');

    storyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const storyText = storyInput.value.trim();
        if (storyText) {
            addStory(storyText);
            storyInput.value = '';
        }
    });

    function addStory(text) {
        const storyItem = document.createElement('div');
        storyItem.className = 'story-item';

        const storyContent = document.createElement('p');
        storyContent.textContent = text;

        const commentBox = document.createElement('textarea');
        commentBox.placeholder = 'Add your suggestions...';

        const submitComment = document.createElement('button');
        submitComment.textContent = 'Submit';
        submitComment.addEventListener('click', () => {
            const comment = commentBox.value.trim();
            if (comment) {
                const commentPara = document.createElement('p');
                commentPara.textContent = comment;
                storyItem.appendChild(commentPara);
                commentBox.value = '';
            }
        });

        storyItem.appendChild(storyContent);
        storyItem.appendChild(commentBox);
        storyItem.appendChild(submitComment);

        storiesContainer.appendChild(storyItem);
    }
});