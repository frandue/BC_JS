import * as DataBusiness from "./src/data-business"
import * as UserBusiness from "./src/user-business"

const users = DataBusiness.getUsers();

const nodes = [];

for (let user of users) {
    const node = UserBusiness.getUserNode(user);
    nodes.push(node);
}
    
for (let node of nodes) {
    document.getElementById("root").append(node);
}
    
