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

}

saveAndRender();

