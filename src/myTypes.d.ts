
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
