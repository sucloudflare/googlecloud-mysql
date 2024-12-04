
<h1>Guia de Configuração no Google Cloud e MySQL Workbench</h1>
<p>Este guia descreve como configurar um bucket no Google Cloud Storage, criar uma rede VPC, configurar uma instância MySQL e conectá-la ao MySQL Workbench.</p>

<hr>

<h2>Parte 1: Criar um Bucket no Google Cloud Storage</h2>
<ol>
<li>Acesse o <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Console</a>.</li>
<li>No menu de navegação, clique em <strong>Storage</strong> > <strong>Buckets</strong>.</li>
<li>Clique em <strong>Criar Bucket</strong>.</li>
<li>Configure as seguintes opções:
<ul>
<li><strong>Nome do bucket</strong>: Escolha um nome global único.</li>
  <li><strong>Localização</strong>: Escolha a região desejada.</li>
<li><strong>Classe de armazenamento</strong>: Selecione a opção desejada (o padrão é <strong>Standard</strong>).</li>
<li><strong>Controle de acesso</strong>: Escolha entre <strong>Uniform</strong> ou <strong>Fine-grained</strong>.</li>
</ul>
</li>
<li>Clique em <strong>Criar</strong> para finalizar.</li>
</ol>

<hr>

<h2>Parte 2: Criar uma Rede VPC e Configurar IP para Conexão</h2>
<h3>Criar Rede VPC</h3>
<ol>
<li>No Google Cloud Console, acesse <strong>VPC network</strong> > <strong>Networks</strong>.</li>
<li>Clique em <strong>Criar rede VPC</strong>.</li>
<li>Configure os seguintes parâmetros:
<ul>
  <li><strong>Nome da rede</strong>: Ex.: <code>minha-rede</code>.</li>
  <li><strong>Modo de criação de sub-redes</strong>: <strong>Personalizado</strong>.</li>
  <li><strong>Região e CIDR da sub-rede</strong>: Adicione um intervalo de IP, ex.: <code>10.0.0.0/24</code>.</li>
  </ul>
  </li>
  <li>Clique em <strong>Criar</strong> para finalizar.</li>
  </ol>

  <h3>Configurar o IP Estático</h3>
  <ol>
  <li>Acesse <strong>VPC network</strong> > <strong>External IP addresses</strong>.</li>
  <li>Clique em <strong>Reservar endereço IP estático</strong>.</li>
  <li>Configure os seguintes parâmetros:
  <ul>
  <li><strong>Nome</strong>: Ex.: <code>ip-estatico</code>.</li>
  <li><strong>Região</strong>: Escolha a mesma região da rede configurada.</li>
  <li><strong>Tipo</strong>: <strong>Regional</strong>.</li>
  </ul>
  </li>
  <li>Clique em <strong>Reservar</strong> para finalizar.</li>
  </ol>

  <hr>

  <h2>Parte 3: Criar uma Instância MySQL no Google Cloud</h2>
  <ol>
  <li>No menu, acesse <strong>SQL</strong> > <strong>Instâncias</strong>.</li>
  <li>Clique em <strong>Criar instância</strong> e escolha <strong>MySQL</strong>.</li>
  <li>Configure os seguintes parâmetros:
  <ul>
  <li><strong>Nome da instância</strong>: Ex.: <code>meu-banco</code>.</li>
  <li><strong>Região e zona</strong>: Escolha a mesma da rede configurada.</li>
  <li><strong>Versão do MySQL</strong>: Selecione uma versão suportada.</li>
  li><strong>Senha do usuário root</strong>: Defina uma senha segura.</li>
  </ul>
  </li>
  <li>Clique em <strong>Criar</strong> para finalizar.</li>
  </ol>

  <h3>Configurar Conexões na Instância</h3>
  <ol>
  <li>Após a criação da instância, acesse a aba <strong>Conexões</strong>.</li>
  <li>Clique em <strong>Adicionar rede</strong>.</li>
  <li>Insira o intervalo de IP da sua máquina (ou <code>0.0.0.0/0</code> para acesso público).</li>
  <li>Clique em <strong>Salvar</strong>.</li>
</ol>

<hr>

<h2>Parte 4: Configurar o IP e Conectar ao MySQL Workbench</h2>
<ol>

<li>No <strong>SQL</strong> > <strong>Instâncias</strong>, localize a instância criada e copie o <strong>IP Externo</strong>.</li>
<li>Abra o <strong>MySQL Workbench</strong> e configure uma nova conexão:
<ul>
<ul>
<li><strong>Nome da conexão</strong>: Ex.: <code>Banco GCP</code>.</li>
<li><strong>Hostname</strong>: Cole o IP Externo da instância MySQL.</li>
<li><strong>Porta</strong>: <code>3306</code> (padrão).</li>
<li><strong>Username</strong>: <code>root</code>.</li>
<li><strong>Senha</strong>: Insira a senha configurada na criação da instância.</li>
</ul>    
</li>
<li>Clique em <strong>Test Connection</strong>. Se configurado corretamente, a conexão será bem-sucedida.</li>
</ol>

<hr>

<h3>Observação</h3>
<p>Garanta que sua máquina tenha permissão para acessar a instância MySQL configurando corretamente as redes e IPs no Google Cloud. Para maior segurança, restrinja o intervalo de IPs na configuração de conexões.</p>

