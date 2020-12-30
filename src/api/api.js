import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "api-key": "ee70f16a-44fa-47ae-84d0-420385aff71b",
  },
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const profileAPI = {
  getUserID(userID) {
    return instance.get(`profile/${userID}`).then((response) => response.data);
  },
  getUserStatus(userID) {
    return instance
      .get(`profile/status/${userID}`)
      .then((response) => response.data);
  },
  updateUserStatus(status) {
    return instance
      .put(`profile/status`, { status })
      .then((response) => response.data);
  },
};

export const followAPI = {
  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};
