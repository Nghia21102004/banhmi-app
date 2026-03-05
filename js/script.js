let revenue = 0
let cost = 0

let revenueChart
let compareChart
let financeChart


function showPage(page){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"))

document.getElementById(page).classList.add("active")

}


function addRevenue(){

let value = Number(document.getElementById("sellInput").value)

revenue += value

updateDashboard()

}


function addCost(){

let value = Number(document.getElementById("costInput").value)

cost += value

updateDashboard()

}


function updateDashboard(){

let profit = revenue - cost

document.getElementById("todayRevenue").innerText = revenue

document.getElementById("todayCost").innerText = cost

document.getElementById("todayProfit").innerText = profit

updateCharts()

}


function setFilter(type){

if(type==="day"){

loadChart([200000],["Hôm nay"])

}

if(type==="week"){

loadChart(

[120000,150000,90000,200000,170000,210000,250000],

["T2","T3","T4","T5","T6","T7","CN"]

)

}

if(type==="month"){

loadChart(

[5,7,6,8,10,9,11,12,13,14,15,16],

["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"]

)

}

}


function loadChart(data,labels){

if(revenueChart) revenueChart.destroy()

revenueChart = new Chart(

document.getElementById("revenueChart"),

{

type:"line",

data:{

labels:labels,

datasets:[{

label:"Doanh thu",

data:data,

borderColor:"#ff7a18",

backgroundColor:"rgba(255,122,24,0.2)",

fill:true,

tension:0.4

}]

},

options:{

responsive:true,

animation:{

duration:1200

}

}

}

)

}


function updateCharts(){

let profit = revenue - cost


if(compareChart) compareChart.destroy()

compareChart = new Chart(

document.getElementById("compareChart"),

{

type:"bar",

data:{

labels:["Doanh thu","Chi phí","Lợi nhuận"],

datasets:[{

data:[revenue,cost,profit],

backgroundColor:["#4CAF50","#F44336","#2196F3"]

}]

},

options:{

plugins:{legend:{display:false}},

animation:{duration:1200}

}

}

)



if(financeChart) financeChart.destroy()

financeChart = new Chart(

document.getElementById("financeChart"),

{

type:"pie",

data:{

labels:["Chi phí","Lợi nhuận"],

datasets:[{

data:[cost,profit],

backgroundColor:["#ff6b6b","#4caf50"]

}]

},

options:{

animation:{duration:1200}

}

}

)

}


setFilter("week")
updateDashboard()