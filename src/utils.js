
export default function makeHeaderId(inStr) {
  return inStr.toLowerCase().replace(/[ ,/()]/g, '-').replace(/ā/g, 'a');
}