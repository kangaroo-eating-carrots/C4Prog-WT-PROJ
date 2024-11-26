const ausInfoOne = document.getElementById("aus-info-one");
const ausInfoTwo = document.getElementById("aus-info-two");
const ausInfoThree = document.getElementById("aus-info-three");
const ausInfoFour = document.getElementById("aus-info-four");

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
      const ausGDP = ausInfo[0].gdp;
      ausInfoOne.innerHTML = ausGDP;
    }catch (error) {
      console.error('Error:', error);
      results.push('Error: ' + fact.error);
      return;
    }
  }catch(error){
      console.error(error);
      ausInfoOne.innerHTML = error;
      return;
  }
}

