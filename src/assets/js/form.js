const formSend = () => {
  const formState = {
    hasErrors: [],
    firstClick: true,
    setHasErrors: ({ type, prop }) => {
      if (type === true) {
        if (!formState.hasErrors.includes(prop)) {
          formState.hasErrors.push(prop)
        }
      } else {
        formState.hasErrors = formState.hasErrors.filter(
          (stateProp) => stateProp !== prop,
        )
      }
      formState.listener &&
        formState.listener({
          hasErrors: formState.hasErrors,
          firstClick: formState.firstClick,
        })
    },
  }

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
      if (formState.hasErrors.length && formState.firstClick) {
        formState.firstClick = false
        setButtonDisabled(true)
        return false
      } else {
      }

      const data = `name=${name.value}&phone=${phone.value}&antispam=antispam`
      const url = `${form.action}?${data}`

      fetch(url)
        .then((res) => res.json())
        .then((res) => onSuccess(res))
        .catch((error) => console.log(error))
    }

    formState.listener = ({ hasErrors, firstClick }) => {
      if (!hasErrors.length && !firstClick) {
        setButtonDisabled(false)
      } else if (hasErrors.length && !firstClick) {
        setButtonDisabled(true)
      }
    }

    checkName({ target: name })
    checkPhone({ target: phone })

    const events = ['onchange', 'onkeyup', 'onBlur']
    events.forEach((event) => {
      name[event] = checkName
      phone[event] = checkPhone
    })

    function onSuccess(result) {
      if (result?.ok) {
        getSuccessHtml(wrapper)
      } else {
        onError(result)
      }
    }

    function checkName({ target }) {
      const value = target.value
      const prop = 'name'
      if (!value) {
        setInputClass({ type: 'empty', target })
        formState.setHasErrors({ type: true, prop })
      } else {
        setInputClass({ type: 'success', target })
        formState.setHasErrors({ type: false, prop })
      }
    }

    function checkPhone({ target }) {
      const value = target.value
      const prop = 'phone'
      if (!value) {
        setInputClass({ type: 'empty', target })
        formState.setHasErrors({ type: true, prop })
      } else {
        setInputClass({ type: 'success', target })
        formState.setHasErrors({ type: false, prop })
      }
    }

    function setInputClass({ target, type }) {
      if (type === 'empty') {
        target.parentElement.classList.add('empty')
      } else if (type === 'success') {
        target.parentElement.classList.remove('empty')
      }
    }

    function setButtonDisabled(disabled = true) {
      if (disabled) {
        form.classList.add('error')
        button.setAttribute('disabled', true)
      } else {
        form.classList.remove('error')
        button.removeAttribute('disabled')
      }
    }

    function getSuccessHtml(wrapper) {
      wrapper.innerHTML = `
        <div class="form-success">
          <div class="form-success__content">${
            wrapper.getAttribute('data-success') || 'Успех'
          }</div>
        </div>
      `
    }

    function onError(result) {
      console.log(result)
    }

    // function setInputFilter(textbox, inputFilter) {
    //   ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    //     textbox.addEventListener(event, function() {
    //       if (inputFilter(this.value)) {
    //         this.oldValue = this.value;
    //         this.oldSelectionStart = this.selectionStart;
    //         this.oldSelectionEnd = this.selectionEnd;
    //       } else if (this.hasOwnProperty("oldValue")) {
    //         this.value = this.oldValue;
    //         this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
    //       } else {
    //         this.value = "";
    //       }
    //     });
    //   });
    // }
  }
}
export default formSend
