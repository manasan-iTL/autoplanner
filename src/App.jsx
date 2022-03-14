import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import  Router from "./Router"
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div >
      <AuthProvider>
        <Header text="新規登録"/>
        <main className="container mx-auto">
          <Router />
        </main>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
