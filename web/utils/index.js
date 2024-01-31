export function throwError(message, errorObj) {
  if (errorObj) {
    throw errorObj;
  } else {
    throw new Error(message);
  }
}

export function addParamToParams(params, paramName, paramValue) {
  if (paramValue === undefined || paramValue === null) {
    return params;
  }
  const encodedParamValue = encodeURIComponent(paramValue);
  const separator = params ? '&' : '?';
  const newParams = `${params}${separator}${paramName}=${encodedParamValue}`;
  return newParams;
}
