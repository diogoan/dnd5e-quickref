model = [
    {
        title: "",
        icon: "",
        subtitle: "",
        description: "",
        reference: "PHB, pg. 185.",
        bullets: [
            ""
        ]
    }
]

data_roll_types = [
    {
        title: "Teste de habilidade",
        icon: "stairs-goal",
        subtitle: "Superar algum desafio",
        description: "Um teste de habilidade testa um talento inato do personagem ou monstro e seu treinamento em um esforço para superar um desafio",
        reference: "PHB, pg. 176.",
        bullets: [
            "Para cada teste de habilidade, o Mestre decide qual das seis habilidades é relevante para a tarefa e sua dificuldade, representada por uma Classe de Dificuldade (CD).",
            "Para fazer um teste de habilidade, jogue um d20 e adicione o modificador da habilidade relevante. Aplique os bônus e penalidades e compare o resultado total à CD.",
            "Se o total for igual ou superior a CD, o teste de habilidade foi um sucesso e a criatura passou no desafio em questão.",
            "Caso contrário, será um fracasso, o que significa que o personagem ou monstro não fez nenhum progresso em direção ao objetivo, ou até progrediu, mas sendo esse progresso combinado com um revés determinado pelo Mestre. "
        ]
    },
    {
        title: "Teste de resistência",
        icon: "shield-reflect",
        subtitle: "Resistir a alguma ameaça",
        description: "Um teste de resistência representa uma tentativa de resistir a uma magia, uma armadilha, um veneno, uma doença ou uma ameaça similar. ",
        reference: "PHB, pg. 181.",
        bullets: [
            "Você normalmente não decide fazer um teste de resistência, você é forçado a fazer um, porque seu personagem ou monstro corre risco de sofrer algum mal.",
            "Para fazer um teste de resistência, jogue um d20 e adicione o modificador de habilidade apropriado.",
            "Um teste de resistência pode ser modificado por um bônus ou penalidade situacional e pode ser afetado por vantagem ou desvantagem, conforme determinado pelo Mestre.",
            "Cada classe concede proficiência em pelo menos dois testes de resistência. A proficiência em teste de resistência permite que você adicione seu bônus de proficiência nos testes de resistência feitos usando uma habilidade particular.",
            "A Classe de Dificuldade de um teste de resistência é determinada pelo efeito que a provocou.",
            "O resultado de um sucesso ou fracasso em um teste de resistência também é detalhado no efeito que o provocou. Geralmente, um teste bem sucedido significa que a criatura não sofreu nenhum dano ou sofreu um dano reduzido, proveniente do efeito."
        ]
    },
    {
        title: "Jogada de ataque",
        icon: "sword-brandish",
        subtitle: "Tentar atacar um inimigo",
        description: "Quando você realiza um ataque, sua jogada de ataque determina se o ataque acerta ou erra.",
        reference: "PHB, pg. 196.",
        bullets: [
            "Se o total da jogada, somado aos modificadores, igualar ou ultrapassar a Classe de Armadura (CA) do alvo, o ataque acerta.",
            "Quando um personagem realiza uma jogada de ataque, os dois modificadores mais comuns para a jogada são o modificador de habilidade e o bônus de proficiência do personagem",
            "O modificador de habilidade usado para um ataque com uma arma corpo-acorpo é a Força, e o modificador usado para um ataque com uma arma à distância é a Destreza. Armas que possuem a propriedade Acuidade ou Arremesso quebram essa regra.",
            "Algumas magias também requerem uma jogada de ataque. O modificador de habilidade usado por um ataque de magia depende da habilidade para conjurar magias de quem as conjura.",
            "Você adiciona seu bônus de proficiência nas jogadas de ataque quando está usando uma arma que é proficiente, bem como quando ataque com uma magia.",
            "Se a jogada de ataque com o d20 resultar em 20, o ataque acerta, independentemente de qualquer modificador ou da CA do alvo. Além disso, o ataque é considerado um acerto crítico.",
            "Se a jogada de ataque com o d20 resultar em 1, o ataque erra, independentemente de qualquer modificador ou da CA do alvo."
        ]
    }
]

