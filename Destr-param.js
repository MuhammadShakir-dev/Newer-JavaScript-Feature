// Destructuring parameters. 
// commonly used with objects.


let user = {
    fname : "Muhammad",
    lname : "Shakir",
    email : "MuhammadShakirdev@gmail.com",
    country : "Paksitan",
    age : 22
}

function userName(user){
    console.log(`${user.fname} ${user.lname}`);
}

userName(user); // Muhammad Shakir;

// lets do this with destructuring parameter;

function usrName(user){
    const {fname, lname} = user;
    return `${fname} ${lname}`;
}

console.log(usrName(user)); // // Muhammad Shakir;

// lets do this with another example.

let usrDetails = ({fname,lname,country}) => {
    return `User full name is : ${fname} ${lname}. He is ${country} citizen`;
}

console.log(usrDetails(user));


// lets destructure arry method using destructuring parameters.

let movies = [
    {
        title : "Superman",
        rating : 9.3
    },
    
    {
        title : "Batman",
        rating : 9.5
    },
    
    {
        title : "Aquman",
        rating : 9.0
    },
    
    {
        title : "SpiderMan",
        rating : 9.0
    }
    ];
    

// using filter method filter out the movies above 9.2 rating.

let bestMovies = movies.filter(({rating}) => {
    return rating > 9.2;
});

console.log(bestMovies);

// using map method modifed the array printing.

let movieDsc = movies.map(({title,rating}) => {
    return `Movie ${title} and there rating is ${rating}`;
});

console.log(movieDsc);





