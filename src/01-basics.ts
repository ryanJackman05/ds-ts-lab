import {Friend, Colleague, ColleagueHistory } from './myTypes'

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

export const friends = [friend1, friend2];
//console.log(friends[1]);

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

export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

//console.log(colleagues.current[0]);
