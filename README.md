# Discall

## Contextualização do domínio;

Discall é uma plataforma de comunicação acadêmica que visa facilitar a comunicação entre professores e alunos fora do ambiente escolar.

O ponto da interação acadêmica na qual nos situamos é satisfatório? Seria tão pouco influente a facilidade de comunicação, assim como a centralização das informações repassadas para os discentes, que hoje em dia cabem no bolso?

No momento atual da tecnologia, a facilidade da interação no meio acadêmico é visível, porém ainda caótico. A ideia de que toda a informação está presente na internet e disponível para todos parece fascinante, até se deparar com um ponto em que não há um norte para tanta informação.

No meio acadêmico isso também ocorre, de maneira que a sobrecarga seja comumente associada como um processo da educação. A descentralização das informações de ensino fora do ambiente institucional também é um obstáculo para o ensinamento. Dito isso, tratar disso com um canal de comunicação exclusivamente acadêmico, sem qualquer vínculo empresarial, que atenda puramente às necessidades daquele ambiente, é um caminho para resolução desse problema.

## Objetivo;

- O objetivo geral trata-se de atender a necessidade da interação síncrona, e com mais controle sobre a organização de maneira mais ativa que um email ou mensagem em fórum.
- Criar uma plataforma de comunicação por texto, similar ao Slack, destinada a ambientes de ensino.

- Descrição de cada funcionalidade e os recursos (algoritmos, estruturas de dados, ferramentas, bibliotecas, etc) adotados em cada funcionalidade;

## Funcionalidades;

- ### Estudante:
  - Participar de grupos (chats) de cada disciplina matriculada;
  - Acessar / Enviar atividades da disciplina;
  - Ter acesso a um calendário da disciplina, com atividades, avaliações, aulas desmarcadas, aulas extras, etc;
  - Ter acesso aos integrantes da disciplina e contato de seus respectivos professores.
- ### Professor:

  - Participar de grupos (chats) de cada disciplina matriculada;
  - Cadastrar / Encerrar / Editar atividades da disciplina;
  - Editar o calendário da disciplina, com atividades, avaliações, aulas desmarcadas, aulas extras, etc;
  - Ter acesso aos integrantes da disciplina e contato de seus respectivos alunos;
  - Adicionar / Remover membros ao grupo da disciplina.
  - Criar / Excluir grupos de disciplinas.

- ### Administrador:

  - Tudo o que um “Estudante” pode fazer;
  - Participar de grupos (chats) de cada disciplina matriculada;
  - Cadastrar / Encerrar / Editar atividades da disciplina;
  - Editar o calendário da disciplina, com atividades, avaliações, aulas desmarcadas, aulas extras, etc.

- ### Ferramentas
  - IDE: Visual Studio Code;
  - Versão do Java: 17;
  - Framework Backend: Java Spring Boot;
  - Bibliotecas: Project Lombok, Java-WebSocket;
  - Framework Frontend: Next.js;
  - SGBD: PostgreSQL;

## Classes-entidade e seus atributos;

```java
// entity
class User {
	int id;
	String email;
	String password;
	String name;
	String resume;
	List<Groupchat> groups;
}

// entity
class Groupchat {
	int id;
	String name;
	List<User> users;
	List<Message> messages;
	List<Event> events;
}

// relation
class UserInGroup {
	User user;
	Groupchat group;
	UserType type;
	enum UserType { REQUEST, COMMON, ADMIN };
}

// entity
class Message {
	int id;
	Groupchat group;
	User author;
	String content;
	String filePath;
	String folder;
	LocalDateTime dateTime;
}

class Event {
	int id;
	Groupchat group;
	String title;
	String description;
	LocalDateTime initialDateTime;
	LocalDateTime finalDateTime;
}

```

## Wireframe das telas;

- https://www.figma.com/file/IqWhCbLHJS8vEMnrZBVnQO/Untitled?node-id=3%3A147

## Arquitetura;

- Arquitetura Monolítica.
