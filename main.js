//Loops through the database and adds all of the emails into a new array
let emails = customer.customers.map(function (current, index) {  
    let mail = `${customer.customers[index].contacts.email}`;
    return mail
})
//Takes each email address and makes them all into one big string
let all = emails.join();

//Splits the string up so that each email address is it's own item in the array
let final = all.split(",")

console.log(final)