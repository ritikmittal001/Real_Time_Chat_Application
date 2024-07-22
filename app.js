async function fetchAxios(){
    const data = await axios.get('http://api.tvmaze.com/search/shows?q=girls');
    console.log(data);
} 
fetchAxios();
