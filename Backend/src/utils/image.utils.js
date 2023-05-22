import "dotenv/config.js";
const API_URL = process.env.API_URL;
const publicUrl = {
  profileImage: (imageName) => {
  
    return `${API_URL}/public/profile_image/${imageName}`;
  },
  document: (imageName) => {
    return `${API_URL}/public/document/${imageName}`;
  }
};

export const profileImage = publicUrl.profileImage;
export const document = publicUrl.document;

