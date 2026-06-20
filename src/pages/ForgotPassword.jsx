import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação
    setSent(true);
  };

  return (
    <AuthLayout
      icon={Mail}
      title="Recuperar senha"
      subtitle="Enviaremos um link de recuperação"
      footer={
        <Link to="/login" className="text-primary font-medium hover:underline flex items-center justify-center gap-1">
          <ArrowLeft className="w-3 h-3" /> Voltar para login
        </Link>
      }
    >
      {sent ? (
        <div className="text-center py-4">
          <p className="text-green-600 font-medium">Link enviado!</p>
          <p className="text-sm text-muted-foreground mt-2">
            Verifique sua caixa de entrada (simulada).
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full h-12">
            Enviar link de recuperação
          </Button>
        </form>
      )}
    </AuthLayout>
  );
}
