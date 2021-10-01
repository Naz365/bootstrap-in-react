import './App.css';
import { useEffect,useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([]);
useEffect ( ()=>{
  fetch(' https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a7e11e4824d64b3fba564f66702d6e3c ')
  .then(res=> res.json())
  .then(data => setNews(data.articles));
}, [])

  return (
    <div className="App">
       {
            news.lenght ===0 ?
            <Spinner animation="border" variant="success" />
            :
          <Row xs={1} md={2} className="g-4">
            {
              news.map(nw => <News news={nw}>

              </News>)
            }
          
          </Row>
        }

    </div>
  );
}

export default App;
