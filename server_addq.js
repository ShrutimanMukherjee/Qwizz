const http = require("http");
const querystring = require('querystring');
    const fs = require("fs");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    if (req.method === "POST") {
        // console.log(req);
        console.log("POST Received");
        body="";
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            const postData = querystring.parse(body);
            const questionVal = postData.question || 'No question provided';

            fs.readFile('data.json', (err, data) => {
                const jsonData = JSON.parse(data);
                console.log(jsonData);
                console.log("-----------");
                console.log(err);
                console.log("-----------");
                
                console.log({
                    "question": postData.question,
                    "choice1": postData.choice1,
                    "choice2": postData.choice2,
                    "choice3": postData.choice3,
                    "choice4": postData.choice4,
                    "answer": parseInt(postData.answer)
                });
                jsonData.qlist.push({ 
                    "question": postData.question,
                    "choice1": postData.choice1,
                    "choice2": postData.choice2,
                    "choice3": postData.choice3,
                    "choice4": postData.choice4,
                    "answer": parseInt(postData.answer)
                 });

                const updatedData = JSON.stringify(jsonData, null, 2);
                fs.writeFile('data.json', updatedData, (err) => {
                    if (err) {
                        console.error('Error writing file:', err);
                    } else {
                        console.log('Data appended successfully!');
                    }
                });
                
            });

            res.setHeader('location', 'http://localhost:3000/admin_home.html');
            res.statusCode = 302;
            res.end(`Response received: ${questionVal}`);
        });
    } 
    else {
        console.log("Not Post");
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});