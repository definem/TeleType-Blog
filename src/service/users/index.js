import api from "../axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

const useUsersApi = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  const signUp = async (data) => api.post("/user/signup", data);
  const getAllUsers = async () => api.get("/user");
  const getOneUserById = async (id) => api.get(`/user/${id}`);
  const followToUser = async (data) => api.post(`/follow`, { ...data }, config);
  const editProfileUser = async (data, id) =>
    api.patch(`/user/${id}`, { ...data }, config);
  return {
    signIn,
    signUp,
    getAllUsers,
    getOneUserById,
    followToUser,
    editProfileUser,
  };
};

export default useUsersApi;
