import { APIConfig } from "../config";

export const getTodos = () => {
  return fetch(`${APIConfig.API.endpoints[0].endpoint}todos`)
    .then((res) => res.json())
    .then((json) => {
      return { json };
    });
};

export const getToken = () => {
  return fetch(`${APIConfig.API.endpoints[1].endpoint}auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "userA", password: "passwA!1" }),
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

.... TMDB endpoint fetch methods ......