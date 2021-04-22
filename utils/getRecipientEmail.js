const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((userToFilter) => userToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;

// getrecipientEmial function for Chat
// collect the first letter of recipient


