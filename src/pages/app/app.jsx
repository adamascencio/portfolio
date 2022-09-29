import Navbar from '../../components/Navbar/Navbar';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <main className='App'>
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}