function chatroomStatus(users) {
    const count = users.length;

    if (count === 0) {
        return "no one online";
    } else if (count === 1) {
        return `${users[0]} online`;
    } else if (count === 2) {
        return `${users[0]} and ${users[1]} online`;
    } else {
        return `${users[0]}, ${users[1]} and ${count - 2} more online`;
    }
}

console.log(chatroomStatus([])); 
console.log(chatroomStatus(["paRIE_to"])); 
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])); // ➞ "pap_ier44, townieBOY and 4 more online"
