---
title: '🔑🔑 Git, GitHub e a chave SSH'
date: '2022-03-06'
excerpt: 'Um tutorial de como estabelecer conexão confiável entre o seu Git e o GitHub através de chaves SSH'
cover_image: '/images/posts/git-github-ssh/index.jpeg'
---

# Git, GitHub e o par de chaves SSH

Lidar com etapas e trabalhar com melhoria contínua é algo que faz parte da realidade de muitas profissões e com o desenvolvimento de *softwares* não é diferente. Por isso vou te dar uma ajudinha com duas das principais ferramentas de versionamento da atualidade (e como combiná-las): o Git e o GitHub. O tutorial foi construído em uma distro Linux baseada em Debian, então se você usa o próprio Debian, o Ubuntu ou alguma distro baseada neles, você muito provavelmente não terá problemas. Se você usa o Windowns, considere usar o "emulador de terminal" [Cmder](https://cmder.net/) para acompanhar este tutorial (e quem sabe, usar ele como mais uma das suas ferramentas de desenvolvimento)

## 🤔 Estou com o Git instalado?

Para início de conversa, você deve se certificar de que o Git está instalado. Uma forma de verificar isso é abrir o terminal e executar o seguinte comando. Ele mostrará a versão instalada na sua máquina (caso haja alguma):

`git --version`

<div class="flex-center">

![É simples verificar a versão do Git instalada](/images/posts/git-github-ssh/gitversion.jpg "Verificando a versão do Git")
</div>

Caso você não tenha um resultado semelhante, instale ele. Para mais informações sobre como instalar, visite o  [site oficial do Git](https://git-scm.com/downloads). Caso sua distribuição use o gerenciador de pacotes APT, você pode instalá-lo facilmente com o seguinte comando:

`sudo apt install git`

Caso tenha instalado o Git pela primeira vez, vale a pena, antes de prosseguir, configurar seu nome e e-mail de usário. Confira nosso o post [Configurando nome e e-mail no Git](#novolinkaqui)

## 🔑🔑 Criando o par de Chaves SSH

Sem querer aprofundar muito, criaremos um par de chaves SSH. Uma é chave a pública (e vamos fornecer ela ao GitHub) e a outra é uma chave privada (que ficará na nossa máquina). Quando combinadas, essas chaves servem para estabelecer uma conexão confiável entre a nossa máquina e o GitHub. Colando a mão na massa:

Abra o terminal e execute o seguinte comando, porém com o seu e-mail:

`ssh-keygen -t ed25519 -C seuemail@email.com`

Em seguida ele perguntará em qual diretório você quer salvar as chaves. Por padrão, ele salva em `/home/nome_do_usuario/.ssh/id_ed25519`. Você pode aceitar essa definição apenas dando um **Enter**

Logo em seguida ele perguntará se você quer colocar uma senha que será exigida quando você for se conectar com o GitHub. Você pode deixar em branco dando apenas **Enter**, mas pondere se vale a pena ou não, considerando quem tem acesso a sua máquina.

<div class="flex-center">

![Comando ssh-keygen](/images/posts/git-github-ssh/ssh-keygen.jpg "Executando o comando ssh-keygen")
</div>
Se você tiver um resultado como o da imagem, a criação das chaves foi um sucesso. Ainda no terminal, vamos executar o seguinte comando:

`eval $(ssh-agent -s)`

Logo em seguida vamos adicionar a nossa chave privada com o seguinte comando (considerando que você está no diretorio `/home/nome_do_usuario/.ssh`):

`ssh-add id_25519`

 Agora nós precisamos pegar o conteúdo da chave pública. Ainda dentro do diretório `/home/nome_do_usuario/.ssh`, vou pegar o conteúdo do arquivo *id_ed25519.pub* com o comando *cat*, como você pode ver na imagem. Copie o resultado. Apenas lembrando que para copiar alguma coisa no terminal você deve usar o `Ctrl+Shift+C`. O tradiconal `Ctrl+C` dentro do terminal serve para cancelar um processo executado em primeiro plano.

<div class="flex-center">

![Pegando o conteúdo do arquivo id_ed25519.pub](/images/posts/git-github-ssh/cat.jpg "Pegando o conteúdo do arquivo id_25519.pub")
</div>
Vale a pena resaltar que se você abrir o seu explorador de arquivos com interface gráfica e abrir o arquivo com o seu editor de texto, você terá o mesmo resultado. Basta copiar todo o conteúdo do arquivo. Depois disso já vamos para o GitHub.

<div class="flex-center">

![Pegando o conteúdo do arquivo id_ed25519.pub](/images/posts/git-github-ssh/cat2.jpg "Pegando o conteúdo do arquivo id_25519.pub")
</div>
## 🐈🐙 Entrando no GitHub

O próximo passo é abrir seu GitHub. Caso você já uma conta, você pode fazer login por [aqui](https://github.com/login). E caso você queira criar sua conta, entre por [aqui](https://github.com/signup).

Assumindo que você já tem um conta criada e já está logado nela, vamos fazer o seguinte:

- Vá até configurações (ou settings)

<div class="flex-center">

![Configurações](/images/posts/git-github-ssh/1.jpg)
</div>
- Vá até "SSH and GPG keys"

<div class="flex-center">

![Configurações](/images/posts/git-github-ssh/2.jpg)
</div>
- Clique em "New SSH Key"

<div class="flex-center">

![Configurações](/images/posts/git-github-ssh/3.jpg)
</div>
- Adicione a chave SSH que criamos nos passos anteriores no campo *key (chave)* e no campo *title (título)* adicione algum título descritivo para você saber de onde é aquela chave. Por exemplo: "Computador do Trabalho", "Computador Windows 10", "Máquina Pessoal", etc. Depois de preencher os campos, clique em "Add SSH Key". Talvez ele peça para você inserir sua senha do GitHub. Feito isso, sua chave pública foi inserida com sucesso no GitHub.

<div class="flex-center">

![Configurações](/images/posts/git-github-ssh/5.jpg)
</div>
**Pronto!** Sua máquina já está configurada.

## 👀 Observações finais

Por questões de segurança, na primeira vez que você for se conectar com o GitHub, você será qustionado a fim de confirmar se você quer realmente se conectar com ele. Basta confirmar com um `yes`. Quando for lidar com algum repositório do GitHub, lembre de executar os comandos próprios para uma conexão SSH.

- Quando for clonar um repositório
  
<div class="flex-center">

![Clonado](/images/posts/git-github-ssh/ssh1.jpg)
</div>
- Quando for adicionar um repositório remoto

<div class="flex-center">

![Adiconando um repositório remoto](/images/posts/git-github-ssh/ssh2.jpg)
</div>
Obrigado por ler e se quiser dar aquela moralzinha, compartilhe, comente e volte sempre!

## 💻 Autor

<div class="card-avatar-container">

<div class="card-avatar">
<img src="https://avatars.githubusercontent.com/u/60784611?v=4" class="card-avatar-img" />
<div class="card-avatar-content">
Gabriel Silva<br>

[<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" class="img-icon">](https://github.com/gabrielsanva)
[<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" class="img-icon">](https://linkedin.com/in/gabrielsanva)
</div>
</div>
</div>