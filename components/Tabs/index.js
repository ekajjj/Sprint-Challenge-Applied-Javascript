// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabTopic = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.topics);
        arrayofTabs = response.data.topics;
        for(i = 0; i < arrayofTabs.length; i++){
            tabTopic.appendChild(makeTab(arrayofTabs[i]));
        }
    })
    .catch((error) => {
        console.log('Error!');
    })

function makeTab(data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;
    return tab;
}