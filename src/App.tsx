import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, CheckCircle2, ChevronDown, ChevronUp, AlertCircle,
  BrainCircuit, HeartHandshake, Lightbulb, CheckIcon, XIcon, Quote,
  Check, X
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-warm-text bg-warm-bg overflow-x-hidden selection:bg-warm-cta selection:text-white">
      <HeroSection />
      <PainMirrorSection />
      <AggravationSection />
      <LearningSection />
      <ForWhomSection />
      <AuthoritySection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}

// ---------------------------
// 1. HERO SECTION
// ---------------------------
function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-5 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-warm-text/5 text-warm-text font-medium text-xs md:text-sm mb-6 tracking-wide uppercase">
          SURTO ZERO
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-balance">
          Você ama seu filho. Mas às vezes parece que você é a <span className="text-warm-cta italic">pior mãe do mundo.</span>
        </h1>
        <p className="text-base md:text-xl text-warm-text/80 mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed text-balance">
          Aprenda por que você vive estressada, irritada e no limite com seus filhos e o que fazer para sair desse ciclo sem se sentir culpada todos os dias.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-10">
          <div className="flex justify-center items-center gap-2 text-sm md:text-base text-warm-text/70 font-medium text-balance">
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-warm-cta shrink-0" />
            <span>Aula gratuita ao vivo — 23 de abril, às 20h</span>
          </div>
          <div className="bg-warm-cta/10 border border-warm-cta/30 text-warm-cta font-semibold px-4 py-2 rounded-lg text-sm md:text-base shadow-sm text-balance">
            A aula será exclusiva para os participantes do grupo no WhatsApp
          </div>
        </div>

        <motion.a
          href="https://chat.whatsapp.com/KtEnlLPtkXLA8NjXBfkrTY?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-warm-cta hover:bg-warm-cta-hover text-white px-6 py-4 md:px-8 md:py-5 rounded-full text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto block sm:inline-block text-center"
        >
          QUERO PARTICIPAR DO SURTO ZERO — É GRATUITO
        </motion.a>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-6 mt-8 text-xs md:text-sm text-warm-text/60">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-warm-cta" /> 100% gratuito</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-warm-cta" /> Online ao vivo</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-warm-cta" /> Apenas 1 encontro</span>
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------
// 2. ESPELHO DA DOR
// ---------------------------
function PainMirrorSection() {
  const cards = [
    {
      num: "01",
      text: "Você acorda com a intenção de ser calma… e antes do meio-dia já perdeu a paciência."
    },
    {
      num: "02",
      text: "Você fala, explica, avisa, ameaça. Nada muda. Amanhã é a mesma coisa."
    },
    {
      num: "03",
      text: "Você grita, se arrepende, pede desculpa. E vai dormir se sentindo a pior pessoa do mundo.",
      featured: true
    },
    {
      num: "04",
      text: "Seu filho desafia, responde, não obedece. E você não consegue entender o porquê."
    },
    {
      num: "05",
      text: "Você ama seu filho profundamente. Mas está tão esgotada que às vezes parece que não aguenta mais."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-16 text-balance">
          Você vive assim?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl flex flex-col justify-center ${card.featured ? 'bg-warm-bg shadow-sm border border-warm-text/5 sm:col-span-2' : 'bg-warm-bg/50'}`}
            >
              <div className="text-sm font-serif font-semibold text-warm-cta mb-3">{card.num}</div>
              <p className="text-base md:text-lg leading-relaxed text-balance">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-lg md:text-2xl font-serif italic text-warm-text/80 text-balance mb-10">
            "Não é fraqueza. Não é falta de amor. É falta da ferramenta certa."
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// 3. AGRAVAMENTO
// ---------------------------
function AggravationSection() {
  const cases = [
    "Você continua os dias no automático, cansada, irritada, sem paciência.",
    "Seu filho aprende que só obedece quando você grita. E vai testar cada vez mais.",
    "O grito, o estresse e a culpa viram o padrão da sua casa.",
    "A relação entre vocês vai se desgastando e você sente isso acontecendo.",
    "E o pior: você começa a achar que o problema é você como mãe."
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-text text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-16 text-balance">O que acontece se nada mudar?</h2>
        
        <div className="space-y-4 md:space-y-6">
          {cases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-3 md:gap-4 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-warm-cta shrink-0 mt-0.5" />
              <p className="text-base md:text-lg font-light leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center px-4">
          <p className="text-lg md:text-2xl font-serif text-white/90 text-balance mb-10">
            Não precisa ser assim. <span className="text-warm-cta italic font-medium">Mas também não muda sozinho.</span>
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// 4. O QUE VOCÊ VAI APRENDER
// ---------------------------
function LearningSection() {
  const blocks = [
    {
      icon: <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" />,
      title: "Por que você vive irritada...",
      desc: "Você vai entender o que está acontecendo com você, não com ele."
    },
    {
      icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" />,
      title: "O que realmente está por trás das explosões...",
      desc: "Existe uma razão e quando você entende, tudo começa a mudar."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" />,
      title: "O que fazer nos momentos que mais te desgastam...",
      desc: "Birra, desrespeito, desobediência... sem piorar a situação."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-16 max-w-3xl mx-auto text-balance">
          Nessa aula gratuita, você vai entender na prática:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-6 md:p-8 xl:p-10 rounded-2xl shadow-sm border border-warm-text/5 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-warm-bg flex items-center justify-center rounded-full mb-5 md:mb-6">
                {block.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-balance">{block.title}</h3>
              <p className="text-sm md:text-base text-warm-text/70 leading-relaxed">{block.desc}</p>
            </motion.div>
          ))}
        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

// ---------------------------
// 5. PARA QUEM É / NÃO É
// ---------------------------
function ForWhomSection() {
  return (
    <section className="py-16 md:py-24 px-5 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 rounded-3xl border border-warm-text/10 overflow-hidden">
          
          <div className="p-6 md:p-12 bg-white">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-6 md:mb-8 flex items-center gap-3">
              <CheckIcon className="w-6 h-6 md:w-8 md:h-8 text-green-500" /> Para quem é
            </h3>
            <ul className="space-y-4">
              {["Mães cansadas e irritadas", "Quem perde a paciência rápido", "Mães que chegaram no limite", "Quem tem filhos com comportamento desafiador", "Mães que desejam genuinamente ser melhores para seus filhos"].map((t, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-warm-text/80 items-start">
                  <Check className="w-5 h-5 text-green-500 shrink-0" /> <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-12 bg-warm-bg/50">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-6 md:mb-8 flex items-center gap-3">
              <XIcon className="w-6 h-6 md:w-8 md:h-8 text-warm-cta" /> Para quem NÃO é
            </h3>
            <ul className="space-y-4">
              {["Quem acha que o problema é e sempre será apenas da criança", "Quem procura uma fórmula mágica ou botões de obediência", "Quem não está disposta a enxergar as coisas por novos caminhos"].map((t, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-warm-text/80 items-start">
                  <X className="w-5 h-5 text-warm-cta shrink-0" /> <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

// ---------------------------
// 6. AUTORIDADE
// ---------------------------
function AuthoritySection() {
  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-20">
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-warm-text/5 relative">
            <img 
              src="https://i.postimg.cc/TY20fTtz/DAPHNE-LUCCHESI-BOSS-(8).webp" 
              alt="Dáphne Lucchesi"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-warm-cta font-medium uppercase tracking-wider text-xs md:text-sm mb-3 md:mb-4 block">A sua mentora</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-balance">Prazer, sou Dáphne Lucchesi</h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-warm-text/80 font-light leading-relaxed">
            <p>
              Pedagoga, especialista em Neurociência, Mindfulness e Inteligência Emocional. E o mais importante: mãe de 3.
            </p>
            <p>
              Eu conheço de perto o desespero de tentar fazer o certo, ler todos os livros, e ainda assim explodir diante de uma birra interminável no fim do dia.
            </p>
            <p>
              Nos últimos anos, já ajudei mais de <strong className="font-medium text-warm-text">3.500 mães</strong> a saírem do ciclo do grito, da culpa e da exaustão, recuperando a paz em casa e o vínculo com seus filhos usando ferramentas práticas que a neurociência explica.
            </p>
          </div>
          
          <CTAButton className="mt-10 md:mt-12 md:justify-start" />
        </div>
      </div>
    </section>
  );
}

// ---------------------------
// 7. DEPOIMENTOS
// ---------------------------
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Juliana R.",
      text: "Eu achava que não tinha jeito para mim, que minha filha ia crescer me odiando pelo tanto que eu gritava. Uma aula apenas já mudou minha forma de reagir e, nossa... foi como tirar um peso de 100kg das costas."
    },
    {
      name: "Fernanda M.",
      text: "Sempre fui muito cética com essas coisas na internet, mas o que ela ensina é aplicável. Não é utopia. Hoje eu entendo porque eu estava perdendo a cabeça e finalmente sei como parar antes de explodir."
    },
    {
      name: "Camila S.",
      text: "Meu filho de 5 anos parecia que me enfrentava de propósito. Depois de entender o que a Dáphne ensina, eu entendi o pedido de ajuda dele. Nossa casa tem paz agora e eu consigo me deitar sem chorar de culpa."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-16 text-balance">Elas já viveram a transformação</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-warm-bg/30 p-6 md:p-8 rounded-3xl relative"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-warm-cta/30 absolute top-6 right-6 md:top-8 md:right-8" />
              <p className="text-base md:text-lg italic text-warm-text/80 mb-6 md:mb-8 relative z-10 font-serif leading-relaxed text-balance">
                "{test.text}"
              </p>
              <div className="font-semibold text-warm-text text-sm md:text-base">— {test.name}</div>
            </motion.div>
          ))}
        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

// ---------------------------
// 8. CTA FINAL (Virada de Chave)
// ---------------------------
function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 px-5 bg-warm-text text-white relative text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 md:mb-12 text-balance">Você pode continuar assim...</h2>
        
        <div className="text-lg md:text-2xl font-light text-white/70 mb-8 max-w-2xl mx-auto text-balance">
          <span className="line-through decoration-warm-cta decoration-2">Gritando, se sentindo mal, esperando mudar sozinho...</span>
        </div>
        
        <p className="text-xl md:text-3xl lg:text-4xl font-serif italic mb-12 md:mb-16 text-white text-balance">
          Ou você pode reservar <span className="text-warm-cta font-medium">uma noite</span> para entender e começar a mudar.
        </p>

        <motion.a
          href="https://chat.whatsapp.com/KtEnlLPtkXLA8NjXBfkrTY?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-warm-cta hover:bg-warm-cta-hover text-white px-6 py-4 md:px-8 md:py-5 rounded-full text-base md:text-xl font-medium shadow-2xl transition-all duration-300 w-full sm:w-auto block sm:inline-block text-center"
        >
          QUERO PARTICIPAR DO SURTO ZERO
        </motion.a>
        <p className="mt-6 text-white/50 text-xs md:text-sm text-balance">Aula gratuita · Vagas limitadas no zoom.</p>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-warm-cta/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-warm-cta/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}

// ---------------------------
// 9. FAQ
// ---------------------------
function FAQSection() {
  const faqs = [
    {
      q: "A aula é realmente gratuita?",
      a: "Sim, 100% gratuita. Você não pagará nada para participar desse encontro ao vivo e ter acesso ao conteúdo que será entregue."
    },
    {
      q: "A aula vai ficar gravada?",
      a: "Não. A aula 'Surto Zero' é uma experiência ao vivo para garantir que você tenha dedicação e presença. Não haverá replay."
    },
    {
      q: "Como faço para assistir?",
      a: "Após confirmar sua inscrição, você receberá o link de acesso seguro por e-mail e também no grupo de avisos do WhatsApp."
    },
    {
      q: "Meu filho é bebê, também serve para mim?",
      a: "O foco principal da aula é em comportamentos de limite e desgastes, mais evidentes a partir dos 2 anos de idade, mas os princípios de regulação emocional ensinados servem para mães em todas as fases."
    },
    {
      q: "Não tenho muito tempo. Quanto dura a aula?",
      a: "Programe-se para estar conosco por cerca de 1 hora e meia a 2 horas. Será um tempo muito bem investido que trará retorno na sua rotina diária."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 bg-warm-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-10 md:mb-16 text-balance">Perguntas Frequentes</h2>
        
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <CTAButton className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-warm-text/10 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 md:px-6 md:py-5 flex justify-between items-center text-left focus:outline-none focus-visible:bg-warm-text/5"
      >
        <span className="font-semibold text-base md:text-lg pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-warm-cta shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-warm-cta shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-warm-text/70 leading-relaxed font-light border-t border-warm-text/5 pt-3 md:pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------
// FOOTER
// ---------------------------
function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-white text-center text-warm-text/50 text-xs md:text-sm px-5">
      <p>&copy; {new Date().getFullYear()} Dáphne Lucchesi. Todos os direitos reservados.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6">
        <a href="#" className="hover:text-warm-cta transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-warm-cta transition-colors">Política de Privacidade</a>
      </div>
    </footer>
  );
}

// ---------------------------
// REUSABLE CTA
// ---------------------------
function CTAButton({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center w-full ${className}`}>
      <motion.a
        href="https://chat.whatsapp.com/KtEnlLPtkXLA8NjXBfkrTY?mode=gi_t"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-warm-cta hover:bg-warm-cta-hover text-white px-6 py-4 md:px-8 md:py-5 rounded-full text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto block sm:inline-block text-center"
      >
        QUERO PARTICIPAR DO SURTO ZERO
      </motion.a>
    </div>
  );
}
