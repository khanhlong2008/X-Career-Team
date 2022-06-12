const host = "http://localhost:5000";
export const Request_User = {
  register: `${host}/auth/register`, //post
  login: `${host}/auth/login`, //post
  topvoucher: `${host}/voucher/top`, //get
  voucher: `${host}/voucher/find`, //get
};

export const Request_Admin = {
  getvoucher: `${host}/voucher?`, //get
  getcategory: `${host}/category/all`,
  getcategoryID: `${host}/category/`,
};
