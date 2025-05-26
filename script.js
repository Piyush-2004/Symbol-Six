document.getElementById('btn').addEventListener('click', function() {
  const dice = document.querySelectorAll('.dice');

  dice.forEach((die) => {
    die.classList.add('rolling');
    setTimeout(() => {
      die.classList.remove('rolling');


      const face = Math.floor(Math.random() * 6) + 1;

      const rotations = {
        1: 'rotateX(0deg) rotateY(0deg)',
        2: 'rotateX(-90deg) rotateY(0deg)', 
        3: 'rotateX(90deg) rotateY(0deg)', 
        4: 'rotateY(-90deg) rotateX(0deg)',
        5: 'rotateY(90deg) rotateX(0deg)',
        6: 'rotateY(180deg) rotateX(0deg)'
      };

      die.style.transform = rotations[face];
    }, 1000); 
  });
});