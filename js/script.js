// biến lưu tổng doanh thu
let revenue = 0

// biến lưu tổng chi phí
let cost = 0


// ============================
// hàm chuyển trang
// ============================

function showPage(page){

// lấy tất cả trang
let pages = document.querySelectorAll(".page")

// duyệt từng trang
pages.forEach(p => {

// ẩn trang
p.style.display = "none"

})

// hiển thị trang được chọn
document.getElementById(page).style.display = "block"

}


// ============================
// thêm bán hàng
// ============================

function addSell(){

// lấy giá bánh
let price = document.getElementById("banh").value

// lấy số lượng
let qty = document.getElementById("soluong").value

// tính tiền
let total = price * qty

// cộng vào doanh thu
revenue += total

// hiển thị danh sách bán
document.getElementById("sellList").innerHTML +=
"Bán " + qty + " bánh : " + total + " VNĐ <br>"

// cập nhật dashboard
updateDashboard()

}


// ============================
// thêm chi phí
// ============================

function addCost(){

// lấy tên chi phí
let name = document.getElementById("costName").value

// lấy số tiền
let money = document.getElementById("costMoney").value

// cộng vào chi phí
cost += parseInt(money)

// hiển thị danh sách chi phí
document.getElementById("costList").innerHTML +=
name + " : " + money + " VNĐ <br>"

// cập nhật dashboard
updateDashboard()

}


// ============================
// cập nhật dashboard
// ============================

function updateDashboard(){

// hiển thị doanh thu
document.getElementById("todayRevenue").innerText = revenue

// hiển thị chi phí
document.getElementById("todayCost").innerText = cost

// tính lợi nhuận
let profit = revenue - cost

// hiển thị lợi nhuận
document.getElementById("todayProfit").innerText = profit

document.getElementById("profitMoney").innerText = profit

}