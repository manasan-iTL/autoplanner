import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import  Router from "./Router"

function App() {
  return (
    <div >
      <Header text="新規登録"/>
      <main className="container mx-auto">
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
