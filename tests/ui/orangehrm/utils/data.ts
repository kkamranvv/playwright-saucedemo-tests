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
};
