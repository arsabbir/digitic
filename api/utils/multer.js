import multer from "multer";
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.fieldname);
  },
});

export const CategoryMulter = multer({ storage }).single("category-photo");
export const BrandMulter = multer({ storage }).single("brand-photo");
export const ProductMulter = multer({ storage }).array("productPhotos");
