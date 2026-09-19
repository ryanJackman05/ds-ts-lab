import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}
console.log("\n\nOLDER")
console.log(older(friends[0]))

function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log("\n\nHIGHEST EXTENSION")
console.log(highestExtension(colleagues.current))

function addColleague(cs: Colleague[], name: string, department: string, email: string) : void {
    cs.push({ name, department, contact: { email, extension: cs.length + 200 } });
}
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log("\n\nADD COLLEAGUE")
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number // optional parameters can be written right into the declaration
): EmailContact[] {
  let end = colleagues.length
  if (max !== undefined) {
    end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log("\n\nSORT COLLEAGUES")
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(
    friends: Friend[],
    condition: (f: Friend) => boolean
): Friend[] {
    return friends.filter(condition);
}
console.log("\n\nFIND FRIENDS")
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

function addInterest(f: Friend, interest: string) {
    if (!f.interests) {
        f.interests = [];
    }
    if(!f.interests.includes(interest)){
        f.interests.push(interest);
    }
    return f.interests;
}
console.log("\n\nADD INTEREST")
console.log(addInterest(friends[1], 'Politics'))
console.log(addInterest(friends[0], 'Gaming'))
