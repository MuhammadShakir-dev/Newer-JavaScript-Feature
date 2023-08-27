// spreading with objects.

// the use of spread operator is to move some data from one source to another destinition.

let dataFromForm = {
    email : "MuhammadShakirdev@gmail.com",
    pas : 123102393,
    age : 23,
    gender : "Male"
}

// now lets copy the the above object data and make a new object with some additional details.

let newUserData = {...dataFromForm, id : 1099, idAdmin : true};
console.log(newUserData);
