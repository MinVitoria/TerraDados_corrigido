import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const mockUser = {
      id: "1",
      email: "pesquisador@exemplo.com",
      name: "Pesquisador Teste",
      role: "user"
    };
    login(mockUser);
    navigate("/");
  };

  return (
    <AuthLayout
      icon={LogIn}
      title="Entrar no TerraDados"
      subtitle="Acesse sua conta para continuar"
    >
      <Button 
        onClick={handleLogin}
        className="w-full h-12 font-medium text-base"
      >
        Entrar com Conta Demo
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Este é um ambiente de demonstração.<br />
        Não é necessário cadastro real.
      </p>

      <div className="mt-8 text-center">
        <Link to="/" className="text-primary hover:underline text-sm">
          ← Voltar para a página inicial
        </Link>
      </div>
    </AuthLayout>
  );
}
