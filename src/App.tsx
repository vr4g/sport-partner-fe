import './App.scss'
import Header from './components/Header/Header'
import Router from './components/Router/Router'

function App() {
  return (
    <div className={`app-body`}>
      <Header />
      <Router />
    </div>
  )
}

export default App
