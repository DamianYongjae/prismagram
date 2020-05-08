import multer from "multer";

export const uploadMiddleware = multer({
  dest: "uploads/",
  limits: { fieldSize: 25 * 1024 * 1024 }
}).single("file");

export const uploadController = (req, res) => {
  const {
    file: { path }
  } = req;
  res.json({ path });
};
