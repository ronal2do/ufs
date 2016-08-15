var translationsEN = {
  HEADLINE: 'Comfort, speed and safety.',
  INSTITUCIONAL:'Our company',
  INSTITUCIONALPARA:'We are more than a decade carrying executives with the highest quality , our success story achieved day by day improving punctuality, responsibility, speed and safety.',
  INSTITUCIONALPARASEG:'We have a highly qualified team to provide excellence to the quality standards demanded by executives and employees of your company.',
  INSTITUCIONALPARATER:'Here our drivers and employees are committed to establishing trusting relationships with our customers , so that they , can always count on a fast and efficient service to meet your needs.',
  EMPRESA:'Our fleet',
  EMPRESAPARA:'Our fleet is constantly renewed and revised providing our customers extremely reliable travel, comfortable and safe.',
  EMPRESAPARASEG:'Meet our fleet of vehicles, modern and sophisticated, for all occasions.',
  PRODUTOS:'Services',
  CONTATO:'Contact',
  PRINCIPIOS:'Services',
  MISSAO:'Executive transportation',
  MISSAOFRASE:'We are located right in order strategy with bilingual drivers (if necessary) to meet at any time, 24 hours a day, seven days a week, including holidays.',
  VISAO:'City tour',
  VISAOFRASE:'The City Tour in São Paulo is a tour of the main sights of the city, showing the tourists who visit us, the attractions and the main points of the metropolis.',
  VALORES:'Shuttle',
  VALORES2:'We have a fleet of comfortable vehicles for you that needs receptive in airports, travel, transfer and transfer to hotel, city tour and other, whether business or just to know the main sights of São Paulo.',
  NOME:'Name',
  EMAIL:'Email',
  MENSAGEM:'Message',  
  SEND:'Send',
  BUSCAR:'Search...',
  COPYRIGHT:'© 2016 UFS Transportes. ALL RIGHTS RESERVED.'
};
 
var translationsBR = {
  HEADLINE: 'Conforto, rapidez e segurança.',
  INSTITUCIONAL:'Nossa empresa',
  INSTITUCIONALPARA:'Estamos a mais de uma década transportando executivos com a mais alta qualidade, nossa história de sucesso conquistamos no dia a dia aprimorando pontualidade, responsabilidade, rapidez e segurança.',
  INSTITUCIONALPARASEG:'Contamos com uma equipe altamente qualificada para atender com excelência aos padrões de qualidade exigida pelos executivos e colaboradores de sua empresa.',
  INSTITUCIONALPARATER:'Aqui nossos motoristas e funcionários estão comprometidos em estabelecer relações de confiança com nossos clientes, de forma que estes, possam sempre contar com um serviço rápido e eficiente para atender as suas necessidades.',
  EMPRESA:'Nossa frota',
  EMPRESAPARA:'Nossa frota é constantemente renovada e revisada proporcionando aos nossos clientes viagens extremamente confiável, confortável e segura.',
  EMPRESAPARASEG:'Conheça nossa Frota de veículos, os modernos e mais sofisticados, para todas as ocasiões.',
  PRODUTOS:'Serviços',
  CONTATO:'Contato',
  PRINCIPIOS:'Serviços',
  MISSAO:'Transporte executivo',
  MISSAOFRASE:'Estamos bem localizados de forma estratégia com motoristas bilíngues (se necessário) para atender a qualquer momento, 24horas por dia, sete dias por semana, inclusive feriados.',
  VISAO:'City tour',
  VISAOFRASE:'O City Tour em São Paulo é um passeio pelos principais pontos turísticos da cidade, mostrando aos turistas que nos visitam, as atrações e os principais pontos da metrópole.',
  VALORES:'Translado',
  VALORES2:'Temos uma frota de veículos confortáveis para você que necessita de receptivo em aeroportos, viagens, translado e transfers para hotéis, city tour e outros, seja a negócios ou apenas para conhecer os principais pontos turísticos de São Paulo.',
  NOME:'Nome',
  EMAIL:'E-mail',
  MENSAGEM:'Mensagem',  
  SEND:'Enviar',
  BUSCAR:'Buscar...',
  COPYRIGHT:'© 2016 UFS Transportes. TODOS OS DIREITOS RESERVADOS.'
};
 
var app = angular.module('myApp', ['pascalprecht.translate' ]);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('br', translationsBR);
  $translateProvider.translations('en', translationsEN);
  $translateProvider.preferredLanguage('br');
  $translateProvider.fallbackLanguage('br');
}]);
 
app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope, $http) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

}]);







