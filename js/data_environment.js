data_environment_obscurance = [
    {
        title: "Escuridão leve",
        icon: "bleeding-eye",
        subtitle: "Desvantagem em Percepção",
        description: "Dim light, patchy fog, moderate foliage",
        reference: "PHB, pg. 185.",
        bullets: [
            "Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight."
        ]
    },
    {
        title: "Escuridão densa",
        icon: "lightning-tear",
        subtitle: "Visão bloqueada",
        description: "Darkness, opaque fog, dense foliage",
        reference: "PHB, pg. 185.",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Luz plena",
        icon: "star-pupil",
        subtitle: "Visão normal",
        description: "Bright light lets most creatures see normally",
        reference: "PHB, pg. 183.",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Penumbra",
        icon: "semi-closed-eye",
        subtitle: "Escuridão leve",
        description: "Dim light, also called shadows",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ]
    },
    {
        title: "Escuridão total",
        icon: "worried-eyes",
        subtitle: "Escuridão densa",
        description: "Darkness creates a heavily obscured area",
        reference: "PHB, pg. 185.",
        bullets: [
            "Creates a <b>heavily obscured</b> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
]

data_environment_vision = [
    {
        title: "Percepção às cegas",
        icon: "one-eyed",
        subtitle: "Perceber sem visão",
        description: "Perceive your surroundings without relying on sight, within a certain radius",
        reference: "PHB, pg. 185.",
        bullets: [
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ]
    },
    {
        title: "Visão no escuro",
        icon: "semi-closed-eye",
        subtitle: "Visão limitada no escuro",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius",
        reference: "PHB, pg. 187.",
        bullets: [
            "Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only lightly obscured as far as that creature is concerned.",
            "However, the creature can’t discern color in darkness, only shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ]
    },
    {
        title: "Visão verdadeira",
        icon: "eye-shield",
        subtitle: "Enxergar na escuridão",
        description: "A creature with truesight can see everything in its true form, independent of the environment",
        reference: "PHB, pg. 187.",
        bullets: [
            "A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic.",
            "Furthermore, the creature can see into the Ethereal Plane."
        ]
    }
]

data_environment_cover = [
    {
        title: "Meia cobertura",
        icon: "broken-shield",
        subtitle: "Mureta, mobília grande",
        description: "A target has half cover if an obstacle blocks at least half of its body",
        reference: "PHB, pg. 198.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Três-quartos de cobertura",
        icon: "cracked-shield",
        subtitle: "Grade levadiça, seteira",
        description: "A target has three-quarters cover if about three-quarters of it is covered by an obstacle",
        reference: "PHB, pg. 198.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Cobertura total",
        icon: "shield",
        subtitle: "Completamente escondido",
        description: "A target has total cover if it is completely concealed by an obstacle",
        reference: "PHB, pg. 198.",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
]

data_environment_other = [
    {
        title: "Queda",
        icon: "falling",
        subtitle: "Queda de uma grande altura",
        description: "Uma criatura sofre 1d6 de dano de concussão para cada 3m de queda",
        reference: "PHB, pg. 185.",
        bullets: [
            "O dano máximo de uma queda é de até 20d6 (equivalente a 60 metros).",
            "A criatura ficará caida no chão, a menos que ela evite sofrer o dano da queda."
        ]
    },
    {
        title: "Asfixia",
        icon: "drowning",
        subtitle: "Não conseguir respirar",
        description: "Uma criatura pode segurar sua respiração por um número de minutos igual a 1 + seu modificador de Constituição (mínimo de 30 segundos).",
        reference: "PHB, pg. 185.",
        bullets: [
            "Quando uma criatura ficar sem respirar, ela pode sobreviver por um número de rodadas igual ao seu modificador de Constituição (mínimo 1 rodada).",
            "No início do seu próximo turno, ela cai a 0 pontos de vida e está morrendo.",
            "Se você não puder respirar ou estiver sufocando, você não pode recuperar pontos de vida ou se estabilizar até poder respirar novamente."
        ]
    }
]
