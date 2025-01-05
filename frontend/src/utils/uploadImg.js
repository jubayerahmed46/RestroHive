import axios from "axios";

async function uploadImg(img) {
  const formData = new FormData();
  formData.append("image", img);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`,
    formData
  );

  return data?.data?.display_url;
}
export default uploadImg;
