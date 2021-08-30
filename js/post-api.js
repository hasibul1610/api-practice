const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => displayPost(data));
}
//  getPost();
const displayPost = (posts) =>{
    // console.log(posts);

    for (const post of posts){
        const postContainer = document.getElementById('post-container');
        const div = document.createElement('div');
        div.classList.add('posts');
        div.innerHTML = `
            <h2>User ID ${post.userId}</h2>
            <h2>Post ID ${post.id}</h2>
            <p>Post Title : ${post.title}</p>
            <p>Post Body : ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }

}

// Search Post 
const searchButton = () => {
    const searchField = document.getElementById('search-input');
    searchField.textContent ='';
    const searchInput = searchField.value ;
    // console.log(searchInput);

    const url = `https://jsonplaceholder.typicode.com/posts/${searchInput}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data));


}

const displaySearchResult = (post) => {


        const postContainer = document.getElementById('result-container');
        const div = document.createElement('div');
        div.classList.add('posts');
        div.innerHTML = `
            <h2>User ID ${post.userId}</h2>
            <h2>Post ID ${post.id}</h2>
            <p>Post Title : ${post.title}</p>
            <p>Post Body : ${post.body}</p>
        `;
        postContainer.appendChild(div);


}