"use strict";

let info;

class AddressBook {
    constructor(contacts) {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info); //pushes the info to the end of the array
        
    }
    deleteAt(index) {
        this.contacts.splice(index,1);
    }
    print() {
        for(let i = 0; i < this.contacts.length; i++){
            console.log(this.contacts[i]);
        }
    }
    deleteByName(name){ 
        this.contacts.splice(this.contacts.indexOf(name),1);
    }
}

class Contact {
    constructor(name, email, relation, phone) {
        this.name = name;
        this.email = email;
        this.relation = relation;
        this.phone = phone;
    }
}

const book = new AddressBook(); // creates new address book

while (true){
    const choice = prompt("Would you like to Add, Print, Delete, Search (by name), or Quit?")
    if (choice === "add"){ // if add is selected
        const name = prompt("Enter name"); // temporary var that is set to prompt
        const email = prompt("Enter email"); // temp
        const relation = prompt("Enter relation"); // temp
        const phone = prompt("Enter phone number"); // temp
        book.add(new Contact(name, email, relation, phone)); // Creates new class of contact and then transfers the info to the function add
    } else if (choice === "print") {
        book.print();
    } else if (choice === "delete") {
        book.deleteAt(prompt("What index?"));
    } else if (choice === "quit") {
        break;
    } else if (choice === "search"){
        book.deleteByName(prompt("enter name to delete"));
    } 
}