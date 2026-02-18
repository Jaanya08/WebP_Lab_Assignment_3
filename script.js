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

function showRooms() {
    confirm("Would you like to view our exclusive prices?");
    
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('bg-container').style.display = 'none';
    document.getElementById('room-page').style.display = 'block';
    
    renderRooms();
}

function renderRooms() {
    const grid = document.getElementById('room-grid');
    grid.innerHTML = "";
    
    for (let room of rooms) {
        let card = document.createElement('div');
        card.className = "room-card";
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
        alert("Please select your dates in the following calendar.");
        
        if (confirm("Confirm booking for " + guestName + "?")) {
            document.getElementById('confirmation-note').style.display = 'block';
        }
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