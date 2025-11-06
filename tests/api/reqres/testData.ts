interface TestData {
  auth: {
    login: { email: string; password: string };
    logout: {};
    register: { email: string; password: string };
  };
  clerkEmail: { email: string };
  resource: {
    updatePut: { name: string; year: number };
    updatePatch: { color: string };
  };
  users: {
    updatePut: { email: string; firstName: string; lastName: string };
    updatePatch: { lastName: string };
  };
}

export const testData: TestData = {
  auth: {
    login: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    logout: {},
    register: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
  },
  clerkEmail: {
    email: "user@example.com",
  },
  resource: {
    updatePut: {
      name: "Kamran",
      year: 2008,
    },
    updatePatch: {
      color: "#FFF2",
    },
  },
  users: {
    updatePut: {
      email: "kamran@gmail.com",
      firstName: "Kamran",
      lastName: "Musadirli",
    },
    updatePatch: {
      lastName: "Nasiyati",
    },
  },
};
