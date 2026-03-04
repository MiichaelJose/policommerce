import { useState } from 'react';
import { 
  ArrowRight, Menu, TrendingUp, ArrowDown, CheckCircle2,
  PackageCheck, BadgePercent, Truck,
  Headset, Check, MapPin, Mail, Building2, Instagram,
  MessageCircle, Star, X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="text-slate-800 antialiased selection:bg-brand-500 selection:text-white flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center text-white shadow-md">
                <Package className="w-6 h-6" />
              </div> */}
              <img src="/logo.png" alt="PoliCommerce" className="h-12 md:h-16 w-auto object-contain" />
              {/* <span className="font-bold text-2xl tracking-tight text-brand-900">
                Poli<span className="text-brand-600">Commerce</span>
              </span> */}
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Para Revendedores</a>
              <a href="#produtos" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Produtos</a>
              <a href="#vantagens" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Como Funciona</a>
              {/* <a href="#depoimentos" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Avaliações</a> */}
              <a href="#seja-revendedor" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Contato</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a href="#seja-revendedor" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-brand-500/30 flex items-center gap-2">
                Quero revender
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={handleMobileMenuToggle} className="md:hidden p-2 text-slate-600 hover:text-brand-600 focus:outline-none">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#inicio" onClick={handleMobileLinkClick} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Para Revendedores</a>
            <a href="#produtos" onClick={handleMobileLinkClick} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Produtos</a>
            <a href="#vantagens" onClick={handleMobileLinkClick} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Como Funciona</a>
            <a href="#depoimentos" onClick={handleMobileLinkClick} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Avaliações</a>
            <a href="#seja-revendedor" onClick={handleMobileLinkClick} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Contato</a>
            <a href="#seja-revendedor" onClick={handleMobileLinkClick} className="block px-3 py-3 mt-4 text-base font-bold text-center text-white bg-brand-600 rounded-md shadow-sm">Quero revender</a>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative bg-white pt-16 pb-20 lg:py-0 overflow-hidden lg:min-h-[calc(100vh-80px)] xl:min-h-screen flex items-center">
          {/* Background Image Container (Absolute Right for Desktop) */}
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] z-0">
            <div className="w-full h-full overflow-hidden lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Negócio Digital PoliCommerce" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-900/10 pointer-events-none"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:py-24">
              
              {/* Hero Content */}
              <div className="max-w-2xl">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-6 border border-brand-200">
                  <TrendingUp className="w-4 h-4" />
                  Atacado Exclusivo para Lojistas
                </div> */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                  Atacado de Utilidades para Lojistas que Buscam Giro e Margem
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  Fornecemos canecas, potes e vasos com pronta entrega e condições comerciais pensadas para revenda.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
                  <a href="#produtos" className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all shadow-lg shadow-brand-500/30 sm:whitespace-nowrap text-center">
                    Quero ver os produtos para revenda
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  </a>
                  <a href="#vantagens" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-5 py-2 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-base font-medium transition-all shadow-sm sm:whitespace-nowrap text-center">
                    Como funciona a revenda
                  </a>
                </div>
                
                <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Margens de até 150%
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    Mais de 10 mil envios
                  </div>
                </div>
              </div>

              {/* Mobile Image (Visible only on small screens) */}
              <div className="lg:hidden relative w-full h-[350px] sm:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Negócio Digital PoliCommerce" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="vantagens" className="py-24 bg-brand-900 border-y border-brand-800 relative overflow-hidden">
          {/* Subtle background flair */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-brand-800/30 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-orange-400 font-semibold tracking-widest uppercase text-sm mb-3">Por que escolher a PoliCommerce?</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Vantagens reais para quem vive de revenda</h3>
              <p className="text-lg text-brand-100/90 leading-relaxed">Eliminamos intermediários para que você compre direto da fonte com segurança, rapidez e qualidade superior.</p>
            </div>

            <div className="max-w-5xl mx-auto relative px-4 sm:px-0">
              {/* Timeline Vertical Line */}
              <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-brand-700"></div>
              {/* Mobile Timeline Vertical Line */}
              <div className="sm:hidden absolute left-[35px] top-6 bottom-6 w-0.5 bg-brand-700"></div>

              <div className="flex flex-col gap-14 sm:gap-24">
                
                {/* Item 1 - Esquerda (Desktop) / Padrão (Mobile) */}
                <div className="relative group w-full sm:w-1/2 sm:pr-12 md:pr-16 pl-20 sm:pl-0 sm:ml-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-[24px] sm:left-auto sm:-right-[12px] top-7 sm:top-1 w-6 h-6 rounded-full border-[3px] border-accent-500 bg-brand-900 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-500"></div>
                  </div>
                  
                  <div className="flex flex-col sm:items-end sm:text-right gap-3 bg-brand-800/30 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-brand-700/50 sm:border-transparent">
                    <div className="flex items-center sm:flex-row-reverse gap-3 sm:gap-4">
                      <TrendingUp className="w-8 h-8 text-accent-500 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <h4 className="text-xl md:text-2xl font-bold text-white m-0">Produtos de giro rápido</h4>
                    </div>
                    <p className="text-brand-100/80 text-base leading-relaxed mt-1">
                      Nossa curadoria é focada em utilidades de alta demanda diária, garantindo que os produtos não fiquem parados no seu estoque. Vendemos o que os seus clientes buscam todos os dias.
                    </p>
                  </div>
                </div>

                {/* Item 2 - Direita (Desktop) / Padrão (Mobile) */}
                <div className="relative group w-full sm:w-1/2 sm:pl-12 md:pl-16 pl-20 sm:ml-auto">
                  <div className="absolute left-[24px] sm:-left-[12px] top-7 sm:top-1 w-6 h-6 rounded-full border-[3px] border-accent-500 bg-brand-900 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-500"></div>
                  </div>
                  <div className="flex flex-col gap-3 bg-brand-800/30 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-brand-700/50 sm:border-transparent">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <PackageCheck className="w-8 h-8 text-accent-500 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <h4 className="text-xl md:text-2xl font-bold text-white m-0">Reposição constante de estoque</h4>
                    </div>
                    <p className="text-brand-100/80 text-base leading-relaxed mt-1">
                      Temos estoque robusto e centro de distribuição eficiente para que sua loja nunca fique sem os itens campeões de venda. Pediu, chegou sem burocracia.
                    </p>
                  </div>
                </div>

                {/* Item 3 - Esquerda (Desktop) / Padrão (Mobile) */}
                <div className="relative group w-full sm:w-1/2 sm:pr-12 md:pr-16 pl-20 sm:pl-0 sm:ml-0">
                  <div className="absolute left-[24px] sm:left-auto sm:-right-[12px] top-7 sm:top-1 w-6 h-6 rounded-full border-[3px] border-accent-500 bg-brand-900 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-500"></div>
                  </div>
                  <div className="flex flex-col sm:items-end sm:text-right gap-3 bg-brand-800/30 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-brand-700/50 sm:border-transparent">
                    <div className="flex items-center sm:flex-row-reverse gap-3 sm:gap-4">
                      <BadgePercent className="w-8 h-8 text-accent-500 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <h4 className="text-xl md:text-2xl font-bold text-white m-0">Condições exclusivas para lojistas</h4>
                    </div>
                    <p className="text-brand-100/80 text-base leading-relaxed mt-1">
                      Desenvolvemos combos com preços de atacado e descontos progressivos, permitindo que revendedores e distribuidores tenham margens de lucro excelentes.
                    </p>
                  </div>
                </div>

                {/* Item 4 - Direita (Desktop) / Padrão (Mobile) */}
                <div className="relative group w-full sm:w-1/2 sm:pl-12 md:pl-16 pl-20 sm:ml-auto">
                  <div className="absolute left-[24px] sm:-left-[12px] top-7 sm:top-1 w-6 h-6 rounded-full border-[3px] border-accent-500 bg-brand-900 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-500"></div>
                  </div>
                  <div className="flex flex-col gap-3 bg-brand-800/30 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-brand-700/50 sm:border-transparent">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Truck className="w-8 h-8 text-accent-500 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <h4 className="text-xl md:text-2xl font-bold text-white m-0">Envio para todo o Brasil</h4>
                    </div>
                    <p className="text-brand-100/80 text-base leading-relaxed mt-1">
                      Trabalhamos com as melhores transportadoras para garantir fretes competitivos, rastreamento prático e segurança máxima até a porta do seu estabelecimento.
                    </p>
                  </div>
                </div>

                {/* Item 5 - Esquerda (Desktop) / Padrão (Mobile) */}
                <div className="relative group w-full sm:w-1/2 sm:pr-12 md:pr-16 pl-20 sm:pl-0 sm:ml-0">
                  <div className="absolute left-[24px] sm:left-auto sm:-right-[12px] top-7 sm:top-1 w-6 h-6 rounded-full border-[3px] border-accent-500 bg-brand-900 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-500"></div>
                  </div>
                  <div className="flex flex-col sm:items-end sm:text-right gap-3 bg-brand-800/30 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-brand-700/50 sm:border-transparent">
                    <div className="flex items-center sm:flex-row-reverse gap-3 sm:gap-4">
                      <Headset className="w-8 h-8 text-accent-500 shrink-0 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <h4 className="text-xl md:text-2xl font-bold text-white m-0">Atendimento focado em revenda</h4>
                    </div>
                    <p className="text-brand-100/80 text-base leading-relaxed mt-1">
                      Oferecemos um suporte humanizado e ágil, focado exclusivamente no comprador B2B, além de ajudar você a entender quais itens vendem mais no seu nicho.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Linhas de produtos para revenda</h2>
                <p className="text-lg text-slate-600">Produtos de necessidade diária, com giro constante no varejo e recompra frequente. Principais categorias organizadas em kits prontos para revenda.</p>
              </div>
              <a href="https://wa.me/5519990047324?text=Ol%C3%A1%21%20Gostaria%20de%20ver%20o%20cat%C3%A1logo%20de%20produtos." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-brand-100/50 hover:bg-brand-100 text-brand-700 px-6 py-3 rounded-lg font-semibold transition-colors border border-brand-200">
                Ver Catálogo <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 - Vasos */}
              <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-64 bg-slate-100 border-b border-slate-100 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-slate-500" />
                    Produto bem avaliado
                  </div>
                  <img src="/products/vasos-gem.png" alt="Vasos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Jardinagem</span>
                    <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>4,7</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">Vasos</h4>
                  <p className="text-sm text-slate-600 mb-4">Vasos de parede verticais, floreiras e mini vasos para suculentas.</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-accent-500" />
                      Excelente saída em floriculturas
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Potes */}
              <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-64 bg-slate-100 border-b border-slate-100 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/95  backdrop-blur-sm text-accent-800 border border-accent-200 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5 text-accent-600" />
                    Alta saída
                  </div>
                  <img src="/products/pote-gem.png" alt="Potes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Utilidades</span>
                    <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>4,9 <span className="text-slate-400 font-normal ml-1"> (+300 avaliações)</span></span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">Potes e Marmitas</h4>
                  <p className="text-sm text-slate-600 mb-4">Kits de 750ml a 1000ml. Tampas com trava segura e base empilhável.</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <TrendingUp className="w-4 h-4 text-accent-500" />
                      Alta recompra no varejo
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Canecas */}
              <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="h-64 bg-slate-100 border-b border-slate-100 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-slate-500" />
                    Produto recorrente
                  </div>
                  <img src="/products/pratos-copos-gem.png" alt="Canecas e Pratos" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">UTILIDADES</span>
                    <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>4,8</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">Canecas e Pratos</h4>
                  <p className="text-sm text-slate-600 mb-4">Plástico resistente, ideal para creches, merendas e personalização.</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-accent-500" />
                      Boa aceitação em escolas e eventos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Linha explicativa da seção */}
            <div className="mt-12 flex items-center justify-center">
              <p className="text-sm text-slate-700 bg-brand-50 border border-brand-100 px-5 py-3 rounded-xl inline-flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left shadow-sm">
                <Check className="w-5 h-5 text-brand-600 shrink-0" />
                Produtos com avaliações reais e alta aceitação no varejo. Indicadores baseados em histórico de vendas e feedbacks de clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {/* <section id="depoimentos" className="py-20 bg-brand-50 border-y border-brand-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-brand-300 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-relaxed">
              "Trabalhar com os kits da PoliCommerce mudou o fluxo de caixa da minha loja de utilidades. Os potes de 800ml com trava vendem absurdamente rápido, a qualidade surpreende as clientes e a minha margem de lucro nunca foi tão boa."
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-300 image-placeholder p-0 overflow-hidden text-[10px] leading-tight flex-shrink-0">
                
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Juliana M.</p>
                <p className="text-sm text-slate-500">Lojista Parceira há 2 anos</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* WhatsApp Conversion Section */}
        <section id="seja-revendedor" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-brand-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-brand-100 font-medium text-sm mb-6 border border-slate-700">
                <Building2 className="w-4 h-4" />
                Atendimento Exclusivo para Lojistas e Revendedores
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Fale direto com a nossa equipe de atacado
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Inicie uma conversa rápida no WhatsApp. Nós ajudamos você a montar o pedido ideal com base no seu nicho e enviamos a tabela de preços para revenda.
              </p>
            </div>

            {/* How it works steps */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left relative">
              {/* Connecting line for desktop */}
              <div className="hidden sm:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-slate-800 z-0"></div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl relative z-10 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-sm">1</div>
                <h4 className="text-white font-semibold mb-2">Inicie o Atendimento</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Clique no botão abaixo para abrir uma conversa direta com nosso time via WhatsApp.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl relative z-10 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-brand-900/50 border-2 border-brand-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-sm">2</div>
                <h4 className="text-white font-semibold mb-2">Consultoria Rápida</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Fale sobre o seu negócio e conheça as linhas de produtos e kits disponíveis hoje.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl relative z-10 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-sm">3</div>
                <h4 className="text-white font-semibold mb-2">Tabela e Pedido</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Receba a tabela atualizada, alinhe as condições comerciais e defina a logística.</p>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col items-center gap-4">
              <a 
                href="https://wa.me/5519990047324?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20consultor%20de%20vendas." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex justify-center items-center gap-3 bg-[#25D366] hover:bg-[#20BE5A] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-green-900/40 w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6" />
                Falar com consultor de vendas
              </a>
              <span className="text-sm text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Atendimento em horário comercial.
              </span>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="PoliCommerce" className="h-12 md:h-16 w-auto object-contain" />
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Especialistas na fabricação e distribuição atacadista de utilidades plásticas duráveis, rentáveis e seguras.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/policommerce_/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-1 flex flex-col md:items-center text-left">
              <div>
                <h4 className="text-white font-semibold mb-4 text-left md:text-center">Contato Oficial</h4>
                <ul className="space-y-3 text-sm inline-block">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 text-brand-500 flex-shrink-0" />
                    <span>Rua Norma desanti saragiotto, 30<br />Jardim Marajoara, Pedreira SP<br />13920-000, Brasil</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <span>policommercecontato@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <span>CNPJ: 43.437.161/0002-30</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-1 md:flex md:flex-col md:items-end text-left">
              <div>
                <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#inicio" className="hover:text-brand-400 transition-colors">Início</a></li>
                  <li><a href="#vantagens" className="hover:text-brand-400 transition-colors">Vantagens</a></li>
                  <li><a href="#produtos" className="hover:text-brand-400 transition-colors">Catálogo</a></li>
                  <li><a href="#seja-revendedor" className="hover:text-brand-400 transition-colors">Seja Revendedor</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2026 PoliCommerce Comercial Ltda. Todos os direitos reservados.</p>
            <p>Desenvolvido para Lojistas Brasileiros.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
