
export interface Friend {
    name: string;
    phone: string;
    dob? : Date;   // New optional
    age: number;
    interests? : string[]   // New optional
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
}

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
    name: string;
    email: string
}

export type Department = "Crime" | "Finance" | "HR"; // value restriction
export interface ColleagueV2 {
  name: string;
  department: Department;    // must be one of three departments above
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2; // Buddy is alias for either a Friend or a ColleagueV2
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

export type FriendPartial = Partial<Friend> // a Partial of type Friend, i.e. all properties are optional
// Type for gaining access to an event, e.g. concert.
export type EventPass = Omit<Colleague, "contact"> & { // an Omit of type Colleague, i.e. all properties except contact
  passCode : number;
}
// Immutable person type, based on Friend type.
export type SecureFriendContact = Readonly<Pick<Friend,"name" | "phone" > > // a Pick of type Friend, i.e. only name and phone are included, also set as readonly
