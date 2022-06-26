import './App.css';
import Card from './components/Card';

function App() {
  return (
    <main className="main">
      <div className="card_option"><Card /></div>
      <div className="card_option no-linkedin"><Card /></div>
      <div className="card_option theme-light"><Card /></div>
      <div className="card_option theme-light no-linkedin"><Card /></div>
    </main>
  );
}

export default App;
