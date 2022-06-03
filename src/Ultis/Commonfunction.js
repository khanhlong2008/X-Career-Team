import { SettingsOverscanOutlined } from "@mui/icons-material";

export const Commonfc = {
  handlValue: (getvalue, setState) => {
    setState(getvalue);
  },
  //paramete array type array , objectKey is string  like ['key']

  keysofObj: (obj) => {
    return Object.keys(obj);
  },

  valuesofObj: (obj) => {
    return Object.values(obj);
  },
  removeDuplicate: (array, objKey) => {
    const setarray = new Set();
    //remove duplicate item
    return array.filter((el) => {
      const duplicate = setarray.has(el[`${objKey}`]);
      setarray.add(el[`${objKey}`]);
      return !duplicate;
    });
  },
};
