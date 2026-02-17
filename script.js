mapboxgl.accessToken = 'pk.eyJ1IjoibWVoYW5hLW4iLCJhIjoiY21rb2Zxb24wMDVvbzNlcHhhNGwxc3ZpOCJ9.cldXiKJrisAMpXXAL0qobg';
// Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mehana-n/cml8jv1yk008p01qod1la0zv2', // style URL
    center: [-79.39865237301687, 43.662343395037766], // starting position [lng, lat] 
    zoom: 12, // starting zoom level
});