import { NotesProvider } from '../context/NotesContext'; 
import '../styles/globals.css'; 

export default function App({ Component, pageProps }) {
  return (
    <NotesProvider>
      <Component {...pageProps} />
    </NotesProvider>
  );
}
