import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Módulos e importações adicionais podem ser adicionados aqui

createRoot(document.getElementById('root')).render( // O que esse código faz? Ele cria a raiz da aplicação React e a renderiza no elemento HTML com o ID 'root'.
  
  
  // Quando falar que o componente App é renderizado, significa que ele está sendo exibido na tela dentro do elemento root.
  <StrictMode>
    <App /> 
  </StrictMode>,
)
