import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#6B4C7A', '#B8A8C1', '#4B3557', '#FAF9FB'],
    });
  } catch (e) {
    console.error('Confetti error:', e);
  }
};
