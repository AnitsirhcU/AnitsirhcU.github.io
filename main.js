let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #74003D ;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #74003D;">Estudiante de Ingeniera Química con especialidad en procesos químicos</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
