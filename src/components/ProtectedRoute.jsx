import { Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  // Como o app agora é público, apenas renderiza o conteúdo
  return <Outlet />;
}
