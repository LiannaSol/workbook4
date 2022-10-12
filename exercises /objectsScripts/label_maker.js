let contact = {
    name: "Lianna Liriano",
    addressLine1: "3901 suitland rd.",
    state:"Maryland",
    city: "Suitland",
    zip: 20716
};

function printContact(myInfo) {
    console.log(myInfo.name);
    console.log(myInfo.addressLine1);
    console.log(myInfo.city + "," + myInfo.state + " " + myInfo.zip);
    console.log( `${myInfo.city}, ${myInfo.state} `);
}

printContact(contact)