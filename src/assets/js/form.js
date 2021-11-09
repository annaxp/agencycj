const formSend = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const formWrapper = document.querySelector('.form-container')
    getForm(formWrapper)
  })

  function getForm(wrapper) {
    const form = wrapper.querySelector('form')
    const name = form.querySelector('input[name="name"]')
    const phone = form.querySelector('input[name="phone"]')
    const button = form.querySelector('button')
    button.onclick = (e) => {
      e.preventDefault()
      const data = `name=${name.value}&phone=${phone.value}`
      const url = `${form.action}?${data}`

      fetch(url)
        .then((res) => res.data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
      // if (result) {
      //   getSuccess(wrapper)
      // } else {
      //   onError()
      // }
    }
  }
  function getSuccess(wrapper) {
    wrapper.innerHTML = `
      <div class="form-success">
        <div class="form-success__content">${wrapper.getAttribute(
          'data-success',
        )}</div>
      </div>
    `
  }
  function onError() {
    console.log('error')
  }
}
export default formSend
