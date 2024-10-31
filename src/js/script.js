fetch('https://api.jsonbin.io/v3/b/6723b29fad19ca34f8c1b874', {
    headers: {
        'X-Master-Key': '$2a$10$cXA/iSNFr0acPTYNaAKNROCSqSl0FiNLxTIae2dbb5ZWVPXP4SzYC'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => console.error('Error fetching data:', error));