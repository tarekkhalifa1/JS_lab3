alert("Hello, Phone Boook!");
let contacts = [];
let search = false;
let add = true;
do {
    let answer = prompt("Do you want to add contact or search ?");
    // user want to add new contact
    if (answer == "search") {
        search = true;
        add = false;
    } // user want to search contact
    else if (answer == "add") {
        search = false;
        add = true;
    } else {
        add = false;
        search = false;
        alert("Please choose add or search");
        location.reload();
    } // user didn't choose add or search 

    while (answer == 'add') {
        let new_contact = addContact();
        if (typeof new_contact == "string") {
            alert(new_contact);
        } //Invalid name or phone number

        if (typeof new_contact == "object") {
            alert("New contact added successfully!");
        }
        add = false;
        break;

    } // user want to add new contact


    while (answer == 'search') {
        let search_contact = searchContact();
        alert(search_contact);
        break;
    } // user want to search

} while (true); // infinity loop

function addContact() {
    let contact_name = prompt(`Please enter contact name`);
    if ((!isNaN(contact_name))) {
        return "Invalid Name";
    } // invalid input of name


    for (const contact of contacts) {
        if (contact_name == contact.name) {
            return "Contact already exists";
        } // contact name duplicated
    }


    let contact_phone = Number(prompt("Please enter contact phone"));
    if (isNaN(contact_phone)) {
        return "Invalid Phone Number";
    } // invalid input of number

    let new_contact = {
        "name": contact_name,
        "phone": contact_phone
    };
    contacts.push(new_contact);
    return contacts;

} // end of add contact function

function searchContact() {
    let contact_search = prompt("Please enter name or number for searching");
    let contact_found;
    if (contacts.length == 0) {
        return contact_found = "You don't have contacts please add contact first";
    } // empty contacts
    for (const contact of contacts) {
        if (contact_search == contact.name || contact_search == contact.phone) {
            return contact_found = `The number of ${contact.name} is: ${contact.phone}`;
        } else {
            return contact_found = "No contact found";
        } // contact not found
    }
    return contact_found;
} // end of search contact function