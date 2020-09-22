document.getElementById("search").addEventListener("click",function(){
    // const country = document.getElementById("searchCountry").value
    // document.getElementById("myCountry").innerText = country +" Today Confirmed "

    fetchDataToApi()
   
   
    
})

async function fetchDataToApi(){
    let fetchData = await fetch("https://api.covid19api.com/summary")
    fetchData =await fetchData.json()
    // console.log(fetchData)


    // const search = fetchData.Countries[50]
    // console.log(search)


    //for World

    document.getElementById("wc").value = "confirmed Cases:  " + fetchData.Global.TotalConfirmed
   
    document.getElementById("wr").value = "confirmed total Recovered :  " + fetchData.Global.TotalRecovered

    document.getElementById("wdeath").value = "confirmed total deaths :  " + fetchData.Global.TotalDeaths

    //for Bangladesh
    document.getElementById("bc").value = "confirmed Cases:  " + fetchData.Countries[13].TotalConfirmed
   
    document.getElementById("br").value = "confirmed total Recovered :  " + fetchData.Countries[13].TotalRecovered
    
    document.getElementById("bd").value = "confirmed total deaths :  " + fetchData.Countries[13].TotalDeaths
    



    //for search result 
    const country =fetchData.Countries;
    let resultCountry = document.getElementById("searchCountry").value
    const searchResult = country.filter(function(element){
        if(element.Country==resultCountry){
            document.getElementById("rc").value = "confirmed Cases:  " + element.NewConfirmed
   
            document.getElementById("rr").value = "confirmed total Recovered :  " + element.NewRecovered
            
            document.getElementById("rd").value = "confirmed total deaths :  " + element.NewDeaths

            const country = document.getElementById("searchCountry").value
            document.getElementById("myCountry").innerText = country +" "+ fetchData.Date





        }
    })
  
}

