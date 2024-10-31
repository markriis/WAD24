fetch('https://api.jsonbin.io/v3/b/6723c8dbad19ca34f8c1c0cf', {
    headers: {
        'X-Master-Key': '$2a$10$cXA/iSNFr0acPTYNaAKNROCSqSl0FiNLxTIae2dbb5ZWVPXP4SzYC'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);

    const posts = data.record;
    const postsContainer = document.querySelector('.posts');

    for (let i = 0; i< posts.length; i++) {
        const post = posts[i];
    
        //create a new post dic
        let div = document.createElement("div");
        div.className = 'post';

        //create post header
        let postHeader = document.createElement("div");
        postHeader.className = 'post-header';

        //add profile icon
        let profileIcon = document.createElement("img");
        profileIcon.src = post.profileIcon;
        profileIcon.alt = "User Profile";
        postHeader.appendChild(profileIcon);

        //add post date
        let postDate = document.createElement("span");
        postDate.className = 'post-date';
        postDate.innerText = post.createTime;
        div.appendChild(postDate);


        div.appendChild(postHeader);

        if (posts[i].imageURL) {
            let postImage = document.createElement("img");
            postImage.src = post.imageURL;
            postImage.alt = "Post Image";
            postImage.className = "post-image";
            div.appendChild(postImage);

        }

        let postContent = document.createElement("p");
        postContent.innerText = post.content;
        div.appendChild(postContent);

        postsContainer.appendChild(div);

    }

})
.catch(err => {
    let errDiv = document.createElement("div");
    errDiv.className = 'post';
    errDiv.innerText = err;
    document.body.appendChild(errDiv);
    })


