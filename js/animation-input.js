const animationInput = () => {
  const inputs = document.querySelectorAll('.animationInput');

  function handleInputClick(event) {
    const input = event.target;
    const placeholder = input.nextElementSibling;

    placeholder.style.fontSize = '12px';
    placeholder.style.transform = 'translateY(-150%)';
    placeholder.style.color = '#999';
  }

  function handleInputBlur(event) {
    const input = event.target;
    const placeholder = input.nextElementSibling;

    if (!input.value) {
      placeholder.style.fontSize = '14px';
      placeholder.style.transform = 'translateY(-50%)';
      placeholder.style.color = '#999';
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('click', handleInputClick);
    input.addEventListener('blur', handleInputBlur);
  });
};

export default animationInput;

animationInput();