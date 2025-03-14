const needle = require('needle');

//test data for removing all users
const removeAllUsersData = {
    url: "http://localhost:3000/remove-all-user",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    data: {}
};

async function testRemoveAllUsers() {
    try {
        console.log("Sending request to remove all users...");

        const response = await needle(removeAllUsersData.method, removeAllUsersData.url, removeAllUsersData.data, {
            headers: removeAllUsersData.headers
        });

        console.log("Response Status Code:", response.statusCode);
        console.log("Response Body:", response.body);
    } catch (error) {
        console.error("Error:", error);
    }
}

testRemoveAllUsers();