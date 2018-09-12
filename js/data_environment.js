data_environment_obscurance = [
    {
        title: "Escuridão leve",
        icon: "bleeding-eye",
        subtitle: "Desvantagem em Percepção",
        description: "Luz difusa, névoa irregular, folhagem moderada",
        reference: "PHB, pg. 185.",
        bullets: [
            "Criaturas possuem desvantagem em <b>testes de Sabedoria (Percepção)</b> que dependem da luz."
        ]
    },
    {
        title: "Escuridão densa",
        icon: "lightning-tear",
        subtitle: "Visão bloqueada",
        description: "Escuridão, névoa opaca, folhagem densa",
        reference: "PHB, pg. 185.",
        bullets: [
            "Uma criatura em uma área fortemente obscurecida sofre efetivamente de uma <b>condição de cegueira</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Luz plena",
        icon: "star-pupil",
        subtitle: "Visão normal",
        description: "Luz brilhante permite que a maioria das criaturas enxerguem normalmente",
        reference: "PHB, pg. 185.",
        bullets: [
            "Mesmo dias nublados ainda fornecem luz brilhante, assim como tochas, lanternas, fogueiras e outras fontes de iluminação dentro de um raio específico."
        ]
    },
    {
        title: "Penumbra",
        icon: "semi-closed-eye",
        subtitle: "Escuridão leve",
        description: "Luz fraca, também conhecida como sombra",
        reference: "PHB, pg. 185.",
        bullets: [
            "Cria uma área <b>levemente obscurecida</b>.",
            "Uma área de penumbra geralmente é um limite entre uma fonte de luz brilhante, como uma tocha, e a escuridão em volta dela.",
            "A luz suave do nascer e do pôr do sol também contam como penumbra. A lua cheia particularmente brilhante pode banhar a terra com penumbra."
        ]
    },
    {
        title: "Escuridão total",
        icon: "worried-eyes",
        subtitle: "Escuridão densa",
        description: "Escuridão cria uma área fortemente obscurecida",
        reference: "PHB, pg. 185.",
        bullets: [
            "Cria uma área <b>fortemente obscurecida</b>.",
            "Personagens enfrentam escuridão ao ar livre à noite (mesmo na maioria das noites com luar), dentro dos limites de uma masmorra ou de uma sala subterrânea, ou em uma ára de escuridão mágica."
        ]
    }
]

data_environment_vision = [
    {
        title: "Percepção às cegas",
        icon: "one-eyed",
        subtitle: "Perceber sem visão",
        description: "Perceber o seu entorno sem depender da luz, dentro de um raio específico",
        reference: "PHB, pg. 185.",
        bullets: [
            "Criaturas sem olhos, como limos, e criaturas com ecolocalização ou sentidos elevados, como morcegos e dragões verdadeiros, possuem esse sentido."
        ]
    },
    {
        title: "Visão no escuro",
        icon: "semi-closed-eye",
        subtitle: "Visão limitada no escuro",
        description: "Uma criatura com Visão no escuro pode enxergar melhor no escuro ou em condições de pouca luz, dentro de um raio específico",
        reference: "PHB, pg. 187.",
        bullets: [
            "Dentro de um alcance específico, uma criatura com Visão no escuro pode <b>enxergar na penumbra como se fosse luz plena e na escuridão como se fosse penumbra</b>. Assim, áreas de escuridão são apenas levemente obscurecidas, no que diz respeito a aquela criatura.",
            "No entanto, a criatura não pode discernir cor na escuridão, somente tons de cinza.",
            "Muitas criaturas nos mundos de D&D, especialmente aquelas que vivem no subsolo, possuem visão no escuro."
        ]
    },
    {
        title: "Visão verdadeira",
        icon: "eye-shield",
        subtitle: "Enxergar na escuridão",
        description: "Uma criatura com visão verdadeira pode ver tudo em sua forma real, independente do ambiente",
        reference: "PHB, pg. 187.",
        bullets: [
            "Uma criatura com visão verdadeira pode, dentro de um alcance específico, enxergar na escuridão total normal e mágica, ver criaturas e objetos invisíveis, detectar automaticamente ilusões visuais e ter sucesso em testes de resistência contra elas, também pode perceber a forma original de um metamorfo ou de uma criatura que é transformada por magia.",
            "Além disso, a criatura pode ver no Plano Etéreo."
        ]
    }
]

data_environment_cover = [
    {
        title: "Meia cobertura",
        icon: "broken-shield",
        subtitle: "Mureta, mobília grande, criaturas",
        description: "Um alvo tem meia-cobertura quando um obstáculo bloqueia pelo menos metade de seu corpo",
        reference: "PHB, pg. 198.",
        bullets: [
            "O obstáculo pode ser uma mureta, uma parte de uma mobília grande, um tronco de árvore estreito ou uma criatura, seja ela inimiga ou amigável.",
            "Um alvo com meia-cobertura tem <b>+2 de bônus na CA e nos testes de resistência de Destreza</b>.",
            "Se o alvo está atrás de múltiplas fontes de cobertura, apenas aquela de maior grau se aplica, os graus de cobertura não se somam."
        ]
    },
    {
        title: "Três-quartos de cobertura",
        icon: "cracked-shield",
        subtitle: "Grade levadiça, seteira",
        description: "Um alvo tem cobertura superior quando, pelo menos, três quartos do seu corpo é coberto por um obstáculo",
        reference: "PHB, pg. 198.",
        bullets: [
            "O obstáculo pode ser uma grade levadiça, uma seteira ou um tronco de árvore mais robusto.",
            "Um alvo com três-quartos de cobertura tem <b>+5 de bônus na CA e nos testes de resistência de Destreza</b>.",
            "Se o alvo está atrás de múltiplas fontes de cobertura, apenas aquela de maior grau se aplica, os graus de cobertura não se somam."
        ]
    },
    {
        title: "Cobertura total",
        icon: "shield",
        subtitle: "Completamente escondido",
        description: "Um alvo tem cobertura total quando está completamente escondido por um obstáculo",
        reference: "PHB, pg. 198.",
        bullets: [
            "Um alvo com cobertura total <b>não pode ser alvo direto</b> de um ataque ou de uma magia. No entanto, algumas magias podem atingi-lo ao incluí-lo na área de seu efeito.",
            "Se o alvo está atrás de múltiplas fontes de cobertura, apenas aquela de maior grau se aplica, os graus de cobertura não se somam."
        ]
    }
]

data_environment_other = [
    {
        title: "Queda",
        icon: "falling",
        subtitle: "Queda de uma grande altura",
        description: "Uma queda de uma grande altura que pode causar danos de concussão",
        reference: "PHB, pg. 185.",
        bullets: [
            "Uma criatura sofre 1d6 de dano de concussão para cada 3m de queda.",
            "O dano máximo de uma queda é de até 20d6 (equivalente a 60 metros).",
            "Após a queda, a criatura ficará caida no chão, a menos que ela evite sofrer o dano da queda.",
            "O jogador pode tentar realizar um teste de Força (Atletismo) ou Destreza (Acrobacia) para evitar uma queda (segurando-se em algo ou mantendo-se equilibrado), realizar um salto ou acrobacia de forma bem-sucedida ou permanecer de pé em uma situação complicada."
        ]
    },
    {
        title: "Asfixia",
        icon: "drowning",
        subtitle: "Não conseguir respirar",
        description: "Capacidade de uma criatura ficar sem respirar durante um período",
        reference: "PHB, pg. 185.",
        bullets: [
            "Uma criatura pode segurar sua respiração por um número de minutos igual a 1 + seu modificador de Constituição (mínimo de 30 segundos).",
            "Quando uma criatura ficar sem respirar, ela pode sobreviver por um número de rodadas igual ao seu modificador de Constituição (mínimo 1 rodada).",
            "No início do seu próximo turno, ela cai a 0 pontos de vida e está morrendo.",
            "Se você não puder respirar ou estiver sufocando, você não pode recuperar pontos de vida ou se estabilizar até poder respirar novamente."
        ]
    }
]
