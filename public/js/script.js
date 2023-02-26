const cityname = document.getElementById('cityname');
const temp = document.getElementById('temp');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', async(e)=>{
    e.preventDefault();
    let cityVal = cityname.value;
    if(cityVal === ''){
        temp.innerText = 'Please Enter City Name'
    }
    else{
        try{  
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=86400d46b2e101d7d2acb193e96f267f`;
            let response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerText =arrData[0].temp;
            console.log(response);
        }catch{
            temp.innerText = 'Please Enter Proper City Name'
        }
    }
})