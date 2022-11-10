function() {
if (document.readyState=="loading") {
document.body.style.backgroundColor="yellow";
}
if (document.readyState=="interactive") {
document.body.style.backgroundColor="green";
}
if (document.readyState=="complete") {
document.body.style.backgroundColor="white";
}
}
