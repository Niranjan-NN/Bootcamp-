// filterUsers.js

// Sample array of user objects
const users = [
    { name: "Reva", age: 30 },
    { name: "jagadesh", age: 22 },
    { name: "Visa", age: 27 },
    { name: "Niranjan", age: 27 },
    { name: "Dinesh", age: 29 },
  ];
  
  // Filter users older than 25
  const filteredUsers = users.filter(user => user.age > 25);
  
  // Display the filtered array
  console.log("Users older than 25:");
  console.log(filteredUsers);
  