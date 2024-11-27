const ausInfoSurface = document.getElementById("aus-surface");
const ausInfoPopulation = document.getElementById("aus-population");
const ausInfoGDP = document.getElementById("aus-gpd");
const ausInfoAvgGDP = document.getElementById("aus-avg-gdp");

const cityInfoName = document.getElementById("city-name");
const cityInfoRegion = document.getElementById("city-region");
const cityInfoPopulation = document.getElementById("city-population");
const cityInfoLatitude = document.getElementById("city-latitude");
const cityInfoLongitude = document.getElementById("city-longitude");
const citySelector = document.getElementById("cities");
const cityStateFlag = document.getElementById("city-state-img");

let cityName = "Perth";
let cityImgPath = "./assets/images/" + cityName + ".svg";
const apiKey = "toFrmKlRG0BC4xjvCjfhcA==yTSIzdizhSUDxdEK"

window.addEventListener("load", (event) => {
  updateAusInfo();
  updateCityInfo(cityName);
  cityStateFlag.src = cityImgPath;
});


citySelector.addEventListener("change", async (event) =>{
  cityName = event.target.value;
  await updateCityInfo(cityName)

  if (cityName === "Darwin"){
    cityInfoRegion.innerHTML = "Northern Territory";
  }

  if (cityName === "Canberra"){
    cityInfoRegion.innerHTML = "Australian Capital Territory";
  }

  cityImgPath = "./assets/images/" + cityName + ".svg";
  cityStateFlag.src = cityImgPath;

})



async function getAusInfo() {
  const response = await fetch('https://api.api-ninjas.com/v1/country?name=Australia',{
    method: 'GET',
    headers: { 'X-Api-Key': apiKey },
  });

  const result = await response.json();

  return result;
}

async function updateAusInfo() {
  try{
    const ausInfo = await getAusInfo();
    console.log(ausInfo)
    try{
      ausInfoSurface.innerHTML = ausInfo[0].surface_area;
      ausInfoPopulation.innerHTML = ausInfo[0].population;
      ausInfoGDP.innerHTML = ausInfo[0].gdp;
      ausInfoAvgGDP.innerHTML = ausInfo[0].gdp_per_capita;
    }catch (error) {
      console.error(ausInfo.error);
      ausInfoSurface.innerHTML = ausInfo.error;
      ausInfoPopulation.innerHTML = ausInfo.error;
      ausInfoGDP.innerHTML = ausInfo.error;
      ausInfoAvgGDP.innerHTML = ausInfo.error;
      return;
    }
  }catch(error){
      console.error(error);
      ausInfoSurface.innerHTML = error;
      ausInfoPopulation.innerHTML = error;
      ausInfoGDP.innerHTML = error;
      ausInfoAvgGDP.innerHTML =error;
      return;
  }
}

async function getCityInfo(cityName) {
  const urlPath = "https://api.api-ninjas.com/v1/city?name=" + cityName;
  const response = await fetch(urlPath, {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey },
  });

  const result = await response.json();

  return result;
}


async function updateCityInfo(cityName) {
  try{
    const cityInfo = await getCityInfo(cityName);
    console.log(cityInfo);
  
  try{
    cityInfoName.innerHTML = cityInfo[0].name;
    cityInfoRegion.innerHTML = cityInfo[0].region;
    cityInfoPopulation.innerHTML = cityInfo[0].population;
    cityInfoLatitude.innerHTML = cityInfo[0].latitude;
    cityInfoLongitude.innerHTML = cityInfo[0].longitude;
  } catch (error) {
    console.error(cityInfo.error);
    cityInfoName.innerHTML = cityInfo.error;
    cityInfoRegion.innerHTML = cityInfo.error;
    cityInfoPopulation.innerHTML = cityInfo.error;
    cityInfoLatitude.innerHTML = cityInfo.error;
    cityInfoLongitude.innerHTML = cityInfo.error;
    return;
  }
} catch(error) {
  console.error(error);
  cityInfoName.innerHTML = error;
  cityInfoRegion.innerHTML = error;
  cityInfoPopulation.innerHTML = error;
  cityInfoLatitude.innerHTML = error;
  cityInfoLongitude.innerHTML = error;
  return;
  }
}


