import axios from "axios"
import { FormEvent, useEffect, useState } from "react"


function ContactForm() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [feedbackMessage, setFeedbackMessage] = useState<string>('')

  function handleSubmitForm(e: FormEvent) {
    setIsLoading(true)
    e.preventDefault()
    axios.post('/api/contact', {
      name,
      email,
      phone,
      message
    }).then(() => setFeedbackMessage('Obrigada, em instantes entraremos em contato com você'))
      .catch(e => {
        setFeedbackMessage('Algo de errado aconteceu, tente novamente mais tarde.')
        console.log('error: ', e.message)
      })
      .finally(() => {
        setIsLoading(false)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
    })
  }
  useEffect(() => {
    setTimeout(() => setFeedbackMessage(''), 3000)
  },[feedbackMessage])

  return (
    <form className="w-full sm:w-2/3" onSubmit={handleSubmitForm}>
      {!!feedbackMessage &&
      <div>
        <p className="bg-brand text-white w-full p-2 rounded-md mb-2">{feedbackMessage}</p>
      </div>}
      <div className="flex flex-col mb-2">
        <label htmlFor="" className="mb-1">Nome</label>
        <input
          disabled={isLoading}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-400 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="text"
          placeholder="Seu nome" />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="">E-mail</label>
        <input
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-400 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="email"
          placeholder="Seu melhor e-mail" />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="">Telefone <span className="text-gray-400 text-sm">(opcional)</span></label>
        <input
          disabled={isLoading}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border border-gray-400 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="text"
          placeholder="(XX) XXXXX-XXXX" />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="">Mensagem</label>
        <textarea
          value={message}
          disabled={isLoading}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-400 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Sua mensagem"></textarea>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="bg-brand text-white rounded-full w-full sm:w-32 px-4 py-2 uppercase hover:bg-brand-dark transition-colors disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed">
        {isLoading ? 'Aguarde' : 'enviar'}
      </button>
    </form>
  )
}

export { ContactForm }