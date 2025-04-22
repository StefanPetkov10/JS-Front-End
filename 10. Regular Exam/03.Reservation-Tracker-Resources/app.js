document.addEventListener('DOMContentLoaded', function() {
    const loadBtn = document.getElementById('load-history');
    const addBtn = document.getElementById('add-reservation');
    const editBtn = document.getElementById('edit-reservation');
    const listDiv = document.getElementById('list');
    const namesInput = document.getElementById('names');
    const daysInput = document.getElementById('days');
    const dateInput = document.getElementById('date');
    
    const baseUrl = 'http://localhost:3030/jsonstore/reservations';
    let currentEditId = null;

    loadBtn.addEventListener('click', loadReservations);
    
    addBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const reservation = {
            names: namesInput.value.trim(),
            days: daysInput.value.trim(),
            date: dateInput.value.trim()
        };
        
        if (!reservation.names || !reservation.days || !reservation.date) {
            alert('All fields are required!');
            return;
        }
        
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservation)
            });
            
            if (!response.ok) {
                throw new Error('Failed to add reservation');
            }
            
            clearInputs();
            await loadReservations();
        } catch (error) {
            console.error(error);
            alert('Error adding reservation');
        }
    });
    
    editBtn.addEventListener('click', async function(e) {
        e.preventDefault();
        
        if (!currentEditId) return;
        
        const reservation = {
            names: namesInput.value.trim(),
            days: daysInput.value.trim(),
            date: dateInput.value.trim(),
            _id: currentEditId
        };
        
        if (!reservation.names || !reservation.days || !reservation.date) {
            alert('All fields are required!');
            return;
        }
        
        try {
            const response = await fetch(`${baseUrl}/${currentEditId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservation)
            });
            
            if (!response.ok) {
                throw new Error('Failed to edit reservation');
            }
            
            clearInputs();
            await loadReservations();
            toggleButtons();
            currentEditId = null;
        } catch (error) {
            console.error(error);
            alert('Error editing reservation');
        }
    });
    
    async function loadReservations() {
        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Failed to load reservations');
            }
            const data = await response.json();
            
            listDiv.innerHTML = '';
            
            Object.values(data).forEach(reservation => {
                const container = document.createElement('div');
                container.className = 'container';
                
                container.innerHTML = `
                    <h2>${reservation.names}</h2>
                    <h3>${reservation.date}</h3>
                    <h3 id="reservation_days">${reservation.days}</h3>
                    <div class="buttons-container">
                        <button class="change-btn">Change</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;
                
                const changeBtn = container.querySelector('.change-btn');
                changeBtn.addEventListener('click', () => {
                    currentEditId = reservation._id;
                    namesInput.value = reservation.names;
                    daysInput.value = reservation.days;
                    dateInput.value = reservation.date;
                    toggleButtons();
                });
                
                const deleteBtn = container.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => deleteReservation(reservation._id));
                
                listDiv.appendChild(container);
            });
        } catch (error) {
            console.error(error);
            alert('Error loading reservations');
        }
    }
    
    async function deleteReservation(id) {
        try {
            const response = await fetch(`${baseUrl}/${id}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete reservation');
            }
            
            await loadReservations();
        } catch (error) {
            console.error(error);
            alert('Error deleting reservation');
        }
    }
    
    function clearInputs() {
        namesInput.value = '';
        daysInput.value = '';
        dateInput.value = '';
    }
    
    function toggleButtons() {
        addBtn.disabled = !addBtn.disabled;
        editBtn.disabled = !editBtn.disabled;
    }
});