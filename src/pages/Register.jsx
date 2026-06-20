import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    const mockUser = {
      id: "2",
      email: "novo.pesquisador@exemplo.com",
      name: "Novo Pesquisador",
      role: "user"
    };
    login(mockUser);
    navigate("/");
  };

  return (
    <AuthLayout
      icon={UserPlus}
      title="Criar conta"
      subtitle="Comece sua pesquisa agora"
    >
      <Button 
        onClick={handleRegister}
        className="w-full h-12 font-medium text-base"
      >
        Criar Conta Demo
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Este é um ambiente demonstrativo.<br />
        A conta é criada automaticamente.
      </p>

      <div className="mt-6 text-center">
        <Link to="/login" className="text-primary hover:underline text-sm">
          Já tem uma conta? Entrar
        </Link>
      </div>
    </AuthLayout>
  );
}
