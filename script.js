document.addEventListener('DOMContentLoaded', function() {
  const dice = document.querySelectorAll('.dice');
  const faces = [1, 2, 3, 4, 5, 6];
  const shuffledFaces = faces.sort(() => Math.random() - 0.5);

  dice.forEach((die, index) => {
    const face = shuffledFaces[index];
    const rotations = {
      1: 'rotateX(0deg) rotateY(0deg)',
      2: 'rotateX(-90deg) rotateY(0deg)', 
      3: 'rotateX(90deg) rotateY(0deg)', 
      4: 'rotateY(-90deg) rotateX(0deg)',
      5: 'rotateY(90deg) rotateX(0deg)',
      6: 'rotateY(180deg) rotateX(0deg)'
    };
    die.style.transform = rotations[face];
  });
});

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

document.getElementById('reset-btn').addEventListener('click', function() {
  window.location.reload();
});