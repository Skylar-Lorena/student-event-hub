function createLoginTracker(userInfo) {
  let attempts = 0;
  let isLocked = false;

  const login = (username, password) => {
    if (isLocked) {
      return "Account is locked.";
    }

    if (
      username === userInfo.username &&
      password === userInfo.password
    ) {
      return "Login successful!";
    } else {
      attempts++;

      if (attempts >= 3) {
        isLocked = true;
        return "Account locked!";
      }

      return `Attempts left: ${3 - attempts}`;
    }
  };

  return login;
}

// TEST CODE
const user = { username: "admin", password: "1234" };
const login = createLoginTracker(user);

console.log(login("admin", "wrong"));
console.log(login("admin", "wrong"));
console.log(login("admin", "wrong"));
console.log(login("admin", "1234"));
