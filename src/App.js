import RoutesApp from "./Routes";
import AuthProvider from "./Contexts/auth";


export default function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

