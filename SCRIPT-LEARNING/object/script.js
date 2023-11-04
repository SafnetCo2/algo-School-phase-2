let user = {
    name: 'john',
    age: '40',
    school: 'byui'
};
for (let key in user) {
    alert(key);
    alert(user[key])
}
//ordered list
let codes = {
    '3': 'kenya',
    '4': 'nairobi',
    '56': 'london',
    '50': 'kenya',
    
};
for (code in codes) {
    alert(code);
    alert(codes[code]);
}

let persons = {}
    persons.name = 'Tom';
persons.age = 30;
persons.place = 'Machakos';
persons.name = 'OO'
    delete persons.name 
