function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  return (passwordAttempt) => {

     if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed attempts";

    } 

    attemptCount++;

    if (passwordAttempt === userInfo.password && attemptCount <= maxAttempts) {
      return "Login successsful ";

    }

    if (attemptCount <= maxAttempts) {
      return `${attemptCount} attempt, Login failed`;
    }

  };

}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};