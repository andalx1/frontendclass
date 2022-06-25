const apiButton = document.getElementById('apiButton');
const apidata = document.getElementById('apidata');
const base_experience = document.getElementById('base_experience');

const callAPI = () => {
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(res => res.json())
.then(data => {
    apidata.innerText = JSON.stringify(data);
    base_experience.innerText = `Experiencia Base: ${JSON.stringify(data.base_experience)}`
})
.catch(e => console.error(new Error(e)));
}
apiButton.addEventListener('click', callAPI );