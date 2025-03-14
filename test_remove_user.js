const needle = require('needle');

//test data for removing a specific user
const removeUserData = {
    url: "http://localhost:3000/remove-user",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    data: {
        stdnum: "8051495845" //student number of the user to remove change it for own testing
    }
};

async function testRemoveUser() {
    try {
        console.log("Sending request to remove a user...");

        const response = await needle(removeUserData.method, removeUserData.url, removeUserData.data, {
            headers: removeUserData.headers
        });

        console.log("Response Status Code:", response.statusCode);
        console.log("Response Body:", response.body);
    } catch (error) {
        console.error("Error:", error);
    }
}

testRemoveUser();