import handleError from './handleError';

function ServerError(message) {
  const error = new Error(message);
  error.name = 'SERVER_ERROR';
  return error;
}

async function post(url = '', data = {}, isHaveFile = false) {
  try {
    const token = localStorage.getItem('token');
    const requestConfigs = {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${token}`
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: isHaveFile ? data : JSON.stringify(data)
    };
    if (!isHaveFile) {
      requestConfigs.headers['Content-Type'] = 'application/json';
    }
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/${url}`, requestConfigs);
    const dataRes = await response.json();

    if (!dataRes.ok) {
      handleError(response, dataRes.message);
      throw ServerError(dataRes.message);
    }

    return dataRes.data;
  } catch (err) {
    if (err.name !== 'SERVER_ERROR') {
      // toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
    throw err;
  }
}

async function get(url = '') {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const dataRes = await response.json();

    if (!dataRes.ok) {
      handleError(response, dataRes.message);
      throw ServerError(dataRes.message);
    }

    return dataRes.data;
  } catch (err) {
    if (err.name !== 'SERVER_ERROR') {
      // toast.error("Xảy ra lỗi, vui lòng thử lại!");
    }
    throw err;
  }
}

export const authRouteList = {
  'facebook': 'api/auth/facebook',
  'google': 'api/auth/google',
  'local': 'api/auth/local',
  'default': 'api/auth/local'
}

export const request = { get, post };