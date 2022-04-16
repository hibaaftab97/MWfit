import React, { useState } from 'react';
import { store } from '../store/index';
import { View, Image, TouchableOpacity } from 'react-native';

// import Toast from 'react-native-toast';

import Toast from 'react-native-simple-toast'
const TAG = '__API__';
export const LOG = (label, data) => {
  if (__DEV__) {
    console.log(TAG + `__${label}__ :`, data);
  }
};

export const showToast = msg => {
  console.log('messa',msg);
  presentToast(getMessage(msg));
 
};

export const showGlobalToast = msg => { };
export const presentToast = message => {
 
  Toast.show(message);
  //   // EventRegister.emit(events.showToast, getMessage(message))
};
export const handleResponse = ({ response, jsonResponse }) => {
  console.log('response.status : ', response.status);

  switch (response.status) {
    case 200:
    case 201: {
      if (
        jsonResponse.hasOwnProperty('errors') ||
        jsonResponse.hasOwnProperty('error')
      ) {
        if (jsonResponse.error != false) {
          const message = getMessage(jsonResponse);
          return Promise.reject(message);
        } else {
          return Promise.resolve(jsonResponse);
        }
      } else {
        return Promise.resolve(jsonResponse);
      }
      break;
    }
    case 401: {
      // if(logoutEvent != null){
      //   logoutEvent()
      // }
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
    default: {
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
  }
};
export const performNetworkRequest = async (url, configs) => {
  // log('performNetworkRequest', '_______');
  // log('url', url);
  // log('configs', configs);
  console.log('url', url);
  url = encodeURI(url);
  console.log('url: ', url);
  console.log('configs', configs);
  try {
    const response = await fetch(url, configs);
    console.log('response', response);
    // log('response', response);
    const jsonResponse = await response.json();
    console.log('performNetworkRequest response', { jsonResponse, url, configs });
    return Promise.resolve({ response, jsonResponse });
  } catch (e) {
    log('error', e);
    return Promise.reject(e);
  }
};
export const log = (label, data) => {
  if (__DEV__) {
    // console.log(TAG + `__${label}__ :`, data);
  }
};
export const message = 'Something went wrong';
export const getMessage = json => {
  console.log('getMessage : ', json);
  switch (typeof json) {
    case 'string': {
      return json;
    }
    case 'object': {
      if (Array.isArray(json)) {
        var data = json[0];
        return getMessage(data);
      } else {
        if (json.errors) {
          const data = json.errors;
          if (typeof data === 'object') {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else {
          if (json.message) {
            return getMessage(json.message);
          } else if (json.error) {
            return getMessage(json.error);
          } else {
            return message;
          }
        }
      }
    }
    default: {
      return message;
    }
  }
};

export const jsonToFormdata = data => {
  //saadia's form data func //formatData

  var form_data = new FormData();

  for (var key in data) {
    if (Array.isArray(data[key])) {
      var i = 0;

      var datakey = data[key];

      for (var newkey in datakey) {
        if (datakey[newkey].name) {
          form_data.append(key + `[${i}][name]`, datakey[newkey].name);

          i++;
        } else {
          form_data.append(key + `[${i}]`, datakey[newkey]);

          i++;
        }
      }
    } else if (typeof data[key] == 'object') {
      form_data.append(key, data[key]);
    } else {
      form_data.append(key, data[key]);
    }
  }

  return form_data;
};

export const getConfigs = (method, body, formData = true) => {
  var headers = {
    Accept: 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };
  if (formData == true) {
    headers['Content-Type'] = 'multipart/form-data';
    headers['Authorization'] = 'Basic Y2tfZjc3YjgyYWZhYzk4N2NjYjBiZDU3Y2E3MTM3Mzc5YTljNTljNTZkMDpjc180YjRhMWZkNGMxZjEzZmE3ZmZjYWExMjJlZjM1YmJjYzZlMGYyNzRk';
  }
  const data = store.getState();
  console.log(data, 'dataGETCONFIGS');
  if (data) {
    if (data.authReducer) {
      console.log(data.authReducer.token, 'authReducer.token');
      if (data.authReducer.token) {
        headers['Authorization'] = 'Bearer ' + data.authReducer.token;
      }
    }
  }
  var configs = {
    method: method,
    headers: headers,
  };
  if (body) {
    if (method == 'POST' || method == 'PUT') {
      if (formData == true) {
        configs['body'] = jsonToFormdata(body);
      } else {
        configs['body'] = JSON.stringify(body);
      }
    }
  }
  console.log(configs, 'helloConfigs');
  return configs;
};
export const dataToQueryParameter = data => {
  if (typeof data === 'object') {
    if (!Array.isArray(data)) {
      var params = '?';
      const dataArray = Object.entries(data);
      if (dataArray.length > 0) {
        dataArray.forEach((entry, index) => {
          var amp = index < dataArray.length - 1 ? '&' : '';
          params = `${params}${entry[0]}=${entry[1]}${amp}`;
        });
        return params;
      }
    }
  } else if (typeof data === 'string') {
    return data;
  }
  return '';
};
