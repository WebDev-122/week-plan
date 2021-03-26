const format = (str) => {
  if(str.toString().length === 1)
    return '0' + str;
  return str;
}

const getStrFromDate = (value) => {
  if(value.getHours() === 0 && value.getMinutes() === 0)
    return '';

  return  format(value.getHours()) + ':' +
          format(value.getMinutes());
}

export const makePlanStr = (event) => {
  let result = '';
  let start = event.start;
  let end = event.end;
  result += getStrFromDate(start);
  if(result)
    result += '~' + getStrFromDate(end);
  return result;
}
