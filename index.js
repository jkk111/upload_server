let socket = process.env.socket;
let multer = require('multer');
let express = require('express');
let app = express();

const STATIC_PATH = process.env.UPLOAD_CONTENT;
let upload = multer({ dest: STATIC_PATH });
app.use(STATIC_PATH);

app.post('/', multer.single('file'), () => {
  res.send('OK');
})

app.listen(socket);
