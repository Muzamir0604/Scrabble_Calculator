export default function dicTransformer(data) {
  var dict = [];
  for (var item in data) {
    dict[data[item].letter] = data[item].value;
  }
  return dict;
}
