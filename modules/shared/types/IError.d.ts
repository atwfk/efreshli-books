declare namespace IError {
  export interface IErrorData {
    message: string;
    isError: boolean;
    errorCode: number;
  }

  export interface IErrorResponse {
    response: { statusText: string; status: number; data: IErrorResData };
  }

  export interface IErrorResData {
    error: string;
    message: string;
  }
}

export { IError };
