function randString (length) {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var res = ""
  for (var i = 0; i < length; i++) {
    var rnd = Math.floor(Math.random() * list.length)
    res = res + list.charAt(rnd)
  }
  return res
}

console.log(randString(6))