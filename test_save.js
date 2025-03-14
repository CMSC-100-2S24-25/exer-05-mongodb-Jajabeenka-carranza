import needle from 'needle';

//test data
const testData = {
    url: "http://localhost:3000/save-student",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    data: {
        stdnum: "8051495845",
        fname: "Mary Jane",
        lname: "Watson",
        age: 21
    }
};

//testing save student
async function testSaveStudent() {
    try {
        console.log("Sending request to save a student...");

        const response = await needle(testData.method, testData.url, testData.data, {
            headers: testData.headers
        });

        console.log("Response Status Code:", response.statusCode);
        console.log("Response Body:", response.body);
    } catch (error) {
        console.error("Error:", error);
    }
}

testSaveStudent();