$(".nav-side .nav-toggle").on("click", function(e) {
  e.preventDefault();
  $(this).parent().toggleClass("nav-open");
});
function highlight(link){
  document.getElementById(link).style.color = 'cornflowerblue';
};
function unhighlight(link){
  document.getElementById(link).style.color = 'white';
}
