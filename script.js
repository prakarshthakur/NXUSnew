const eventsData = [
    {
        id: 1,
        title: "Neon Cyber-Rave: The 2049 Experience",
        host: "Hosted by SYNTH_CORP",
        image: "assets/rave.png",
        tags: ["Underground", "VIP"],
        currentBid: 3200,
        timeLeft: "04:12:35"
    },
    {
        id: 2,
        title: "Celestial Superyacht Gala",
        host: "Hosted by The Monaco Elite",
        image: "assets/yacht.png",
        tags: ["Luxury", "Black Tie"],
        currentBid: 15500,
        timeLeft: "12:45:00"
    },
    {
        id: 3,
        title: "Berghain Reborn: Industrial Warehouse",
        host: "Hosted by KNTXT",
        image: "assets/warehouse.png",
        tags: ["Techno", "Secret Location"],
        currentBid: 850,
        timeLeft: "01:20:10"
    }
];

const grid = document.getElementById('eventsGrid');
const modal = document.getElementById('bidModal');
const closeBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalEventTitle');
const modalCurrentBid = document.getElementById('modalCurrentBid');
const bidInput = document.getElementById('bidAmount');
const confirmBidBtn = document.getElementById('confirmBidBtn');

let activeEventId = null;

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
}

function renderEvents() {
    grid.innerHTML = '';
    
    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        
        const tagsHtml = event.tags.map(tag => 
            `<span class="tag ${tag === 'VIP' || tag === 'Luxury' ? 'vip' : ''}">${tag}</span>`
        ).join('');

        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="card-img">
            <div class="card-body">
                <div class="card-tags">${tagsHtml}</div>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-host">${event.host}</p>
                <div class="card-footer">
                    <div class="bid-info">
                        <h5>Highest Bid</h5>
                        <div class="price">${formatCurrency(event.currentBid)}</div>
                    </div>
                    <div class="time-left">
                        <h5><i class="fa-regular fa-clock"></i> Ends In</h5>
                        <div style="font-weight: 600; font-family: monospace; font-size: 1.1rem">${event.timeLeft}</div>
                    </div>
                </div>
                <button class="btn btn-primary" style="width: 100%" onclick="openBidModal(${event.id})">Place Bid <i class="fa-solid fa-arrow-right" style="margin-left: 0.5rem"></i></button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

window.openBidModal = function(id) {
    const event = eventsData.find(e => e.id === id);
    if (!event) return;
    
    activeEventId = id;
    modalTitle.textContent = event.title;
    modalCurrentBid.textContent = formatCurrency(event.currentBid);
    bidInput.value = '';
    bidInput.min = event.currentBid + 50;
    bidInput.placeholder = `Minimum bid: ${formatCurrency(event.currentBid + 50)}`;
    
    modal.classList.add('active');
};

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

confirmBidBtn.addEventListener('click', () => {
    const bidValue = parseInt(bidInput.value);
    const eventIndex = eventsData.findIndex(e => e.id === activeEventId);
    
    if (eventIndex > -1 && bidValue > eventsData[eventIndex].currentBid) {
        // Success animation
        confirmBidBtn.innerHTML = 'Bid Placed! <i class="fa-solid fa-check"></i>';
        confirmBidBtn.style.background = 'var(--success)';
        
        eventsData[eventIndex].currentBid = bidValue;
        
        setTimeout(() => {
            modal.classList.remove('active');
            confirmBidBtn.innerHTML = 'Confirm Bid <i class="fa-solid fa-gavel"></i>';
            confirmBidBtn.style.background = '';
            renderEvents();
        }, 1500);
    } else {
        alert('Bid must be higher than current highest bid!');
        bidInput.style.borderColor = 'var(--primary)';
    }
});

// Price range dynamic display
const priceRange = document.getElementById('priceRange');
const priceDisplay = document.getElementById('priceDisplay');

priceRange.addEventListener('input', (e) => {
    priceDisplay.textContent = `$${e.target.value}+`;
});

// Initial Render
renderEvents();
