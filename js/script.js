
let revenue = 0
let cost = 0

function updateUI(){

document.getElementById("todayRevenue").innerText = revenue
document.getElementById("todayCost").innerText = cost
document.getElementById("todayProfit").innerText = revenue - cost

updateChart()

}

function addRevenue(){

let value = Number(document.getElementById("sellInput").value)

revenue += value

saveHistory("Doanh thu +" + value)

updateUI()

}

function addCost(){

let value = Number(document.getElementById("costInput").value)

cost += value

saveHistory("Chi phí -" + value)

updateUI()

}

function showPage(page){

let pages = document.querySelectorAll(".page")

pages.forEach(p=>{
p.classList.remove("active")
})

document.getElementById(page).classList.add("active")

}

function saveHistory(text){

let list = document.getElementById("historyList")

let li = document.createElement("li")

li.innerText = text

list.prepend(li)

}

let chart

function updateChart(){

let data = [revenue,cost,revenue-cost]

if(chart){
chart.data.datasets[0].data = data
chart.update()
return
}

let ctx = document.getElementById("myChart")

chart = new Chart(ctx,{
type:"bar",
data:{
labels:["Doanh thu","Chi phí","Lợi nhuận"],
datasets:[{
data:data
}]
}
})

}

updateUI()