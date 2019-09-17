// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabList = document.createElement('div');
const tps = document.querySelector('div.topics');

function tabs (){

const tab = document.createElement('div');

tab.classList.add('tab');


return tab;

}
const tabSec= document.querySelector('div.topics');


axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function (response) {
response.data.topics.forEach((topic)=>{
  console.log(topic);
  //const div= document.createElement('div');
  const slot = document.createElement('div');
  slot.classList.add('tab');
  slot.textContent= topic;
  tabSec.appendChild(slot);
})
  })
.catch((err) => {
  console.log(err);


});


  /*.then(function (response) {
    // handle success
    console.log(response.data);
    const newTab = tabs(topics[i]);
    tabSec.appendChild(tabs(response.data));

    })

  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  */
//tps.appendChild(tabs());
