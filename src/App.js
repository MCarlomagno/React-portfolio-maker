import './App.css';
import Toolbar from './components/toolbar/toolbar'
import Body from './components/body/body'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar/>
      </header>
      <body className="App-body">
        <Body />
      </body>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
