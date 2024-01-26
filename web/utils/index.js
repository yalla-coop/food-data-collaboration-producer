export function throwError(message, errorObj) {
  if (errorObj) {
    throw errorObj;
  } else {
    throw new Error(message);
  }
}
