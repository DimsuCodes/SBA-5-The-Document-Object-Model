//grabbing our elements from html
const postForm = document.querySelector("#pom");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const titleError = document.querySelector("#titleError");
const contentError = document.querySelector("#contentError");
const postsContainer = document.querySelector("#postsContainer");

//loads saved posts from the local storage
let posts = JSON.parse(localStorage.getItem("pomPosts")) || [];


//saves the posts to local storage

function saveAndRender() {
    localStorage.setItem("pomPosts", JSON.stringify(posts)); //json.stringify turns list of posts into text while local storage saves the text in the browser.
    postsContainer.innerHTML = ""; //empties the post box

    if (posts.length === 0) {
        postsContainer.innerHTML = "<p>No thoughts yet...🍃</p>";
        return;
    }

    posts.forEach((post) => {
        const card = document.createElement("article");
        card.classList.add("post-card");
        card.dataset.id = post.id;

        card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <button class = "edit-btn">Edit</button>
        <button class = "delete-btn">Delete</button>`;
        postsContainer.append(card);
    }
    );
}

postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleOK = validateField(titleInput, titleError, "Title");
    const contentOK = validateField(contentInput, contentError, "Content");
    if (!titleOK || !contentOK) return;


    posts.push ({
        id: Date.now(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
        timestamp: new Date().toLocaleString(),
    });
    saveAndRender();
    postForm.reset();
});  


postsContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".post-card");
    if (!card) return;
    const id = Number(card.dataset.id);

    if (event.target.classList.contains("delete-btn")){
        posts = posts.filter((post)=> post.id !== id);
        saveAndRender();
    }
});

function validateField(input, errorEl, label) {
    if (input.value.trim() === "") {
        errorEl.textContent = `${label} is required 🍂`;
        return false;
    }
    errorEl.textContent = "";
    return true;
}


saveAndRender();

