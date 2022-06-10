var htmlEditor = ace.edit("html-editor");
 htmlEditor.setTheme("ace/theme/monokai");
 htmlEditor.session.setMode("ace/mode/html");

 var cssEditor = ace.edit("css-editor");
 cssEditor.setTheme("ace/theme/monokai");
 cssEditor.session.setMode("ace/mode/css");

 var jsEditor = ace.edit("js-editor");
 jsEditor.setTheme("ace/theme/monokai");
 jsEditor.session.setMode("ace/mode/javascript");

 htmlEditor.getSession().on('change', function() {
  update();
})
cssEditor.getSession().on('change', function() {
  update();
})
jsEditor.getSession().on('change', function() {
  update();
})

function update() {
var res = document.getElementById('result').contentWindow.document;
res.open();
res.write('<style>' + cssEditor.getValue() + '</style>');
res.write('<script>' + jsEditor.getValue() + '</script>');
res.write(htmlEditor.getValue());
res.close();
}
update();