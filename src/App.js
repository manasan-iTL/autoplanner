import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {Signup} from "./template/index"

function App() {
  return (
    <div >
      <Header text="新規登録"/>
      <main>
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
