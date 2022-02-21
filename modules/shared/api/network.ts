import { api } from ".";
import type { AxiosResponse } from "axios";
import { IError } from "../types/IError";

export const getApi = async <T, X, Y>(
  endPoint: string,
  onSuccess: (successData: AxiosResponse<T>) => X,
  onError: (errorData: IError.IErrorData) => Y,
  onFinished: () => void,
): Promise<X | Y> => {
  try {
    const response = await api.get(endPoint);

    return onSuccess(response);
  } catch (err: unknown) {
    const { response } = err as IError.IErrorResponse;

    const { message: errMessage } = err as { message: string };

    if (!response) {
      return onError({
        isError: true,
        message: errMessage,
        errorCode: 500,
      });
    }

    const { status, data } = response;

    const { error } = data;

    return onError({
      isError: true,
      message: error,
      errorCode: status,
    });
  } finally {
    onFinished();
  }
};
