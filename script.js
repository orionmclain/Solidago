

document.querySelectorAll('.summary').forEach(button => {
  button.onclick = () => {
    button.nextElementSibling.classList.add('open-popup');
  };
});

document.querySelectorAll('.close').forEach(button => {
  button.onclick = () => {
    button.parentElement.classList.remove('open-popup');
  };
});


