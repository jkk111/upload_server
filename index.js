let socket = process.env.socket;
let multer = require('multer');
let express = require('express');
let app = express();
let fs = require('fs');

const STATIC_PATH = process.env.UPLOAD_CONTENT;

try {
  fs.mkdirSync(STATIC_PATH)
} catch(e) {

}

let upload = multer({ dest: STATIC_PATH });
app.use(express.static(STATIC_PATH));

app.post('/', multer.single('file'), () => {
  res.send('OK');
})

app.listen(socket);
