data_action = [
    {
        title: "Ajudar",
        icon: "telepathy",
        subtitle: "Conceder vantagem a aliados",
        description: "Conceder uma vantagem a um aliado ou um teste de habilidade ou ataque",
        reference: "PHB, pg. 194.",
        bullets: [
            "O alvo ganha vantagem no próximo teste de habilidade que ela fizer para completar a atividade que você está ajudando.",
            "Alternativamente, o alvo ganha vantagem na próxima rolagem de ataque contra uma criatura que está a até 1,5 metro de você",
            "A vantagem dura até o início do seu próximo turno."
        ]
    },
    {
        title: "Ataque",
        icon: "crossed-swords",
        subtitle: "Ataque corpo-a-corpo ou a distância",
        description: "Realizar um ataque corpo-a-corpo ou a distância com sua arma",
        reference: "PHB, pgs. 194-198.",
        bullets: [
            "Algumas características, como o <i>Ataque Extra</i> do guerreiro, te permitem realizar mais de um ataque com esta ação. Cada ataque é uma rolagem diferente e pode focar em diferentes criaturas. Você pode mover-se entre esses ataques.",
            "Quando você ataca com uma arma corpo-a-corpo leve, você pode usar uma ação bônus para atacar com a sua outra mão (veja a ação bônus <i>Ataque com duas armas</i>).",
            "Você pode substituir um dos seus ataques corpo-a-corpo por um <i>Agarrão</i> ou um <i>Empurrão</i> (ou <i>Encontrão</i>).",
            "Algumas condições dão vantagem no ataque: ataques contra alvos cegos, paralizados, petrificados, impedidos, atordoados ou inconscientes; ataques corpo-a-corpo contra alvos caídos; ataques por atacantes invisíveis ou escondidos.",
            "Algumas condições dão desvantagem no ataque: ataques contra alvos invisíveis ou escondidos; ataques a distância contra alvos caídos; ataques por atacantes cegos, amedrontados, envenenados ou contidos."
        ]
    },
    {
        title: "Agarrão",
        icon: "grab",
        subtitle: "Ataque corpo-a-corpo especial",
        description: "Tentar segurar uma criatura ou lutar com ela",
        reference: "PHB, pg. 197.",
        bullets: [
            "Você pode realizar a ação de <i>Ataque</i> para fazer um ataque corpo-a-corpo especial, um agarrão. Se você puder realizar múltiplos ataques com a ação de Ataque, esse ataque substitui um deles.",
            "O alvo da sua tentativa de agarrar deve ser de até uma categoria de tamanho maior que você (no máximo) e deve estar ao seu alcance.",
            "Usando pelo menos uma mão livre, você tenta subjugar o alvo ao realizar um teste de agarrar, um teste de Força (Atletismo) resistido pelo teste de Força (Atletismo) ou de Destreza (Acrobacia) do alvo (o alvo escolhe que habilidade usar).",
            "Se você vencer, o alvo fica sujeito à condição agarrado (velocidade igual a 0)."
        ]
    },
    {
        title: "Conjurar uma magia",
        icon: "magic-swirl",
        subtitle: "Tempo de conjuração de 1 ação",
        description: "Conjura uma magia com um tempo de conjuração de 1 ação",
        reference: "PHB, pg. 194.",
        bullets: [
            "Você não pode conjurar uma magia com sua ação e uma magia diferente com sua ação bônus no mesmo turno, exceto se a ação é usada para conjurar um truque.",
            "O alvo de uma magia precisa estar dentro do alcance da magia. Para mirar em algo, você precisa ter um caminho livre até o alvo, então não pode estar atrás de uma cobertura total.",
            "Magias com componentes materiais não consomem o material, a não ser que esteja explicitamente especificado. A não ser que o custo do material seja dado, você pode assumir que o custo é insignificante e o material está simplesmente disponível em uma bolsa de componentes.",
            "Algumas magias requerem que você mantenha a concentração para que a mágica continue ativa. Se você perder a concentração, a magia acaba. Você perde a concentração na magia se você conjurar outra magia que requeira concentração ou quando você fica incapacitado. Cada vez que você leva dano, você precisa fazer um teste de resistência de Constituição para manter sua concentração. O DC é igual a 10 ou metade do dano que você tomar, prevalecendo o número que for maior."
        ]
    },
    {
        title: "Desengajar",
        icon: "journey",
        subtitle: "Previne ataques de oportunidade",
        description: "O seu movimento não provoca ataques de oportunidade para o resto do turno",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Disparada",
        icon: "sprint",
        subtitle: "Dobra a velocidade de movimento",
        description: "Ganha movimento extra para o turno atual",
        reference: "PHB, pg. 192.",
        bullets: [
            "O aumento é igual a sua velocidade, depois de aplicar quaisquer modificadores."
        ]
    },
    {
        title: "Encontrão",
        icon: "hand",
        subtitle: "Ataque corpo-a-corpo especial",
        description: "Empurra uma criatura, seja para derrubá-la ou para jogá-la longe de você",
        reference: "PHB, pg. 197.",
        bullets: [
            "Realizando a ação de <i>Ataque</i>, você pode fazer um ataque corpo-a-corpo especial para ir de encontro a uma criatura. Se você puder fazer múltiplos ataques com a ação de Ataque, esse ataque substitui um deles.",
            "O alvo do encontrão deve ter no máximo uma categoria de tamanho maior que a sua, e deve estar ao seu alcance.",
            "Você realiza um teste de Força (Atletismo) resistido pelo teste de Força (Atletismo) ou Destreza (Acrobacia) – o alvo decide que habilidade usar.",
            "Se você vencer o teste resistido, você pode derrubar o alvo no chão ou empurrá-lo 1,5 metro para longe de você."
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapar de um agarrão",
        description: "Escapar de um agarrão",
        reference: "PHB, pg. 197.",
        bullets: [
            "Para escapar de um agarrão, você precisa ser bem sucedido em um teste de Força (Atletismo) ou Destreza (Acrobacia) resistido pelo teste de Força (Atletismo) de quem o está agarrando.",
            "Escapar de outras condições que o restringem (como algemas) podem requerer um teste de Destreza ou Força, especificado na condição."
        ]
    },
    {
        title: "Esconder",
        icon: "hood",
        subtitle: "Tentar se esconder",
        description: "Tentar se esconder",
        reference: "PHB, pg. 194.",
        bullets: [
            "Você não pode se esconder de uma criatura que pode o ver. Você precisa ter cobertura total, estar em uma área fortemente obscurecida, estar invisível, ou bloquear a visão do inimigo de alguma forma.",
            "Se você fizer barulho (como gritar um aviso ou derrubar um vaso), você denuncia sua posição.",
            "Quando você tenta se esconder, você faz um teste de Destreza (Furtividade) para tentar se esconder e anota o resultado. Até que você seja descoberto ou pare de se esconder, o resultado do teste é contestado pelo teste de Sabedoria (Percepção) de qualquer criatura que ativamente procura por sinais de sua presença.",
            "Uma criatura nota você mesmo que não esteja te procurando a não ser que seu teste de Furtividade é maior do que sua Percepção Passiva.",
            "Fora do combate, você também pode usar um teste de Destreza (Furtividade) para atos como se ocultar de inimigos, passar por vigias, desaparecer sem ser percebido ou se aproximar de alguém sem ser visto ou ouvido."
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Aumentar defesas",
        description: "Focar inteiramente em evitar ataques",
        reference: "PHB, pg. 194.",
        bullets: [
            "Até o começo do seu próximo turno, qualquer jogada de ataque contra você é feita com desvantagem se você puder ver o atacante e você tem vantagem em testes de Destreza.",
            "Você perde esse benefício se estiver <i>incapacitado</i> ou se seu deslocamento cair para 0."
        ]
    },
    {
        title: "Usar característica",
        icon: "embrassed-energy",
        subtitle: "Algumas características usam ações",
        description: "Utilizar uma característica de classe ou de raça que usa uma ação",
        reference: "Veja a página da classe para mais informações.",
        bullets: [

        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Equipar ou desequipar um escudo",
        description: "Equipar ou desequipar um escudo",
        reference: "PHB, pgs. 146-148.",
        bullets: [
            "Um escudo sempre leva uma ação para equipar ou desequipar.",
            "Armaduras levam vários minutos para vestir ou remover.",
            "- <i>Armadura leve</i>: 1 minuto para vestir ou remover.",
            "- <i>Armadura média</i>: 5 minutos para vestir e 1 minuto para remover.",
            "- <i>Armadura pesada</i>: 10 minutos para vestir e 5 minutos para remover."
        ]
    },
    {
        title: "Usar objeto",
        icon: "snatch",
        subtitle: "Interagir ou usar habilidade",
        description: "Interagir com um segundo objeto ou usar uma habilidade especial de objeto",
        reference: "PHB, pg. 195.",
        bullets: [
            "Você interage sem custo de ação com um objeto durante seu turno (como sacar uma arma ou abrir uma porta). Se você quiser interagir com um segundo objeto, utilize esta ação.",
            "Quando um objeto requer sua ação para seu uso, você também utiliza esta ação."
        ]
    },
    {
        title: "Preparar",
        icon: "stopwatch",
        subtitle: "Escolher gatilho e ação",
        description: "Escolher um gatilho e uma reação de resposta",
        reference: "PHB, pg. 195.",
        bullets: [
            "Primeiro, você decide que circunstância perceptível será o gatilho da sua reação.",
            "Então, você escolhe a ação que irá realizar em resposta àquele gatilho ou escolhe mover o seu deslocamento máximo em resposta ao gatilho.",
            "Exemplos incluem: <i>\"Se o cultista pisar sobre o alçapão, eu vou puxar a alavanca que o abre\"</i>, e <i>\"Se o goblin se aproximar de mim, eu vou me afastar\"</i>.",
            "Quando o gatilho ocorre, você pode tanto realizar sua reação logo depois do gatilho ou pode ignorá-lo.",
            "Lembre-se que você pode realizar apenas uma reação por turno.",
            "Quando você prepara uma magia, você conjura a magia normalmente, mas segura a energia que será liberada em sua reação quando o gatilho ocorrer. Para ser preparada, uma magia deve ter o tempo para conjurar magia igual a 1 ação, e segurar a energia de uma magia exige concentração. Se sua concentração for quebrada, a magia se dissipa sem efeito."
        ]
    },
    {
        title: "Procurar",
        icon: "magnifying-glass",
        subtitle: "Focar atenção para encontrar algo",
        description: "Dedicar sua atenção para encontrar algo",
        reference: "PHB, pg. 195.",
        bullets: [
            "Dependendo da natureza da sua procura, o Mestre pode pedir para você fazer um teste de Sabedoria (Percepção) ou um teste de Inteligência (Investigação)."
        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Qualquer ação fora dessa lista",
        description: "Realizar qualquer ação que você imaginar",
        reference: "PHB, pg. 195.",
        bullets: [
            "Quando você descreve uma ação que não é detalhada em qualquer uma das regras, o Mestre diz se ela é possível e que tipo de jogada você precisa realizar, se houver, para determinar seu sucesso ou fracasso."
        ]
    }
]
