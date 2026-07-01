import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  BarChart3, 
  FileText, 
  Bell, 
  Users, 
  Star, 
  Check, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const BRAND_COLORS = {
  primaryBlue: "#0A4DB3",
  darkBlue: "#002C8F",
  accentGreen: "#59C414",
  white: "#FFFFFF",
};

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans text-foreground bg-white overflow-x-hidden">
      {/* 1. Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#002C8F]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer" onClick={() => scrollTo("hero")}>
            <img src="/logo.png" alt="Logo PontoSeguro" className="h-12 w-auto object-contain bg-white p-1.5 rounded-lg shadow-sm group-hover:opacity-90 transition-all"/>
            PontoSeguro
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <button onClick={() => scrollTo("funcionalidades")} className="hover:text-white transition-colors">Funcionalidades</button>
            <button onClick={() => scrollTo("planos")} className="hover:text-white transition-colors">Planos</button>
            <button onClick={() => scrollTo("depoimentos")} className="hover:text-white transition-colors">Depoimentos</button>
            <button onClick={() => scrollTo("faq")} className="hover:text-white transition-colors">FAQ</button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-[#002C8F] hover:bg-white hidden sm:inline-flex">
              Entrar
            </Button>
            <Button className="bg-[#59C414] hover:bg-[#4EAC11] text-white border-none shadow-lg font-semibold" data-testid="btn-header-cta">
              Começar Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#002C8F] overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#0A4DB3] blur-[120px] opacity-50 mix-blend-screen pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden" animate="show" 
            viewport={{ once: true }} 
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={FADE_UP_VARIANTS}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#59C414]/20 border border-[#59C414]/30 text-[#59C414] font-semibold text-sm mb-6">
                Controle de ponto 100% digital
              </span>
            </motion.div>
            
            <motion.div variants={FADE_UP_VARIANTS}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#59C414]/20 border border-[#59C414]/30 text-[#59C414] font-semibold text-sm mb-6">
                Baixo CUSTO
              </span>
            </motion.div>

            <motion.div variants={FADE_UP_VARIANTS}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#59C414]/20 border border-[#59C414]/30 text-[#59C414] font-semibold text-sm mb-6">
                Implementação RÁPIDA
              </span>
            </motion.div>

            <motion.h1 variants={FADE_UP_VARIANTS} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Registros de ponto que você pode confiar — sempre.
            </motion.h1>
            
            <motion.p variants={FADE_UP_VARIANTS} className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              PontoSeguro une marcação de horários, painéis gerenciais em tempo real e relatórios automáticos em uma plataforma segura e simples de usar.
            </motion.p>
            
            <motion.div variants={FADE_UP_VARIANTS} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-[#59C414] hover:bg-[#4EAC11] text-white text-lg font-semibold shadow-xl shadow-[#59C414]/20" data-testid="btn-hero-cta">
                Começar Grátis — 14 dias
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white text-lg font-semibold">
                Ver uma Demo
              </Button>
            </motion.div>

            <motion.div variants={FADE_UP_VARIANTS} className="flex flex-col items-center justify-center gap-3">
              <div className="flex gap-1 text-[#59C414]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-white/70 text-sm font-medium">Mais de 500 empresas já confiam no PontoSeguro</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Logos/Trust Bar */}
      <section id="confianca" className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Empresas que confiam no PontoSeguro</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Styled Text Logos */}
            {["Prefeitura de Campina Grande", "iFood", "Villa Forró", "Seven Uniformes", "Neide's Bar"].map((logo) => (
              <div key={logo} className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Funcionalidades */}
      <section id="funcionalidades" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0A4DB3] font-bold text-sm uppercase tracking-wider">Funcionalidades</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">Tudo que o seu RH precisa em um só lugar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard 
              icon={<Clock />} title="Marcação Inteligente" 
              desc="Registro de ponto via app, web ou integração com relógio físico, com validação em tempo real." 
            />
            <FeatureCard 
              icon={<BarChart3 />} title="Painel Gerencial" 
              desc="Visualize jornadas, horas extras e ausências com dashboards atualizados a cada minuto." 
            />
            <FeatureCard 
              icon={<Shield />} title="Segurança Avançada" 
              desc="Autenticação em dois fatores, logs imutáveis e criptografia ponta a ponta em cada registro." 
            />
            <FeatureCard 
              icon={<FileText />} title="Relatórios Automáticos" 
              desc="Feche a folha com um clique. Relatórios compatíveis com eSocial exportados em segundos." 
            />
            <FeatureCard 
              icon={<Bell />} title="Alertas Inteligentes" 
              desc="Notificações automáticas para atrasos, esquecimentos e inconsistências antes de virar problema." 
            />
            <FeatureCard 
              icon={<Users />} title="Multi-empresa" 
              desc="Gerencie filiais, equipes e departamentos distintos em uma única conta centralizada." 
            />
          </div>
        </div>
      </section>

      {/* 5. Como Funciona */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Simples de implantar. Rápido de usar.</h2>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200" />
            
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <StepCard number="1" title="Cadastre sua empresa" desc="Configure em menos de 10 minutos. Importe funcionários via CSV ou manualmente." />
              <StepCard number="2" title="Distribua o acesso" desc="Envie convites por e-mail. Cada colaborador acessa pelo app ou navegador." />
              <StepCard number="3" title="Acompanhe em tempo real" desc="Gestores têm visibilidade total. RH fecha a folha sem retrabalho." />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Depoimentos */}
      <section id="depoimentos" className="py-24 bg-[#002C8F] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">O que nossos clientes dizem</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Reduzimos em 80% o tempo gasto no fechamento de ponto. Antes levávamos dias, agora são minutos."
              initials="AM" name="Ana Paula M." role="Gerente de RH" company="Prefeitura de Campina Grande"
            />
            <TestimonialCard 
              quote="A transparência que o PontoSeguro trouxe acabou com os conflitos de marcação. Colaboradores e gestores agora têm a mesma visão."
              initials="CS" name="Carlos Eduardo S." role="Diretor de Operações" company="iFood"
            />
            <TestimonialCard 
              quote="Implantamos em 2 dias. Colaboradores fixos e sazonais com seu controle de jornada no app."
              initials="MT" name="Mariana T." role="Proprietária" company="Neide's Bar"
            />
          </div>
        </div>
      </section>

      {/* 7. Planos */}
      <section id="planos" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Planos para todo tamanho de empresa</h2>
            
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-semibold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Mensal</span>
              <button 
                data-testid="toggle-pricing"
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-7 rounded-full bg-gray-200 flex items-center px-1 transition-colors data-[active=true]:bg-[#0A4DB3]"
                data-active={isAnnual}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow transform transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Anual</span>
                <span className="text-xs font-bold text-[#59C414] bg-[#59C414]/10 px-2 py-0.5 rounded-full">Economize 20%</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Básico */}
            <PricingCard 
              name="Básico" 
              price={isAnnual ? "39" : "49"} 
              features={["Até 25 colaboradores", "Marcação web e app", "Relatórios mensais", "Suporte por e-mail"]}
              ctaText="Começar Grátis"
            />
            {/* Profissional */}
            <div className="relative">
              <div className="absolute -top-4 inset-x-0 flex justify-center z-10">
                <span className="bg-[#59C414] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Mais Popular</span>
              </div>
              <PricingCard 
                name="Profissional" 
                price={isAnnual ? "99" : "129"} 
                features={["Até 100 colaboradores", "Tudo do Básico", "Painel gerencial em tempo real", "Alertas automáticos", "Integração eSocial", "Suporte prioritário"]}
                ctaText="Começar Grátis"
                isHighlighted
              />
            </div>
            {/* Empresarial */}
            <PricingCard 
              name="Empresarial" 
              price="Custom" 
              features={["Colaboradores ilimitados", "Multi-empresa e filiais", "API e integrações customizadas", "SLA garantido + Gerente dedicado"]}
              ctaText="Falar com Vendas"
            />
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Perguntas frequentes</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
            <FAQItem value="item-1" question="O PontoSeguro é reconhecido pelo MTE?" answer="Sim. O sistema segue as normas da Portaria 671 do MTE para sistemas alternativos de controle de ponto." />
            <FAQItem value="item-2" question="Funciona sem internet?" answer="O app mobile registra os pontos offline e sincroniza automaticamente quando a conexão é restaurada." />
            <FAQItem value="item-3" question="Preciso de hardware especial?" answer="Não. Funciona até em um celular antigo, basta que ele tenha um navegador de internet." />
            <FAQItem value="item-4" question="Como é feita a migração dos dados anteriores?" answer="Nossa equipe de onboarding realiza a migração gratuitamente para clientes nos planos Profissional e Empresarial." />
            <FAQItem value="item-5" question="Posso cancelar a qualquer momento?" answer="Sim, sem multa ou fidelidade. Você mantém acesso até o fim do período pago." />
          </Accordion>
        </div>
      </section>

      {/* 9. CTA Final */}
      <section className="py-24 bg-[#002C8F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0A4DB3] blur-[100px] opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Pronto para eliminar os problemas de ponto da sua empresa?</h2>
          <p className="text-xl text-white/80 mb-10">Comece hoje. 14 dias grátis, sem cartão de crédito.</p>
          <Button size="lg" className="h-14 px-10 bg-[#59C414] hover:bg-[#4EAC11] text-white text-lg font-bold shadow-xl shadow-[#59C414]/20" data-testid="btn-final-cta">
            Começar Agora — É Grátis
          </Button>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#001A5E] text-white/80 py-16 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                <img src="/logo.png" alt="Logo PontoSeguro" className="h-12 w-auto object-contain bg-white p-1.5 rounded-lg shadow-sm group-hover:opacity-90 transition-all"/>
                PontoSeguro
              </div>
              <p className="text-sm max-w-xs leading-relaxed mb-6">
                A plataforma definitiva para controle de jornada e gestão de RH no Brasil.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/pontosegurodigital" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram />  </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Produto</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row items-center justify-between">
            <p>© 2026 PontoSeguro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-[#0A4DB3]/10 flex items-center justify-center text-[#0A4DB3] mb-6">
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-white border-2 border-[#59C414] text-[#59C414] font-black text-2xl flex items-center justify-center mb-6 shadow-sm relative z-10">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, initials, name, role, company }: { quote: string, initials: string, name: string, role: string, company: string }) {
  return (
    <div className="p-8 rounded-2xl bg-[#0A4DB3] border border-white/10 flex flex-col justify-between">
      <p className="text-white/90 text-lg italic leading-relaxed mb-8">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-white/70">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, price, features, ctaText, isHighlighted = false }: { name: string, price: string, features: string[], ctaText: string, isHighlighted?: boolean }) {
  return (
    <div className={`p-8 rounded-3xl ${isHighlighted ? 'bg-[#002C8F] text-white shadow-xl scale-105' : 'bg-white text-gray-900 border border-gray-200 shadow-sm'}`}>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-6">
        {price === "Custom" ? (
          <span className="text-4xl font-extrabold">Sob consulta</span>
        ) : (
          <div className="flex items-baseline">
            <span className="text-xl font-bold mr-1">R$</span>
            <span className="text-5xl font-extrabold">{price}</span>
            <span className={`ml-2 font-medium ${isHighlighted ? 'text-white/70' : 'text-gray-500'}`}>/mês</span>
          </div>
        )}
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className={`w-5 h-5 shrink-0 ${isHighlighted ? 'text-[#59C414]' : 'text-[#59C414]'}`} />
            <span className={isHighlighted ? 'text-white/90' : 'text-gray-600'}>{feat}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full h-12 text-lg font-bold rounded-xl ${
          isHighlighted 
            ? 'bg-[#59C414] hover:bg-[#4EAC11] text-white border-none' 
            : name === "Empresarial" 
              ? 'bg-transparent border-2 border-gray-300 hover:bg-gray-50 text-gray-900' 
              : 'bg-[#0A4DB3] hover:bg-[#002C8F] text-white border-none'
        }`}
      >
        {ctaText}
      </Button>
    </div>
  );
}

function FAQItem({ value, question, answer }: { value: string, question: string, answer: string }) {
  return (
    <AccordionItem value={value} className="border-b border-gray-100 last:border-0 px-4">
      <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-5 text-lg">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
