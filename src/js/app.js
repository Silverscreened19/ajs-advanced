export default function orderByProps(obj, props) {
  const propsArray = [];
  const sortedArray = [];

  /*
 * Eslint ругается на for..in:
 *    for (const key in obj) {
 *     if (props.includes(key)) {
 *       propsArray.push({ key, value: obj[key] });
 *     } else {
 *       sortedArray.push({ key, value: obj[key] });
 *     }
 *   }
*/

  // **** Eslint не выдает ошибок ****
  Object.keys(obj).forEach((key) => {
    if (props.includes(key)) {
      propsArray.push({ key, value: obj[key] });
    } else {
      sortedArray.push({ key, value: obj[key] });
    }
  });

  sortedArray.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...propsArray, ...sortedArray];
}
