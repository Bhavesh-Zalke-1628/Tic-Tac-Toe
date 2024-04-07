import './App.css';
import Grid from './Component/Grid/Grid';

function App() {
  return (
    <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
      <Grid numberOfCards={9} />
    </div>
  )
}

export default App