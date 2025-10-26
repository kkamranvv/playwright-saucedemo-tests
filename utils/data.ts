export interface User {
  username: string;
  password: string;
}

export interface CheckoutInfo {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export const userData: Record<
  "validUser" | "invalidUser" | "lockedUser",
  User
> = {
  validUser: {
    username: "standard_user",
    password: "secret_sauce",
  },
  invalidUser: {
    username: "invalid_user",
    password: "wrong_password",
  },
  lockedUser: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
};

export const checkoutData: Record<"valid" | "invalid", CheckoutInfo> = {
  valid: {
    firstName: "Kamran",
    lastName: "Musadirli",
    postalCode: "AZ1000",
  },
  invalid: {
    firstName: "",
    lastName: "Musadirli",
    postalCode: "",
  },
};
