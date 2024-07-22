const inp = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    const search_data = inp.value;
    fetchData(search_data);
    console.log(search_data);
});

async function fetchData(data) {
    try {
        const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${data}`);
        console.log(response.data);
        manipulate(response.data); // Calling the manipulate function
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function manipulate(alldata) {
    list.innerHTML = ''; // Clear previous results
    for (let data of alldata) {
        const figure = document.createElement('figure');
        figure.innerHTML = `
            <img src="${data.show.image ? data.show.image.medium : ''}" alt="${data.show.name}">
            <figcaption>${data.show.name}</figcaption>
        `;
        list.appendChild(figure);
    }
}
