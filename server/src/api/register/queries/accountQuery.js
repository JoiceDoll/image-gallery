const registerAccount = ({ username, email, password }) => {
  return `INSERT INTO image_gallery.users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
};

module.exports = registerAccount;
