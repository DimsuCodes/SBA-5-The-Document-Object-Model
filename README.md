# Pieces of Me

# Pieces of Me 🍃

In this app you can create a post with a title and stir up whatever creativity you'd like to spew. You submit your post and it gets displayed, and you have the option to go back and delete your posts. Your content is saved.

## How to Run
Open `index.html` in any browser. Nothing else is needed.

## Features
- Create a title and a story, then publish it
- Posts are displayed at the bottom of the page
- Form validation with error messages if the title or content is empty
- Delete posts
- Posts are saved in localStorage, so they stay after refreshing

## Reflection
The reason we need `JSON.stringify` is because it turns the list into text, and localStorage can only store and save text.

One of the challenges I faced was that my empty state message didn't show because of leftover test data in localStorage. I used the DevTools console to inspect the posts array and cleared it, which is how I overcame the issue.

I had a hard time figuring out which functions to use and where to link them.

## Known Issues
- The Edit button does not work yet