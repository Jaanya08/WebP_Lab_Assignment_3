var hotelName = "Luxe Haven";
let currentView = "landing";
const MAX_ROWS = 4;
bookingActive = false;

const rooms = [
    { type: "Standard Garden", price: 5000 },
    { type: "Deluxe Pool View", price: 8500 },
    { type: "Luxury Sea Suite", price: 15000 },
    { type: "Presidential Villa", price: 45000 },
    { type: "Executive Suite", price: 12000 },
    { type: "Honey Moon Den", price: 20000 },
    { type: "Family Penthouse", price: 25000 },
    { type: "Solo Traveler Pod", price: 3000 }
];

console.log("Hotel System Online");
// document.write(""); 

function showRooms() {
    confirm("Would you like to view our exclusive prices?"); 
    
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('bg-container').style.display = 'none';
    document.getElementById('room-page').style.display = 'block';

    const featuredRooms = rooms.slice(0, MAX_ROWS);

    const dailyDeal = [...rooms].shift(); 
    console.log("Today's shifted deal:", dailyDeal.type);

    renderRooms(featuredRooms);
}

function renderRooms(roomList) {
    const grid = document.getElementById('room-grid');
    grid.innerHTML = ""; 
    
    for (let i = 0; i < roomList.length; i++) {
        let room = roomList[i];
        let card = document.createElement('div');
        card.className = "room-card";

        card.onmouseover = function() { this.style.borderColor = "#2c3e50"; };
        card.onmouseout = function() { this.style.borderColor = "#ffd700"; };

        card.innerHTML = `
            <h3>${room.type}</h3>
            <p>Price: ₹${room.price} / Day</p>
            <button onclick="openBooking('${room.type}')">Book Room</button>
        `;
        grid.appendChild(card);
    }
}

function openBooking(roomName) {
    let guestName = prompt("Enter guest name for " + roomName); 
    
    if (guestName) {
        alert("Welcome " + guestName + "! Please select your dates below.");

        document.getElementById('room-grid').style.display = 'none';
        const calSection = document.getElementById('calendar-section');
        calSection.style.display = 'block';

        document.getElementById('check-in').focus(); 
    }
}

function confirmFinalBooking() {
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;

    if (!checkIn || !checkOut) {
        alert("Please select both dates!");
    } else {
        if (confirm("Confirm booking from " + checkIn + " to " + checkOut + "?")) {
            document.getElementById('calendar-section').style.display = 'none';
            document.getElementById('confirmation-note').style.display = 'block';
            
            document.getElementById('booking-form').reset();
        }
    }
}

function validateForm() {
    const emailField = document.getElementById('guest-email');
    const status = document.getElementById('form-status');
    
    if (emailField.value === "") {
        alert("Email is required!");
        emailField.focus(); 
        return false;
    } else {
        status.innerText = "Newsletter Subscribed!";
        document.getElementById('newsletter-form').reset(); 
        return false; 
    }
}

function updateBackground() {
    const scrollVal = window.scrollY;
    const bg = document.getElementById('bg-container');
    const bgImages = [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    ];

    if (scrollVal < 500) {
        bg.style.backgroundImage = `url('${bgImages[0]}?auto=format&fit=crop&w=1600&q=80')`;
    } else if (scrollVal < 1000) {
        bg.style.backgroundImage = `url('${bgImages[1]}?auto=format&fit=crop&w=1600&q=80')`;
    } else {
        bg.style.backgroundImage = `url('${bgImages[2]}?auto=format&fit=crop&w=1600&q=80')`;
    }
}

function goBack() {
    location.reload();
}