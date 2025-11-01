export const endpoints = {
  users: "users",
  resource: "resource",
  userById: (id: number) => `users/${id}`,
  resourceId: (id: number) => `resource/${id}`,
  login: "login",
  register: "register",
  logout: "logout",
  link: "clerk/link-pro",
  autoLink: "clerk/auto-link-pro",
  unlink: "clerk/unlink-pro",
};
