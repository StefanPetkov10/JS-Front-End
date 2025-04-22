window.addEventListener("load", solve);

function solve() {
    const form = document.getElementById('contact_form');
    const firstNameInput = document.getElementById('first_name');
    const lastNameInput = document.getElementById('last_name');
    const phoneInput = document.getElementById('phone');
    const pendingList = document.getElementById('pending_contact_list');
    const contactList = document.getElementById('contact_list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!firstName || !lastName || !phone) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'contact';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'names';
        nameSpan.textContent = `${firstName} ${lastName}`;

        const phoneSpan = document.createElement('span');
        phoneSpan.className = 'phone_number';
        phoneSpan.textContent = phone;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit_btn';
        editBtn.textContent = 'Edit';

        const verifyBtn = document.createElement('button');
        verifyBtn.className = 'verify_btn';
        verifyBtn.textContent = 'Verify';

        editBtn.addEventListener('click', () => {
            const [first, last] = nameSpan.textContent.split(' ');
            firstNameInput.value = first;
            lastNameInput.value = last;
            phoneInput.value = phoneSpan.textContent;
            li.remove();
        });

        verifyBtn.addEventListener('click', () => {
            li.remove();

            const verifiedLi = document.createElement('li');
            verifiedLi.className = 'verified_contact';

            const verifiedName = document.createElement('span');
            verifiedName.className = 'names';
            verifiedName.textContent = nameSpan.textContent;

            const verifiedPhone = document.createElement('span');
            verifiedPhone.className = 'phone_number';
            verifiedPhone.textContent = phoneSpan.textContent;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete_btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => verifiedLi.remove());

            verifiedLi.appendChild(verifiedName);
            verifiedLi.appendChild(verifiedPhone);
            verifiedLi.appendChild(deleteBtn);

            contactList.appendChild(verifiedLi);
        });

        li.appendChild(nameSpan);
        li.appendChild(phoneSpan);
        li.appendChild(editBtn);
        li.appendChild(verifyBtn);
        pendingList.appendChild(li);

        firstNameInput.value = '';
        lastNameInput.value = '';
        phoneInput.value = '';
    });
}
