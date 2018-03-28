let socket = process.env.socket || 8081;
let multer = require('multer');
let express = require('express');
let app = express();
let fs = require('fs');

const STATIC_PATH = process.env.UPLOAD_CONTENT || `${__dirname}/uploads`;

try {
  fs.mkdirSync(STATIC_PATH)
} catch(e) {

}

let upload = multer({ dest: STATIC_PATH });
app.use(express.static(STATIC_PATH));

app.post('/', upload.single('file'), (req, res) => {
  res.send({ id: req.file.filename });
})

app.listen(socket);
