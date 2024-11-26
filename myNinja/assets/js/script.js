const ausInfoSurface = document.getElementById("aus-surface");
const ausInfoPopulation = document.getElementById("aus-population");
const ausInfoGDP = document.getElementById("aus-gpd");
const ausInfoAvgGDP = document.getElementById("aus-avg-gdp");
/*
window.addEventListener("load", (event) => {
  updateAusInfo()
});
*/

const apiKey = "bzpxhhKf7AUdOU4tmX/t4w==HsCWSKOqf6pMB9BZ"


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



