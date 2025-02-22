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

function articleCards (headline, authorName, authorPhoto){
//elements
  const card = document.createElement('div');
 const headlines =document.createElement('div');
 const author =document.createElement('div');
 const imgDiv =document.createElement('div');
 const image =document.createElement('img');
 const aName=document.createElement('span');

//Content

headlines.textContent= headline;
author.textContent= authorName;
image.src = authorPhoto;
 //classes
 card.classList.add('card');
 headlines.classList.add('headline');
 author.classList.add('author');
 imgDiv.classList.add('img-container');

 //appends

 card.appendChild(headlines);
 card.appendChild(author);
 card.appendChild(imgDiv);
 imgDiv.appendChild(image);
 card.appendChild(aName);

return card;

}
const newCard = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function (response) {
  console.log(response.data.articles);
  response.data.articles.javascript.forEach((topic)=>{
    console.log(topic.headline);
    //const ex = document.createElement('div');
    //ex.classList.add('card');
    newCard.appendChild(articleCards(topic.headline, topic.authorName, topic.authorPhoto))

});
    })

  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
