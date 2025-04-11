//Fetch API Requisição do tipo GET
// fetch("https://jsonplaceholder.typicode.com/posts")
// 	.then((response) => response.json())
	
//     .then((post) => {
// 		console.log(post);
//         const container = document.querySelector("#container")

//         post.map(post=>{
//             console.log(post.title)

//             const h2 = document.createElement("h2")
//             h2.textContent = post.title
//             container.appendChild(h2)
//         })
// 	});

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
