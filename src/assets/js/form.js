const formSend = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const formWrapper = document.querySelector('.form-container');
    getForm(formWrapper);
  });

  function getForm(wrapper) {
    const form = wrapper.querySelector('form');
    const name = form.querySelector('input[name="name"]');
    const phone = form.querySelector('input[name="phone"]');
    const button = form.querySelector('button');
    button.onclick = (e) => {
      e.preventDefault();
      const data = `name=${name.value}&phone=${phone.value}`;
      const url = `${form.action}?${data}`;

      fetch(url)
        .then((res) => res.json())
        .then((res) => onSuccess(res))
        .catch((error) => console.log(error));
    };

    function onSuccess(result) {
      if (result?.ok) {
        getSuccessHtml(wrapper);
      } else {
        onError(result);
      }
    }

    function getSuccessHtml(wrapper) {
      wrapper.innerHTML = `
        <div class="form-success">
          <div class="form-success__content">${
            wrapper.getAttribute('data-success') || 'Успех'
          }</div>
        </div>
      `;
    }

    function onError(result) {
      console.log(result);
    }
  }
};
export default formSend;
