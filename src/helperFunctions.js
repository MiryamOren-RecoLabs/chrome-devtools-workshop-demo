import axios from 'axios';

export const getCookie = (_name) => {
    if (typeof window === 'object') {
        let name = _name + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }
  };

export const getDataFromServer = async () => {
    try {
      // successful response
      await axios.get("https://run.mocky.io/v3/4b8b16ce-3c2c-4f3e-8524-1ada0a379b1d");
    } catch (error) {
        console.error(error)
    }
    try {
        // failed response
        await axios.get("https://run.mocky.io/v3/bc9f0457-037f-4b8a-b4e2-e7fc5f99687c");
    } catch (error) {
        // do nothing
    }
  }

export const sum = (a, b) => {
    const res = a + a;
    return res;
  }
  
export const thisFunctionIsCausingError = (number) => {
    return number.map(i => i / 2);
  }