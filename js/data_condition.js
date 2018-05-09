data_condition = [
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Você está agarrado",
        description: "Você está agarrado",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated.",
            "The condition also ends if you are removed from the reach of your grappler."
        ]
    },
    {
        title: "Amedrontado",
        icon: "sharp-smile",
        subtitle: "Você está assustado",
        description: "Você está assustado",
        reference: "PHB, pg. 291.",
        bullets: [
            "Você sofre desvantagem em testes de habilidade e jogadas de ataque enquanto a fonte do seu medo estiver em sua linha de visão.",
            "Você não pode se mover voluntariamente para uma posição que a faça terminar o turno mais próxima da sua fonte de medo do que sua posição inicial.."
        ]
    },
    {
        title: "Atordoado",
        icon: "internal-injury",
        subtitle: "Você está desnorteado",
        description: "Você está desnorteado",
        reference: "PHB, pg. 291.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Caído",
        icon: "crawl",
        subtitle: "Você está no chão",
        description: "Você está no chão",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Cego",
        icon: "one-eyed",
        subtitle: "Você não pode ver",
        description: "Você não pode ver",
        reference: "PHB, pg. 291.",
        bullets: [
            "Você falha automaticamente em qualquer teste de habilidade que requeira o uso da visão.",
            "Você tem desvantagem em rolagens de ataque.",
            "Rolagens de ataque contra você possuem vantagem."
        ]
    },
    {
        title: "Enfeitiçado",
        icon: "smitten",
        subtitle: "Você está enfeitiçado",
        description: "Você está enfeitiçado por outra criatura",
        reference: "PHB, pg. 292.",
        bullets: [
            "Você não pode atacar quem te enfeitiçou ou tê-lo como alvo de habilidades ou efeitos mágicos nocivos.",
            "Quem o enfeitiçou possui vantagem em testes de habilidade feitos para interagir socialmente com a criatura."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        subtitle: "Você é afetado por veneno",
        description: "Você é afetado por um veneno",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Exaustão",
        icon: "crawl",
        subtitle: "Você está sem forças",
        description: "Exhaustion is measured in six levels",
        reference: "PHB, pg. 292.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
            "You suffer the effect of your current level of exhaustion as well as all lower levels.",
            "Finishing a long rest reduces your exhaustion level by 1, provided that you have also had some food and drink."
        ]
    },
    {
        title: "Impedido",
        icon: "imprisoned",
        subtitle: "Você está contido",
        description: "Você está contido",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        subtitle: "Você não pode agir ou reagir",
        description: "Você não pode realizar ações ou reações",
        reference: "PHB, pg. 292.",
        bullets: [
        ]
    },
    {
        title: "Inconsciente",
        icon: "coma",
        subtitle: "Você está desacordado",
        description: "Você está desacordado",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    },
    {
        title: "Invisível",
        icon: "invisible",
        subtitle: "Você não pode ser visto",
        description: "Você não pode ser visto sem a ajuda de magia ou sentido especial",
        reference: "PHB, pg. 293.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Paralisado",
        icon: "internal-injury",
        subtitle: "Você está paralisado",
        description: "Você não pode fazer nada",
        reference: "PHB, pg. 293.",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        subtitle: "Você está transformado em pedra",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 293.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Surdo",
        icon: "elf-ear",
        subtitle: "Você não pode ouvir",
        description: "Você não pode ouvir",
        reference: "PHB, pg. 293.",
        bullets: [
            "Você falha automaticamente em qualquer teste de habilidade que requeira o uso da audição."
        ]
    }
]
