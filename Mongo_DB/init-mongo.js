db.createUser({
  user: "user",
  pwd: "piyush",
  roles: [
    {
      role: "readWrite",
      db: "test"
    }
  ]
});