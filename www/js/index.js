document.addEventListener('deviceready', loadContacts, false);

/*function loadContacts() {
    let options = new ContactFindOptions();
    //options.filter = "resp";
    options.multiple = true;
    options.hasPhoneNumber = true;

    let fields = ['name'];

    navigator.contacts.find(fields, showContacts, handleContactError, options);
}

function showContacts(contacts) {
   
    let contactItem;
    const contactList = document.getElementById('contactList');

    for (const contact of contacts) {
        contactItem = document.createElement('li');
        contactItem.innerHTML = `
            <a href="#contact-show">
                <img src="img/avatarStandard.png">
                <h1>${contact.name.formatted}</h1>
                <p>${contact.phoneNumbers[0].value}</p>
            </a>
        `;
        contactList.appendChild(contactItem);
    }
    // console.log(contacts);
    // alert(`${contacts.length} contacts found`);

    // const contactList = document.getElementById('contactList');
    // contactList.innerHTML = contactHTML;
    $(contactList).listview('refresh');

}   */

function handleContactError(error) {
    console.log("Error while getting contacts list");
    console.log(error);
}




function loadContacts() {
    let options = new ContactFindOptions();
    // options.filter = "resp";
    options.multiple = true;
    options.hasPhoneNumber = true;

    // let fields = ['name'];
    let fields = ['id'];

    navigator.contacts.find(fields, showContacts, handleContactError, options);
}

function showContacts(contacts) {
    let contactItem;
    const contactList = document.getElementById('contactList');

    for (const contact of contacts) {
        contactItem = document.createElement('li');
        contactItem.innerHTML = `
            <a href="#contact-show">
                <img src="img/avatarStandard.png">
                <h1>${contact.name.formatted}</h1>
                <p>${contact.phoneNumbers[0].value}</p>
            </a>
        `;

        contactItem.onclick = function () {
            getContact(contact.id)
        }

        contactList.appendChild(contactItem);
    }
    
    $(contactList).listview('refresh');
}

function getContact(contactId) {
    let options = new ContactFindOptions();
    options.filter = contactId;
    options.multiple = false; // optionnel c'est la valeur par défauts

    let fields = ['id'];

    navigator.contacts.find(fields, showContact, handleContactError, options);
}    

function showContact(contacts) {
    const contact = contacts[0];

    let contactInfos = `
        <li>
            <img src="img/avatarStandard.png">
            <h1>Nom du contact</h1>
            <p>${contact.name.formatted}</p>
        </li>
        <li>
            <h1>Téléphone</h1>
            <p>${contact.phoneNumbers[0].value}</p>
        </li>
        <li>
            <h1>Email</h1>
            <p>${contact.emails ? contact.emails[0].value : 'Non renseigné'}</p>
        </li>
        <li>
            <h1>Adresse</h1>
            <p>${contact.addresses ? contact.addresses[0].formatted : 'Non renseigné'}</p>
        </li>
        <li>
            <h1>Organisation</h1>
            <p>${contact.organizations ? contact.organizations[0].name : 'Non renseigné'}</p>
        </li>
    `;

    const contactDetail = document.getElementById('contactDetail');
    contactDetail.innerHTML = contactInfos;
    $(contactDetail).listview('refresh');
}




/*$(document).on("pagecreate", "#contact-list", function () {
    loadContacts();

    // Handle click event for the "Ajouter" button
    $(document).on("click", "#ajouterButton", function () {
        // Redirect to the contact-form page for adding a new contact
        $.mobile.changePage("#contact-form", { transition: "slide" });
        // Clear the form fields for a new contact
        clearContactForm();
    });

    // Handle click event for the contact list items
    $(document).on("click", "#contactList li a", function () {
        var contactId = $(this).data("contact-id");
        $.mobile.changePage("#contact-show", { transition: "slide" });
        getContact(contactId);
    });
});

$(document).on("pagecreate", "#contact-form", function () {
    $(document).on("submit", "#contactForm", function (event) {
        event.preventDefault();
        saveContact();
    });
});

$(document).on("pagecreate", "#contact-show", function () {
    $(document).on("click", "#modifierButton", function () {
        $.mobile.changePage("#contact-form", { transition: "slide" });
        loadContactDetailsForEdit();
    });

    $(document).on("click", "#supprimerButton", function () {
        deleteContact();
        $.mobile.changePage("#contact-list", { transition: "slide" });
    });
});

function loadContacts() {
    // Your existing code for loading contacts goes here
}

function getContact(contactId) {
    // Implement this function to retrieve contact details using the provided contactId
    // and populate the contact-show page with the details
}

function loadContactDetailsForEdit() {
    // Implement this function to load the current contact details into the contact-form for editing
}

function saveContact() {
    var contactId = $("#contactId").val();
    var contactData = {
        name: $("#name").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        organization: $("#organization").val()
    };

    if (contactId) {
        // Update existing contact
        // Implement the function to update the contact details
        updateContact(contactId, contactData);
    } else {
        // Add new contact
        // Implement the function to add a new contact
        addContact(contactData);
    }

    // Redirect to the contact-list page after saving
    $.mobile.changePage("#contact-list", { transition: "slide" });
}

function addContact(contactData) {
    // Implement this function to add a new contact using contactData
    // Make sure to store the new contact in your storage or API
}

function updateContact(contactId, contactData) {
    // Implement this function to update an existing contact with the provided contactId and contactData
    // Make sure to update the contact in your storage or API
}

function deleteContact() {
    var contactId = $("#contactId").val();
    // Implement this function to delete the contact with the provided contactId
    // Make sure to remove the contact from your storage or API
}

function clearContactForm() {
    // Implement this function to clear the form fields when adding a new contact
    $("#contactId").val("");
    $("#name").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#address").val("");
    $("#organization").val("");
}   */
