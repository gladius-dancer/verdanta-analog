import axios from "axios";

export const GetFileService = async (url, thunkAPI) => {
  try {
    const { data: response } = await axios.get(url, { responseType: "blob" });
    const file = new File([response], url, {
      type: response?.type,
    });

    let dt = new DataTransfer();
    dt.items.add(file);
    let file_list = dt.files;

    return file_list;
  } catch (e) {
    console.log(e);
  }
};
