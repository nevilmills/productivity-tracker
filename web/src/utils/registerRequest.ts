import { UserValues } from "./types";

const serverAddress = "http://www.localhost:4000/";
const resource = "register";

export const register = (values: UserValues) => {
  const params = `username=${values.username}&password=${values.password}`;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", serverAddress + resource, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(params);
  xhttp.onreadystatechange = function () {
    //Successful login
    if (this.readyState === 4 && this.status === 200) {
      console.log("Server response: ", this.responseText);
    }
  };
};
