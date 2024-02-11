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

export function getTargetStringFromSemanticId(url, key) {
  const parts = url.split('/');
  const targetIdIndex = parts.indexOf(key) + 1;

  if (!targetIdIndex || targetIdIndex === 0) {
    throwError(`Could not find ${key} in ${url}`);
  }

  const targetIdWithParams = parts[targetIdIndex];
  // filter out any query parameters
  const [targetId] = targetIdWithParams.split('?');

  return targetId;
}
