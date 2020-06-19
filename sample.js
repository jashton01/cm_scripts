<script>
const submitButton = document.querySelector('#submit-button');

const getDomainData = () => {
  const domain = document.querySelector('#domain-input').value;
  console.log(`Fetching domain data for ${domain}`);
  fetch('/server', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: domain})
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log('Response:', data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch error:', err);
  });
};

submitButton.addEventListener('click', getDomainData);

</script>
