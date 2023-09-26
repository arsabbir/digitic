import { v2 as cloudinary } from "cloudinary";

// setup cloudinary
cloudinary.config({
  cloud_name: "drq2ieflq",
  api_key: "718961483599887",
  api_secret: "zaM4dfcS2djdofxgDNhLla_tABk",
});

export const ImageUpload = async (path) => {
  const result = await cloudinary.uploader.upload(path);
  return {
    url: result.secure_url,
    public_id: result.public_id,
    asset_id: result.asset_id,
  };
};

export const DeleteImage = async (data) => {
  // If want to extract public id from url
  // const publicId = data.match(/\/([^/]+)$/)[1].split(".")[0];

  await cloudinary.uploader.destroy(data); 
};

export const UpdateImage = async (oldImage, newpath) => {
  const public_id = oldImage.match(/\/([^/]+)$/)[1].split(".")[0];
  await cloudinary.uploader.destroy(public_id);
  const result = await cloudinary.uploader.upload(newpath);
  //   return
  return result.secure_url;
};
