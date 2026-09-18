// (Optional) Change the names below to your friends.
interface Friend {
    name: string;
    phone: string;
    age: number
}
interface Colleague {
    name: string;
    department: string;
    contact: {
        email: string;
        extension: number;
    };
}


const friend1: Friend = {
  name: "Mark Higgins",
  phone: "087-12345",
  age: 25,
};

const friend2: Friend = {
  name: "Patrica Njoku",
  phone: "086--12345",
  age: 31,
};

const friends = [friend1, friend2];
console.log(friends[1]);

//   -------------------
const colleague1: Colleague = {
  name: "Jodio Joestar",
  department: "Crime",
  contact: {
    email: "jstar@climbhigher.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "John Guy",
  department: "Finance",
  contact: {
    email: "jguy@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: "J. Geil",
  department: "HR",
  contact: {
    email: "hangedman@company.com",
    extension: 125,
  },
};
const colleagues = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);
