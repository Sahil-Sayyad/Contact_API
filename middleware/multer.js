const multer = require("multer");
//file size restriction file size must under 100kb
const maxSize = 100 * 1024; // 100KB
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage, limits: { fileSize: maxSize } });

module.exports = upload;
