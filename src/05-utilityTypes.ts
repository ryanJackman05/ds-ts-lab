import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend { // applies all fields from the Partial to the Object
  return { ...friend, ...updates} // {  } is the object literal syntax. It creates an Object, plain and simple.
                                    // The spread operator ... expands any iterable data. In this case, it takes all the fields from the two input objects and adds them to the new Object. 
                                    // There is also an implicit cast happening here, which should succeed because our created object contains at least all of the mandatory fields of a Friend.
                                    // Note: If there are any duplicate fields, the last one wins.
}
console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(
  friends: Friend[],
  criteria: (f: Friend) => boolean
): SecureFriendContact[] {
  const matches = friends.filter(criteria);
  return matches.map((f) => {
    const secure: SecureFriendContact = {
      name: f.name,
      phone: f.phone,
    };
    return secure;
  });
}
let result = secureFindFriends(
    friends,
    (f: Friend) => f.age < 30
)
console.log(result)

function generateEventPass(colleague: Colleague): EventPass {
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}
console.log(generateEventPass(colleagues.current[0]));
    