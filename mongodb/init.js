let DB_NAMESPACE = "wordle";

db.createUser({
  user: "wordle-user",
  pwd: "wordle-pass",
  roles: [
    {
      role: "readWrite",
      db: DB_NAMESPACE,
    },
  ],
});
