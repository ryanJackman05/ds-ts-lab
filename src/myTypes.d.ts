
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
