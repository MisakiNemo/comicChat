type Response<T = null> = {
  code: number;
  message?: string;
  data?: T;
};

export default Response;
