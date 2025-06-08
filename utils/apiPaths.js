export const API_PATHS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    GET_USER_INFO: "/api/auth/getUserInfo",
  },
  DASHBOARD: {
    GET_DATA: "/api/dashboard",
  },  INCOME :{
        ADD_INCOME :"/api/income/add",
        GET_INCOME :"/api/income",
        DELETE_INCOME : (incomeId) => `/api/income/delete/${incomeId}`,
        DOWNLOAD_INCOME :`/api/income/downloadexcel`, 

    },
     EXPENSE :{
        ADD_EXPENSE :"/api/expense/add",
        GET_EXPENSE :"/api/expense",
        DELETE_EXPENSE : (expenseId) => `/api/expense/delete/${expenseId}`,
        DOWNLOAD_EXPENSE :`/api/expense`, 
    },
    IMAGE :{
        UPLOAD_IMAGE: "/api/auth/upload-image",
        
    }
};

