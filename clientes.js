async function loadVehicles(){
    const res = 'http://localhost:4000/veiculos';
    const veiculos = await res.json();

    const vehicles = document.getElementById('vehicles');
    vehicles.innerHTML = '';


    vehicles.forEach(vehicle =>{
        const span = document.createElementById("span");
        span.textContent = ``
    })



}