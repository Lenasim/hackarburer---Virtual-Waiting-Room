import React from 'react'
import './ChatbotWelcomeMessage.css'

const ChatbotWelcomeMessage = ({ handleDisplayChatbot }) => {
  return (
    <div className='ChatbotWelcomeMessage'>
      <div className='ChatbotWelcomeMessage__container'>
        <div className='ChatbotWelcomeMessage__message'>
          <p>Welcome Ann O'Nyme, <br /> You will be notified as soon as the doctor joins the video consultation.</p>
          <button className='ChatbotWelcomeMessage__validationButton' onClick={handleDisplayChatbot}>Ok</button>
        </div>
        <img className='ChatbotWelcomeMessage__avatar' src='https://via.placeholder.com/60' alt='chatbot avatar' />
      </div>
    </div>
  )
}

export default ChatbotWelcomeMessage
