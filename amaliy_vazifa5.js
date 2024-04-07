let users = [];
// CREATE - ma'lumot qo'shish
function addUser(userData) {
    users.push(userData);
}
// READ - ma'lumot qidirish.
function getUser(query) {
    return users.find(user => user.name === query || user.email === query || user.phone === query);
}
// UPDATE - bitta userni index bo'yicha aniqlab ma'lumotlarini yangilash uchun ishlatiladi.
function editUser(index, userData) {
    if (index >= 0 && index < users.length) {
        users[index] = { ...users[index], ...userData };
    }
}
function deleteUser(index) {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
    }
}
addUser({ name: "Laylo", email: "laylo@example.com", phone: "123456789", password: "password1" });
addUser({ name: "Mushtariy", email: "mushtariy@example.com", phone: "987654321", password: "password2" });

console.log(users);

console.log(getUser("laylo@example.com"));
editUser(0, { phone: "987654321" });
console.log(users);

deleteUser(1);
console.log(users);
