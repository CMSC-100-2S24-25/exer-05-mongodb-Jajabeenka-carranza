const needle = require('needle');

//test for updating a student
const updateStudentData = {
    url: "http://localhost:3000/update",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    data: {
        fname: "Mary Jane"
    }
};

async function testUpdateStudent() {
    try {
        console.log("Sending request to update a student...");

        const response = await needle(updateStudentData.method, updateStudentData.url, updateStudentData.data, {
            headers: updateStudentData.headers
        });

        console.log("Response Status Code:", response.statusCode);
        console.log("Response Body:", response.body);
    } catch (error) {
        console.error("Error:", error);
    }
}

testUpdateStudent();