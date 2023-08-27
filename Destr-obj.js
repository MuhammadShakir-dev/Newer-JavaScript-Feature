    // Destructuring objects .
    
    let userInfo = {
        name : "Muhammad Shakir",
        country : "Pakistan",
        email : "MuhammadShakirdev@gmail.com",
        born : 2001,
        gender : "Male",
        education : "BS-Software Eng",
        profession : "Front-end Web Developer" 
    }
    
    // now old way of doing this .
     let userName  = userInfo.name;
     let userCountry = userInfo.country;
     
     console.log(`User name is  : ${userName}`);
     console.log(`User country is  : ${userCountry}`);
     
     // new way of doing this.
     // in this way you have to give your varible the same name as your object property have.
     const {name,country,email} = userInfo;
     console.log(`User name is  : ${name}`);
     console.log(`User country is  : ${country}`);
     console.log(`User email is  : ${email}`);
     
     // if you want to change the name of your variable then.
     
     const {name : usrName, born : BirthDate} = userInfo;
     console.log(`User name is  : ${usrName}`);
     console.log(`User birth date is  : ${BirthDate}`);
     
     // if you want to add some property in your obj using this technique.
    
    const {height = 5.9} = userInfo;
    console.log(`user Height is : ${height}`);
    
