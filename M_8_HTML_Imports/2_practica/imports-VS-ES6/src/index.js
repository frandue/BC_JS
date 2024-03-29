import * as DataBusiness from "./data-business"
import * as UserBusiness from "./user-business"

const users = DataBusiness.getUsers();

const nodes = [];

for (let user of users) {
    const node = UserBusiness.getUserNode(user);
    nodes.push(node);
}
    
for (let node of nodes) {
    document.getElementById("root").append(node);
}
    
