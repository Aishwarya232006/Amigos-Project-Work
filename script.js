  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const firstName = document.querySelector('input[placeholder="FIRST NAME"]').value;
    const lastName = document.querySelector('input[placeholder="LAST NAME"]').value;
    const email = document.querySelector('input[placeholder="EMAIL ADDRESS"]').value;

    alert(`Thank you, ${firstName} ${lastName}, for subscribing to our newsletter!`);

    form.reset();
  });
