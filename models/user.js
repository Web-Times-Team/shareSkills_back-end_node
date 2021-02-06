// replace class by simple object javascript 
// how store function 
class User {
    constructor(id,
        username,
        lastname,
        firstname,
        dateOfBirth,
        password,
        email,
        country,
        region,
        city
    ) {
        this.id = id;
        this.username = username;
        this.lastname = lastname;
        this.firstname = firstname;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.email = email;
        this.country = country;
        this.region = region;
        this.city = city;
    }
}

/**
 * add futur functions to prototype of class User
 * 
 * example
 * User.prototype.Addprice = function(Arice) {
    this.price + Aprice
}
*/
class Sharer {
    constructor(id) {
        this.id = id;
    }
}

class Teacher {
    constructor(id, price) {
        this.id = id;
        this.price = price;
    }
}

class Employer {
    constructor(id, companyName) {
        this.id = id;
        this.company = companyName;
    }
}

exports.User = User;
exports.Sharer = Sharer;
exports.Teacher = Teacher;
exports.Employer = Employer;