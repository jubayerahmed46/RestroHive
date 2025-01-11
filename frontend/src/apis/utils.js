import axios from "axios";

async function uploadImgInCloudinary(imgFile) {
  const formData = new FormData();
  formData.append("file", imgFile);
  formData.append("upload_preset", import.meta.env.VITE_cloudinary_preset);

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_cloud_name
    }/image/upload`,
    formData
  );

  return data;
}

export function urlReducer(url) {
  if (url <= 15) {
    return url;
  }

  if (url) {
    return url.substring(0, 10).concat("...").concat(url.slice(-8));
  }
}

export default uploadImgInCloudinary;