data_roll_mods = [
    {
        title: "Vantagem e desvantagem",
        icon: "sword-tie",
        subtitle: "Deve-se jogar um dado adicional",
        description: "Você geralmente adquire vantagem ou desvantagem através do uso de habilidades especiais, ações ou magias",
        reference: "PHB, pg. 7, 175.",
        bullets: [
            "Uma habilidade especial ou magia podem conceder vantagens ou desvantagens em um teste de habilidade, teste de resistência ou jogada de ataque.",
            "Você deve jogar um segundo d20 quando realizar a jogada.",
            "Você deve usar o resultado mais alto entre os dois dados se possuir vantagem, e usar o resultado mais baixo, se possuir desvantagem.",
            "Se múltiplas situações dão a você vantagens ou impõem desvantagens, ainda assim você joga apenas um d20 adicional.",
            "Se alguma circunstância provocar uma jogada que tenha tanto uma vantagem quanto uma desvantagem, considera-se que você não possua nenhuma delas, e deve jogar apenas um d20.",
            "Quando você possui vantagem ou desvantagem e alguma coisa no jogo permite refazer uma jogada de um d20, só um dos dados pode ser jogado de novo. Você escolhe qual."
        ]
    },
    {
        title: "Bônus de proficiência",
        icon: "master-of-arms",
        subtitle: "Modifica o teste de habilidade",
        description: "As proficiências define, muitas das coisas que o personagem pode fazer muito bem, desde o uso de certas armas, até a maneira de contar uma mentira muito convincente.",
        reference: "PHB, pg. 11-12, 175-176.",
        bullets: [
            "Os personagens têm um bônus de proficiência determinado pelo seu nível",
            "O bônus é usado nas regras de testes de habilidade, testes de resistência e jogadas de ataque.",
            "A classe determina as proficiências com armas, as proficiências em testes de resistência, e algumas das proficiências em perícias e ferramentas.",
            "Os antecedentes de um personagem concedem proficiências adicionais em perícias e ferramentas, e algumas raças concedem mais proficiências.",
            "Seu bônus de proficiência não pode ser adicionado a uma única rolagem de dados ou outro número mais de uma vez.",
            "Ocasionalmente, o bônus de proficiência pode ser multiplicado ou dividido (duplicado ou reduzido pela metade, por exemplo) antes de ser aplicado.",
            "Se uma circunstância sugere que o bônus de proficiência se aplica mais de uma vez para a mesma jogada, você ainda deve adicioná-lo apenas uma vez e multiplicar ou dividir o bônus apenas uma vez.",
            "Se uma habilidade ou efeito permite que você multiplique seu bônus de proficiência ao fazer um teste de habilidade que normalmente não se beneficiaria do bônus de proficiência, você não adiciona o bônus no teste."
        ]
    },
    {
        title: "Resistência e vulnerabilidade",
        icon: "achilles-heel",
        subtitle: "Modifica a quantidade de dano",
        description: "Algumas criaturas e objetos são extremamente difíceis ou muito fáceis de machucar com certos tipos de dano.",
        reference: "PHB, pg. 199.",
        bullets: [
            "Se uma criatura ou objeto tem <i>resistência</i> a um tipo de dano, aquele tipo de dano será reduzido pela metade contra ela.",
            "Se uma criatura ou objeto tem <i>vulnerabilidade</i> a um tipo de dano, aquele tipo de dano será dobrado contra ela.",
            "Resistência e vulnerabilidade são aplicados depois de todos os modificadores de dano.",
            "Múltiplas resistências e vulnerabilidades que afetam o mesmo tipo de dano contam apenas como uma. Ou seja, o dano é sempre multiplicado ou dividido por 2, e não por 4 ou outros valores maiores."
        ]
    }
]
