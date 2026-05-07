


const bookingForm = document.getElementById("bookingForm");

if(bookingForm){
bookingForm.addEventListener("submit",function(e){
e.preventDefault();

const sender = document.getElementById("sender").value;
const amount = document.getElementById("amount").value;

const tracking = "QP" + Math.floor(Math.random()*100000);

const booking = {
tracking,
sender,
status:"In Transit",
amount
};

let data = JSON.parse(localStorage.getItem("bookings")) || [];
data.push(booking);
localStorage.setItem("bookings",JSON.stringify(data));

document.getElementById("bookingResult").innerHTML = `
<h3>Booking Confirmed</h3>
<p>Tracking ID: ${tracking}</p>
`;
});
}

function trackParcel(){
const id = document.getElementById("trackingId").value;
const data = JSON.parse(localStorage.getItem("bookings")) || [];

const found = data.find(item => item.tracking === id);

if(found){
document.getElementById("trackingOutput").innerHTML = `
<h3>Parcel Found</h3>
<p>Status: ${found.status}</p>
<p>Sender: ${found.sender}</p>
`;
}else{
document.getElementById("trackingOutput").innerHTML = `Parcel Not Found`;
}
}

function paymentSuccess(){
alert("Payment Successful");
}



window.onload = function(){
const dashboard = document.getElementById("dashboardData");

if(dashboard){
const data = JSON.parse(localStorage.getItem("bookings")) || [];

let rows = "";

data.forEach(item=>{
rows += `
<tr>
<td>${item.tracking}</td>
<td>${item.sender}</td>
<td>${item.status}</td>
<td>₹${item.amount}</td>
</tr>
`;
});

dashboard.innerHTML = rows;
}
}



const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.onclick = () => {
  navLinks.classList.toggle('active');
};

// 
function calculateAmount(){
    const weight = document.getElementById("weight").value;
    const amountField = document.getElementById("amount");
    const deliveryType = document.getElementById("deliveryType").value;
    const deliveryDateText = document.getElementById("deliveryDate");

    if(weight && weight > 0){

        let amount = weight * 100;

        let today = new Date();
        let deliveryDate = new Date();

        if(deliveryType === "express"){
            amount += 500;
            deliveryDate.setDate(today.getDate() + 1);
        } else {
            deliveryDate.setDate(today.getDate() + 3);
        }

        amountField.value = amount;

        deliveryDateText.innerHTML = 
            "Expected Delivery: " + deliveryDate.toDateString();

    } else {
        amountField.value = "";
        deliveryDateText.innerHTML = "";
    }
}

function handlePaymentUI() {
    const method = document.getElementById("paymentMethod").value;

    const upi = document.getElementById("upiSection");
    const card = document.getElementById("cardSection");

    // hide all first
    upi.style.display = "none";
    card.style.display = "none";

    if (method === "upi") {
        upi.style.display = "block";
    } 
    else if (method === "card") {
        card.style.display = "block";
    }
    // cash = nothing shown
}
function searchHelp(){
      let input = document.getElementById("searchInput").value;

      if(input === ""){
        alert("Please enter your problem.");
      }
      else{
        alert("Searching for: " + input);
      }
    }

    function contactMessage(){
      alert("Our support team will contact you soon!");
    }






// Open Login
function openLogin(){
    document.getElementById("lloginModal").style.display = "block";
}

// Close Login
function closeLogin(){
    document.getElementById("lloginModal").style.display = "none";
}

// Open Signup
function openSignup(){
    document.getElementById("ssignupModal").style.display = "block";
}

// Close Signup
function closeSignup(){
    document.getElementById("ssignupModal").style.display = "none";
}

// Login Success
function loginSuccess(){

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if(user === "" || pass === ""){
        alert("Please fill all fields");
    }
    else{
        alert("Login Successful");
        closeLogin();
    }
}

// Signup Success
function signupSuccess(){

    let fullname = document.getElementById("fullname").value;
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if(fullname === "" || user === "" || pass === ""){
        alert("Please fill all fields");
    }
    else{
        alert("Signup Successful");
        closeSignup();
    }
}


function switchToLogin(){
    closeSignup();
    openLogin();
}