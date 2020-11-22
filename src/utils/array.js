export const allFalse = (array) => {
  return array.every((element) => !element);
};

export const someFalse = (array) => {
  return array.some((element) => !element);
};

export const someTrue = (array) => {
  return array.some((element) => element);
};

export const groupBy = (array, property) =>
  array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

export const mostFrequentItem = (array) => {
  if (array.length === 0) return null;
  const modeMap = {};
  let maxCount = 1;
  let modes = [];

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] === maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  return modes;
};

export const getOccurrence = (array, predicate) => {
  return array.filter(predicate).length;
};

export const sortObjsArrayByAttribute = (array, attribute, isAsc) => {
  return array.slice().sort((a, b) => {
    const value1 =
      typeof a[attribute] === 'string'
        ? a[attribute].toLowerCase()
        : a[attribute];
    const value2 =
      typeof b[attribute] === 'string'
        ? b[attribute].toLowerCase()
        : b[attribute];

    return isAsc
      ? (value1 > value2) - (value1 < value2)
      : (value1 < value2) - (value1 > value2);
  });
};

export const getMinAndMaxValueObjs = (array, attribute) => {
  let lowest = Number.POSITIVE_INFINITY;
  let highest = Number.NEGATIVE_INFINITY;
  let tmp;
  for (let i = array.length - 1; i >= 0; i--) {
    tmp = array[i];
    if (tmp[attribute] < lowest) lowest = tmp;
    if (tmp[attribute] > highest) highest = tmp;
  }

  return [lowest, highest];
};

export const uniqueByMultipleKeys = (arr, keyProps) => {
  const kvArray = arr.map((entry) => {
    const key = keyProps.map((k) => entry[k]).join('|');
    return [key, entry];
  });
  const map = new Map(kvArray);
  return Array.from(map.values());
};

export const checkIfArrContainsAllElements = (arr, target) =>
  target.every((v) => arr.includes(v));

export const FirstOrDefault = (array) => {
  return array ? array[0] : [];
};

export const LastOrDefault = (array) => {
  return array ? array[array.length - 1] : [];
};

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(reader.result.substr(reader.result.indexOf(',') + 1));
    reader.onerror = (error) => reject(error);
  });
}

export function getDifferenceBetween(arrayOne, keyOne, arrayTwo, keyTwo) {
  return arrayOne.filter(
    ({ [keyOne]: id1 }) => !arrayTwo.some(({ [keyTwo]: id2 }) => id2 === id1)
  );
}

export const toBase64 = (item) => {
  const buff = Buffer.from(JSON.stringify(item));
  return buff.toString('base64');
};
export const toJsonFromBase64 = (base64) => {
  const decode = Buffer.from(base64, 'base64');
  return decode.toString('ascii');
};
