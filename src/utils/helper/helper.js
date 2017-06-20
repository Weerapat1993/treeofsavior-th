export const camelToPascal = (str) => {
    if(!str) return null;
    // เปลี่ยนตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const camelToNormal = (str) => {
    if(!str) return null;
    // ถ้าตัวอักษรตัวหน้าเป็นตัวพิมพ์ใหญ่จะเว้นด้วย while space
    let newString = str.replace(/([a-z\d])([A-Z])/g, '$1 $2');
    // เปลี่ยนตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่
    return newString.charAt(0).toUpperCase() + newString.slice(1);
}

export const camelToConst = (str) => {
    if(!str) return null;
    // ถ้าตัวอักษรตัวหน้าเป็นตัวพิมพ์ใหญ่จะเว้นด้วย underscore
    let newString = str.replace(/([a-z\d])([A-Z])/g, '$1_$2');
    return newString.toUpperCase();
}

export const camelToSnake = (str) => {
    if(!str) return null;
    // ถ้าตัวอักษรตัวหน้าเป็นตัวพิมพ์ใหญ่จะเว้นด้วย underscore
    let newString = str.replace(/([a-z\d])([A-Z])/g, '$1_$2');
    return newString.toLowerCase();
}

export const numberFormat = (num) => {
  if(!num) return 0;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
