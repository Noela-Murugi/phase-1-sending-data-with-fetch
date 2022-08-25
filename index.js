// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject);

// const submitData = {
//     name: "Noela",
//     email: "noela@gmail.com",
//   };

//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(submitData),
//   };

//   fetch("http://localhost:3000/users", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });

function submitData(userName, userEmail) {
const dataSubmit = {
    name: userName,
    email: userEmail,
};

const methodObj={
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
            },
    body: JSON.stringify(dataSubmit)
};
return fetch('http://localhost:3000/users', methodObj)
.then(response => response.json())
.then(users => {
    const newUserId = document.createElement('h1');
    const body = document.querySelector('body');
    newUserId.textContent = users.id;
    body.appendChild(newUserId);
    console.log(users);
})
.catch(function (error) {
 document.body.innerHTML = error.message
})

}

