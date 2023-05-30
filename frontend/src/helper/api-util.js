const BASE_API_URL = 'http://127.0.0.1:3000/api';

export const postRequest = (url, data, token = null) => {
    return new Promise((resolve, reject) => {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
  
      if (token) {
        headers.Authorization = ` ${token}`;
      }
  
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then(async response => {
          const res = await response.json();
          resolve(res);
        })
        .catch(async error => {
          if ('response' in error) {
            reject(await error.response.data);
          } else {
            reject(await error);
          }
        });
    });
  };

export const loginUserApi = async data => {
const url = `${BASE_API_URL}/auth/login`;
console.log('= = = = = = = = = LOGGING IN = = = = = = = = =');
console.log(url);
let response;
try {
    response = await postRequest(url, data);
} catch (error) {
    response = null;
}

return response;
};


export const signpostRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    console.log("My credentials: ",data)

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(async response => {
        const res = await response.json();
        resolve(res);
      })
      .catch(async error => {
        if ('response' in error) {
          reject(await error.response.data);
        } else {
          reject(await error);
        }
      });
  });
};



export const signupUserApi = async (data) => {
  const url = `${BASE_API_URL}/auth/register`;
  console.log("= = = = = = = = = SIGNING UP = = = = = = = = =");
  console.log(url);
  let response;
  try {
    response = await signpostRequest(url, data);
  } catch (error) {
    response = null;
  }

  return response;
};




export const createActivityPostReq = (url, data, token = null) =>{
  return new Promise ((resolve, reject) =>{
    console.log(token)
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      };
      if(token){
        headers.Authorization =  `Bearer ${token}`
        console.log(token)
      }

      fetch(url,  {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
      .then(async response => {
        const res = await response.json();
        resolve(res);
        })
        .catch(async error => {
        if ('response' in error) {
          reject(await error.response.data);
          } else {
            reject(await error);
          }
          });
            
  })

}



export const createActivityApi = async (data) => {
  const url = `${BASE_API_URL}/users/createActivity`;
  console.log("= = = = = = = = = SIGNING UP = = = = = = = = =");
  console.log(url);
  let response;
  try {
    let token = await localStorage.getItem("Token")
    response = await createActivityPostReq(url, data , token);
  } catch (error) {
    response = null;
  }

  return response;
};


export const getActivityRequest = (url, token = null) => {
  return new Promise((resolve, reject) => {
    const headers = {
      Accept: 'application/json',
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(async response => {
        const res = await response.json();
        resolve(res);
      })
      .catch(async error => {
        if ('response' in error) {
          reject(await error.response.data);
        } else {
          reject(await error);
        }
      });
  });
};


// export const deleteActivityRequest = (url, token = null) => {
//   return new Promise((resolve, reject) => {
//     const headers = {
//       Accept: 'application/json',
//     };

//     if (token) {
//       headers.Authorization = `JWT ${token}`;
//     }

//     fetch(url, {
//       method: 'DELETE',
//       headers: headers,
//     })
//       .then(async response => {
//         const res = await response.json();
//         resolve(res);
//       })
//       .catch(async error => {
//         if ('response' in error) {
//           reject(await error.response.data);
//         } else {
//           reject(await error);
//         }
//       });
//   });
// };

export const patchActivityRequest = ( data, token = null) => {

  console.log("I am running") 
  return new Promise((resolve, reject) => {

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      
    };
    // const token  = headers.Authorization
    // console.log(token);

    // if (token) {
    //   headers.Authorization = `JWT ${token}`;
    //   console.log(headers.Authorization);
    // }

    fetch(`http://127.0.0.1:3000/api/users/updateActivity`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(async response => {
        const res = await response.json();
        
        resolve(res);
      })
      .catch(async error => {
        console.log('error display',error)
        if ('response' in error) {
          reject(await error.response.data);
        } else {
          reject(await error);
        }
      });
  });
};