<html>
<body>
  <h1>Hello Word</h1>
<p>Click vào button để in mảng.</p>
<button onclick="myFunction()">Run</button>
<p id="demo"></p>
<script>
var subject = ["php", "css", "html", "js"];
function myFunction() {
document.getElementById("demo").innerHTML =
subject.valueOf()
}
</script>
</body>
</html>
