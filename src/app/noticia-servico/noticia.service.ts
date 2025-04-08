
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
	private news: News[] = [
		{
		  id: 1,
		  title: 'Trava de domicílio bancário: saiba o que é',
		  excerpt: 'A trava de domicílio bancário controla transações e recebíveis em conta, especialmente cartões.',
		  content: 'A trava de domicílio bancário é um mecanismo utilizado por instituições financeiras para garantir que as transações e recebíveis de uma empresa, como os pagamentos via cartão de crédito, sejam direcionados para uma conta específica. Isso é comum em operações de crédito, como antecipação de recebíveis, onde o banco exige que os valores sejam depositados em uma conta vinculada para maior controle e segurança. Essa prática pode ser vantajosa para empresas que buscam crédito, mas também exige atenção às condições contratuais.',
		  image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		  date: '2025-04-08'
		},
		{
		  id: 2,
		  title: 'Cooperativa VIVA distribui fundo cooperativo recorde em 2024',
		  excerpt: 'Os sócios da Cooperativa VIVA celebraram a distribuição do fundo cooperativo, que alcançou um valor recorde no último ano.',
		  content: 'A Cooperativa VIVA realizou, no final de 2024, a distribuição do seu fundo cooperativo, uma reserva financeira programada que beneficia diretamente os sócios. Este ano, o fundo alcançou um valor recorde, resultado do trabalho conjunto e da gestão democrática dos rendimentos. Cada sócio recebeu uma parte proporcional, que pode ser usada para investimentos pessoais, educação ou outras necessidades. "Esse é um dos grandes diferenciais de ser parte da VIVA: aqui, nós somos os donos e colhemos os frutos do nosso esforço coletivo", destacou Maria Silva, uma das sócias fundadoras. A iniciativa reforça o compromisso da cooperativa com o bem-estar econômico e social de seus membros.',
		  image: 'https://images.pexels.com/photos/7793134/pexels-photo-7793134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-01-15'
		},
		{
		  id: 3,
		  title: 'Cooperativa VIVA: a chave para o sucesso na vida de João',
		  excerpt: 'Conheça a história de João, que encontrou na Cooperativa VIVA uma nova oportunidade de trabalho e crescimento pessoal.',
		  content: 'João Oliveira, 35 anos, estava desempregado e enfrentando dificuldades financeiras quando decidiu se tornar sócio da Cooperativa VIVA. "Eu não sabia muito sobre cooperativas, mas a ideia de ser dono do meu próprio trabalho me atraiu", conta João. Após se juntar à VIVA, ele passou a atuar em projetos de prestação de serviços, gerindo seus próprios rendimentos e contribuindo para a cooperativa. Com a remuneração superior, sem intermediadores, João conseguiu pagar suas dívidas, contratar um seguro de vida e até iniciar um curso técnico. "A VIVA me deu autonomia e dignidade. Hoje, eu sei que faço parte de algo maior", afirma. Histórias como a de João mostram o impacto positivo do modelo cooperativo na vida de seus membros.',
		  image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg',
		  date: '2025-02-20'
		},
		{
		  id: 4,
		  title: 'Dicas para sócios: como gerir seus rendimentos na Cooperativa VIVA',
		  excerpt: 'Aprenda a planejar suas finanças e aproveitar ao máximo os benefícios de ser um sócio da Cooperativa VIVA.',
		  content: 'Ser sócio da Cooperativa VIVA oferece vantagens únicas, como a gestão direta dos seus rendimentos e benefícios como INSS, seguro de vida e convênios. Para ajudar os sócios a aproveitarem ao máximo essas oportunidades, separamos algumas dicas práticas: 1) Planeje seus gastos: Reserve uma parte dos seus rendimentos para o futuro, aproveitando o fundo cooperativo no final do ano. 2) Acompanhe seus recolhimentos: Certifique-se de que o INSS está sendo recolhido corretamente para garantir sua aposentadoria. 3) Aproveite os convênios: A VIVA oferece parcerias com empresas que podem trazer descontos em saúde, educação e mais. 4) Participe das decisões: Como a cooperativa é democraticamente controlada, sua voz é essencial para definir os rumos da VIVA. Com essas dicas, você pode maximizar os benefícios de ser um sócio e construir um futuro mais seguro.',
		  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		  date: '2025-03-10'
		},
		{
		  id: 5,
		  title: 'Cooperativa VIVA promove workshop sobre educação financeira para sócios',
		  excerpt: 'Evento reuniu mais de 50 sócios para discutir gestão de finanças e planejamento de longo prazo.',
		  content: 'No último dia 15 de março, a Cooperativa VIVA realizou um workshop de educação financeira exclusivo para seus sócios. O evento, que contou com a participação de mais de 50 membros, abordou temas como gestão de rendimentos, planejamento financeiro e o uso estratégico do fundo cooperativo. "Nosso objetivo é empoderar nossos sócios para que eles tomem as melhores decisões financeiras", explicou Ana Costa, coordenadora do evento. Durante o workshop, os participantes aprenderam a criar orçamentos, investir de forma segura e planejar a aposentadoria com o recolhimento do INSS. A iniciativa faz parte do compromisso da VIVA em atender às necessidades econômicas e sociais de seus membros, promovendo o desenvolvimento pessoal e coletivo.',
		  image: 'https://images.pexels.com/photos/8761328/pexels-photo-8761328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-03-20'
		},
		{
		  id: 6,
		  title: 'O impacto das cooperativas no Brasil: por que a VIVA faz a diferença',
		  excerpt: 'Saiba como o modelo cooperativo, como o da VIVA, contribui para a economia e o bem-estar social no Brasil.',
		  content: 'As cooperativas, como a VIVA, desempenham um papel fundamental na economia brasileira, promovendo inclusão social e econômica. Segundo dados da Organização das Cooperativas Brasileiras (OCB), as cooperativas geram mais de 400 mil empregos diretos no país e movimentam bilhões de reais anualmente. A Cooperativa VIVA se destaca nesse cenário ao oferecer um modelo de trabalho onde os próprios sócios são os donos, eliminando intermediadores e garantindo uma remuneração mais justa. Além disso, a VIVA investe no bem-estar de seus membros com benefícios como seguro de vida, convênios e o fundo cooperativo, que é distribuído ao final de cada ano. "Fazer parte da VIVA é mais do que um trabalho, é uma forma de construir um futuro melhor juntos", afirma Carlos Mendes, presidente da cooperativa. Esse modelo democrático e colaborativo é um exemplo de como as cooperativas podem transformar vidas e comunidades.',
		  image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-04-01'
		},
		{
		  id: 7,
		  title: 'Cooperativa VIVA lança novo convênio de saúde para sócios',
		  excerpt: 'Parceria com clínica local oferece descontos exclusivos em consultas e exames para os membros da VIVA.',
		  content: 'A Cooperativa VIVA anunciou, no início de abril, um novo convênio de saúde para seus sócios, em parceria com a clínica Saúde Total. A iniciativa oferece descontos de até 30% em consultas médicas, exames laboratoriais e odontológicos. "Sabemos que a saúde é uma prioridade para nossos sócios, e esse convênio é mais um passo para garantir o bem-estar de todos", afirmou Laura Almeida, responsável pela área de benefícios da VIVA. Além disso, os sócios terão acesso a um programa de prevenção com check-ups anuais gratuitos. A novidade foi bem recebida pelos membros, que destacaram a importância de benefícios que vão além da remuneração. "Com a VIVA, eu não só ganho mais, mas também tenho apoio para cuidar da minha saúde", disse Pedro Santos, sócio há dois anos. O convênio já está em vigor e pode ser acessado por todos os membros ativos.',
		  image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-04-10'
		},
		{
		  id: 8,
		  title: 'Assembleia Geral da Cooperativa VIVA define metas para 2025',
		  excerpt: 'Sócios se reuniram para planejar o futuro da cooperativa, com foco em crescimento e novos projetos.',
		  content: 'No dia 20 de abril, a Cooperativa VIVA realizou sua Assembleia Geral Anual, um momento crucial para a gestão democrática da cooperativa. Durante o encontro, os sócios discutiram e aprovaram as metas para 2025, que incluem a expansão dos serviços oferecidos, a criação de novos convênios e o fortalecimento do fundo cooperativo. "A assembleia é o coração da VIVA. Aqui, cada sócio tem voz e voto para decidir o futuro da nossa cooperativa", explicou Mariana Lopes, presidente da assembleia. Entre os projetos aprovados, destaca-se a criação de um programa de capacitação profissional para os sócios, que oferecerá cursos gratuitos em áreas como gestão de projetos e tecnologia. A assembleia também aprovou um aumento na reserva do fundo cooperativo, garantindo maior segurança financeira para os membros no final do ano. O evento reforça o compromisso da VIVA com a democracia e a participação ativa de seus sócios.',
		  image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-04-20'
		},
		{
		  id: 9,
		  title: 'Dicas para novos sócios: como se integrar à Cooperativa VIVA',
		  excerpt: 'Saiba como começar sua jornada na VIVA e aproveitar todos os benefícios de ser um sócio.',
		  content: 'Se você é um novo sócio da Cooperativa VIVA, parabéns por fazer parte de uma comunidade que valoriza o trabalho coletivo e a autonomia! Para ajudá-lo a se integrar, aqui estão algumas dicas: 1) Participe das reuniões: As assembleias e encontros são oportunidades para conhecer outros sócios e contribuir com ideias. 2) Conheça seus benefícios: A VIVA oferece INSS, seguro de vida, convênios e o fundo cooperativo – informe-se sobre como utilizá-los. 3) Planeje sua rotina: Como sócio, você gerencia seus próprios rendimentos, então organize seu tempo e finanças para maximizar os ganhos. 4) Engaje-se nos projetos: A VIVA atua através dos sócios, então envolva-se nas atividades e mostre seu comprometimento. "Ser sócio da VIVA é uma oportunidade única de crescer profissionalmente e pessoalmente, mas exige participação ativa", destaca Clara Menezes, mentora de novos sócios. Com essas dicas, você estará pronto para aproveitar ao máximo sua experiência na cooperativa.',
		  image: 'https://images.pexels.com/photos/8250133/pexels-photo-8250133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-05-05'
		},
		{
		  id: 10,
		  title: 'Cooperativa VIVA celebra 10 anos de história com evento especial',
		  excerpt: 'Evento reuniu sócios, parceiros e comunidade para comemorar uma década de conquistas.',
		  content: 'No dia 15 de maio, a Cooperativa VIVA celebrou seus 10 anos de existência com um evento especial que reuniu sócios, parceiros e membros da comunidade local. A comemoração incluiu palestras sobre o impacto do cooperativismo, apresentações culturais e um jantar de confraternização. "Chegar a 10 anos é um marco incrível. A VIVA nasceu de um sonho coletivo e hoje é uma realidade que transforma vidas", disse Roberto Lima, um dos fundadores da cooperativa. Durante o evento, foram premiados os sócios mais antigos e anunciados novos projetos para o futuro, como a criação de um fundo de apoio para educação dos filhos dos sócios. A celebração também destacou o crescimento da VIVA, que hoje conta com mais de 200 sócios e uma sólida rede de parcerias. O evento foi um momento de gratidão e renovação do compromisso com os valores cooperativos.',
		  image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-05-15'
		},
		{
		  id: 11,
		  title: 'A importância do seguro de vida para os sócios da Cooperativa VIVA',
		  excerpt: 'Entenda como o seguro de vida oferecido pela VIVA protege você e sua família.',
		  content: 'Um dos benefícios mais valorizados pelos sócios da Cooperativa VIVA é o seguro de vida, que oferece proteção financeira para os membros e suas famílias. O seguro, incluído nos benefícios da cooperativa, cobre acidentes, doenças graves e falecimento, garantindo tranquilidade para os sócios que são os próprios responsáveis pela execução das atividades. "Saber que minha família estará amparada em caso de imprevistos me dá muita segurança", conta Fernanda Costa, sócia há três anos. Além disso, a VIVA oferece condições especiais para a contratação de coberturas adicionais, como invalidez permanente. O seguro de vida é mais um exemplo de como a cooperativa se preocupa com o bem-estar de seus membros, indo além da remuneração e promovendo segurança e estabilidade para todos.',
		  image: 'https://images.pexels.com/photos/1835926/pexels-photo-1835926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		  date: '2025-06-01'
		},
		{
		  id: 12,
		  title: 'Cooperativa VIVA inicia projeto de sustentabilidade com sócios',
		  excerpt: 'Novo programa incentiva práticas sustentáveis nas atividades dos sócios da VIVA.',
		  content: 'A Cooperativa VIVA lançou, no início de junho, o programa "VIVA Sustentável", uma iniciativa que visa incorporar práticas sustentáveis nas atividades realizadas pelos sócios. O projeto inclui treinamentos sobre redução de resíduos, uso eficiente de recursos e adoção de materiais recicláveis nos serviços prestados. "Queremos que a VIVA seja um exemplo de responsabilidade ambiental, e isso começa com os nossos sócios", afirmou Eduardo Silva, coordenador do programa. Além disso, a cooperativa firmou parcerias com empresas de reciclagem para facilitar a destinação de resíduos gerados pelos projetos. Os sócios que aderirem ao programa receberão um selo de "Sócio Sustentável", que pode ser usado para atrair clientes que valorizam a sustentabilidade. A iniciativa alinha-se aos valores da VIVA de atender às aspirações sociais e culturais de seus membros, contribuindo para um futuro mais verde.',
		  image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		  date: '2025-06-10'
		}
	  ];

  getNews(): Observable<News[]> {
    return of(this.news);
  }

  getNewsById(id: number): Observable<News | undefined> {
    const newsItem = this.news.find(n => n.id === id);
    return of(newsItem);
  }
}
