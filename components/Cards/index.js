// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        //console.log(response);
        console.log(response.data);
        console.log(response.data.articles.bootstrap);
        console.log(response.data.articles.javascript);
        console.log(response.data.articles.jquery);
        console.log(response.data.articles.node);
        console.log(response.data.articles.technology);
        bootstrapArray = response.data.articles.bootstrap;
        jsArray = response.data.articles.javascript;
        jqArray = response.data.articles.jquery;
        nodeArray = response.data.articles.node;
        techArray = response.data.articles.technology;

        //bootstrapArray loop
        for(i = 0; i < bootstrapArray.length; i++){
            cardContainer.appendChild(makeCard(bootstrapArray[i]));
        }
        //jsArray loop
        for(i = 0; i < jsArray.length; i++){
            cardContainer.appendChild(makeCard(jsArray[i]));
        }
        //jqArray loop
        for(i = 0; i < jqArray.length; i++){
            cardContainer.appendChild(makeCard(jqArray[i]));
        }
        //nodeArray loop
        for(i = 0; i < nodeArray.length; i++){
            cardContainer.appendChild(makeCard(nodeArray[i]));
        }
        //techArray loop
        for(i = 0; i < techArray.length; i++){
            cardContainer.appendChild(makeCard(techArray[i]));
        }        
    })
    .catch((error) => {
        console.log(error);
    })

function makeCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div')
    headline.classList.add('headline');
    
    headline.textContent = data.headline;
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');    

    const image = document.createElement('img');
    image.src = data.authorPhoto;

    const authorSpan = document.createElement('span');
    authorSpan.textContent = data.authorName;

    author.appendChild(imgContainer);
    imgContainer.appendChild(image);    
    
    author.appendChild(authorSpan);
    image.textContent = data.image;
    authorSpan.textContent = data.authorName; 
    return card;
}