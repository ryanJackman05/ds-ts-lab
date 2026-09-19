import {
  ColleagueV2,
  Friend,
  Buddy,
  BuddyList,
  Administrator,
} from "./myTypes";
import { friends } from "./01-basics";

const colleague1: ColleagueV2 = {
  name: "Jodio Joestar",
  department: "Crime",
  contact: {
    email: "jstar@climbhigher.com",
    extension: 121,
  },
};

const colleague2: ColleagueV2 = {
  name: "John Guy",
  department: "Finance",
  contact: {
    email: "jguy@company.com",
    extension: 132,
  },
};

const colleague3: ColleagueV2 = {
  name: "J. Geil",
  department: "HR",
  contact: {
    email: "hangedman@company.com",
    extension: 125,
  },
};


function makeBuddyList(
  name: string,
  buddies: Buddy[],
  admin?: Administrator
): BuddyList {
  return {
    name,
    members: buddies,
    administrator: admin,
  } as BuddyList;
  // The as operator above casts an object to a specific type.
}
// Tests for makeBuddyList
const myFootballBuddies = makeBuddyList(
  "Football team",
  [colleague1, friends[0], colleague2],
  colleague1
)

const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague1, friends[1]]
    // No administrator
)

console.log("\n\nBUDDY LISTS")
console.log(myFootballBuddies)
console.log(myBandBuddies)
//--------------------------------------
function findBuddyContact(list: BuddyList, name: string): string | undefined {
  for (const buddy of list.members) {
    if (buddy.name === name) {
      if ("phone" in buddy) {
        return buddy.phone; // buddy is inferred as Friend
      }
      else {
        return buddy.contact.email; // buddy is inferred as ColleagueV2
      }
    }
    return undefined;
  }
}
// Test for findBuddyContact.
console.log("\n\nFIND BUDDY CONTACT")
console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Jodio Joestar"));


function getBuddyListFriends(list: BuddyList): Friend[] {
  const result: Friend[] = [];
  for (const buddy of list.members) {
    if ("phone" in buddy) {
      result.push(buddy); // buddy is inferred as Friend
    }
  }
  return result;
}
console.log("\n\nGET BUDDY LIST FRIENDS")
console.log("Friends in football team: ", getBuddyListFriends(myFootballBuddies));
console.log("Friends in band: ", getBuddyListFriends(myBandBuddies));