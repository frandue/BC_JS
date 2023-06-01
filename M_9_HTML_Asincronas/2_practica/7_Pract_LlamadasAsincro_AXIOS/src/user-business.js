const AvatarBusiness = require("./avatar-business");

function getFullName(user) {
  return user.login;
}

function getUserNode(user) {
  const node = document.createElement("div");
  node.appendChild(AvatarBusiness.getAvatar(user));
  node.append(getFullName(user));

  return node;
}

export { getFullName, getUserNode };