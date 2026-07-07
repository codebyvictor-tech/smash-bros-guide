document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderAllCharacters();
    setupFilterButtons();
    setupModal();
}

// Render all characters into their respective grids
function renderAllCharacters() {
    for (const [category, chars] of Object.entries(characters)) {
        const grid = document.getElementById(`${category}-grid`);
        chars.forEach(character => {
            const card = createCharacterCard(character, category);
            grid.appendChild(card);
        });
    }
}

// Create a character card element
function createCharacterCard(character, category) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.setAttribute('data-category', category);
    card.innerHTML = `
        <img src="${character.imageUrl}" alt="${character.name}" onerror="this.src='https://via.placeholder.com/150?text=${character.name}'">
        <h3>${character.name}</h3>
        <p>Click to view guide</p>
    `;
    card.addEventListener('click', () => openModal(character));
    return card;
}

// Setup filter buttons
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterCharacters(filter);
        });
    });

    // Show all sections by default
    showAllSections();
}

// Filter characters by category
function filterCharacters(filter) {
    const sections = document.querySelectorAll('.character-section');
    
    if (filter === 'all') {
        showAllSections();
    } else {
        sections.forEach(section => {
            if (section.getAttribute('data-section') === filter) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }
}

// Show all sections
function showAllSections() {
    const sections = document.querySelectorAll('.character-section');
    sections.forEach(section => section.classList.add('visible'));
}

// Setup modal functionality
function setupModal() {
    const modal = document.getElementById('characterModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Open modal with character details
function openModal(character) {
    const modal = document.getElementById('characterModal');
    document.getElementById('modalImage').src = character.imageUrl;
    document.getElementById('modalName').textContent = character.name;
    document.getElementById('modalCheatsheet').textContent = character.cheatsheet;
    
    // Populate weaknesses
    const weaknessesList = document.getElementById('modalWeaknesses');
    weaknessesList.innerHTML = '';
    character.weaknesses.forEach(weakness => {
        const li = document.createElement('li');
        li.textContent = weakness;
        weaknessesList.appendChild(li);
    });
    
    // Populate tips
    const tipsList = document.getElementById('modalTips');
    tipsList.innerHTML = '';
    character.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    // Populate counters
    const countersList = document.getElementById('modalCounters');
    countersList.innerHTML = '';
    character.counters.forEach(counter => {
        const badge = document.createElement('span');
        badge.className = 'counter-badge';
        badge.textContent = counter;
        countersList.appendChild(badge);
    });
    
    modal.classList.add('show');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('characterModal');
    modal.classList.remove('show');
}
