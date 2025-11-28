export interface User {
  username: string;
  password: string;
}

export const userData: Record<"validUser" | "invalidUser", User> = {
  validUser: {
    username: "Admin",
    password: "admin123",
  },
  invalidUser: {
    username: "Admin",
    password: "admin1234",
  },
};

export interface AddEmployee {
  firstName: string;
  lastName: string;
  middleName?: string;
  employeeId: number;
  employeePhoto: string;
}

export interface LoginDetails {
  username: string;
  password: string;
}

export interface SearchEmployee {
  name: string;
  employeeId: number;
}

export const employee = {
  AddEmp: {
    firstName: "Kamran",
    lastName: "Musadirli",
    employeeId: Math.floor(Date.now() / 1000),
    employeePhoto: "tests/ui/orangehrm/images/correctFormatAvatar.jpg",
  } as AddEmployee,

  AddEmpWithLogin: {
    username: "kkamranvv",
    password: "kamik123",
  } as LoginDetails,

  SearchEmp: {
    name: "Kamran Musadirli",
    employeeId: 999888,
  } as SearchEmployee,
};

export interface AddUser {
  username: string;
  password: string;
  confirmPassword: string;
}

let password = "kamran123";

export const admin = {
  addUserInfo: {
    username: "kkamranvv" + Math.floor(Date.now() / 1000),
    password: password,
    confirmPassword: password,
  } as AddUser,
};

export interface CandidateInfo {
  firstName: string;
  middleName?: string | undefined;
  lastName: string;
  email: string;
  contact: string;
  resume: string;
  keywords: string;
  date: string;
  notes: string;
}

export const candidate = {
  addCandidateInfo: {
    firstName: "Kamran",
    middleName: "dds",
    lastName: "Musadirli",
    email: "kamrantest@gmail.com",
    contact: "739438496",
    resume: "tests/ui/orangehrm/files/testResume.docx",
    keywords: "programmer, tester",
    date: "2025-24-11",
    notes: "Test Note",
  } as CandidateInfo,
};
