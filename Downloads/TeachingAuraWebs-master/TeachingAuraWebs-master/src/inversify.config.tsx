import { Container } from "inversify";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence } from "firebase/auth";
import { browserLocalPersistence } from "@firebase/auth";
import { SignInDetails } from "./LoginFlow/SignInDetails";
import { setupCache } from "./axios-cache-adapter";

let host;
// host = "AIzaSyAFuAa7gKWj17sLuUxjtwjthLwlDK3eXOM"; // local run
host='AIzaSyCTgXHkzmmOgbbS_wdEtFqR6WfmsabsFd0' // public host run


function configureFirebase() {
  const firebaseConfig = {
    apiKey: host,
    authDomain: "teachingaura.firebaseapp.com",
    databaseURL: "https://teachingaura-default-rtdb.firebaseio.com",
    projectId: "teachingaura",
    storageBucket: "teachingaura.appspot.com",
    messagingSenderId: "193861770454",
    appId: "1:193861770454:web:6ff42e6afbaba7b1473d77",
    measurementId: "G-RXVDCP3SLF",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  setPersistence(getAuth(), browserLocalPersistence);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// https://teachingaura-dk6fq7sbfa-uc.a.run.app/api/
configureFirebase();
const signInDetails = new SignInDetails();
const URL = "https://teachingaura-dk6fq7sbfa-uc.a.run.app/api/";
// const URL = 'http://localhost:8080/api/';
export const cache = setupCache({
  maxAge: 5 * 60 * 1000,
});

export const axiosApiInstance = axios.create({
  baseURL: URL,
  adapter: cache.adapter,
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    return await addTokenToRequest(config);
  },
  (error) => {
    Promise.reject(error);
  }
);

async function addTokenToRequest(config: AxiosRequestConfig) {
  let token = signInDetails.token;
  signInDetails.updateRole(localStorage.getItem('role'))
  while (token == undefined) {
    await sleep(2000);
    token = signInDetails.token;
  }
  config.headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  return config;
}

axios.interceptors.request.use(
  async (config) => {
    return await addTokenToRequest(config);
  },
  (error) => {
    Promise.reject(error);
  }
);

const appContainer = new Container();
appContainer.bind<AxiosInstance>("client").toConstantValue(axiosApiInstance);
appContainer
  .bind<SignInDetails>("signInDetails")
  .toConstantValue(signInDetails);

export { appContainer };
