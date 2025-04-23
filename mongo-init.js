db.auth('root', 'example')

db.createUser(
        {
            user: "user",
            pwd: "pass",
            roles: [
                {
                    role: "readWrite",
                    db: "test_db"
                }
            ]
        }
);
