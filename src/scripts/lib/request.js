class Request {
  static async get({ path }) {
    const response = await fetch(path);

    return {
      data: await response.json(),
      status: response.status,
    };
  }
}

export default Request;
