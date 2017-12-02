export function getPotionColor() {

}

export function valueEqual(src, target) {
  if (src.length !== target.length) {
    return false;
  }

  return src.map((el) => {
    return target.includes(el);
  }).reduce((a, b) => { return (a && b); });
}
