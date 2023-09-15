import { v2 as cloudinary } from "cloudinary";

// setup cloudinary
cloudinary.config({
  cloud_name: "drq2ieflq",
  api_key: "718961483599887",
  api_secret: "zaM4dfcS2djdofxgDNhLla_tABk",
});

export const ImageUpload = async (path) => {
  const result = await cloudinary.uploader.upload(path);
  return result.secure_url;
};

export const DeleteImage = async (data) => {
  const publicId = data.match(/\/([^/]+)$/)[1].split(".")[0];
  await cloudinary.uploader.destroy(publicId);
};

export const UpdateImage = async (oldImage, newpath) => {
  const publicId = oldImage.match(/\/([^/]+)$/)[1].split(".")[0];
  await cloudinary.uploader.destroy(publicId);
  const result = await cloudinary.uploader.upload(newpath);
  //   return
  return result.secure_url;
};
