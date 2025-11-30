import { Client } from "pg";

export function createDbClient() {
  return new Client({
    connectionString: "postgres://conduit:conduit@localhost:5432/conduit",
  });
}
