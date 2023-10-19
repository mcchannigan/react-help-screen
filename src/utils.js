
export default function makeHeaderId(inStr) {
  return inStr.toLowerCase().replace(/[ ,\(,\)]/g, '-');
}