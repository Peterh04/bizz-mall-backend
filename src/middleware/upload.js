import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedExts = /jpeg|jpg|png|gif/;

  const extName = allowedExts.test(
    path.extname(file.originalname).toLowerCase(),
  );

  const mimeType = /image\/(jpeg|jpg|png|gif)/.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

export const upload = multer({ storage, fileFilter });
