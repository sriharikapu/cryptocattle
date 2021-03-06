const Chance = require("chance");

const chance = new Chance();
const random = (min, max) => chance.integer({ min, max });
const personalityTypes = [
  "Bashful",
  "Docile",
  "Hardy",
  "Quirky",
  "Serious",
  "Adamant",
  "Brave",
  "Lonely",
  "Naughty",
  "Bold",
  "Relaxed",
  "Impish",
  "Lax",
  "Mild",
  "Modest",
  "Quiet",
  "Rash",
  "Calm",
  "Gentle",
  "Sassy",
  "Careful",
  "Timid",
  "Hasty",
  "Jolly",
  "Naive"
];
const aspectTypes = {
  tail: [
    {
      identifier: "poof",
      size: "sm"
    },
    {
      identifier: "star",
      size: "md"
    }
  ],
  leg: [
    {
      identifier: "fat",
      size: "md"
    },
    {
      identifier: "skinny",
      size: "md"
    }
  ],
  body: [
    {
      identifier: "fat",
      size: "md"
    },
    {
      identifier: "skinny",
      size: "md"
    }
  ],
  horn: [
    {
      identifier: "flower",
      size: "sm"
    },
    {
      identifier: "horn",
      size: "md"
    }
  ],
  wing: [
    {
      identifier: "devil",
      size: "sm"
    },
    {
      identifier: "angel",
      size: "lg"
    }
  ],
  accessory: [
    {
      identifier: "bell",
      size: "md"
    },
    {
      identifier: "medal",
      size: "md"
    }
  ],
  emote: [
    {
      identifier: "smirk",
      size: "md"
    },
    {
      identifier: "alarmed",
      size: "md"
    }
  ],
  hair: [
    {
      identifier: "none",
      size: "md"
    },
    {
      identifier: "short",
      size: "md"
    }
  ]
};

let cowCount = 0;
let strawCount = 0;

exports.Mock = class Mock {
  generateCow(override) {
    const wordCount = random(3, 7);
    const cow = {
      id: ++cowCount,
      description: chance.sentence({ words: wordCount }),
      image: `https://cryptocattle.xyz/images/cow/${random(0, 78)}.svg`,
      aspects: Object.entries(aspectTypes).reduce((prev, [key, value]) => {
        prev[key] = value[random(0, value.length - 1)];
        return prev;
      }, {}),
      attributes: {
        generation: random(0, 6),
        moofactoryPeriod: random(43200, 172800),
        personalityType:
          personalityTypes[random(0, personalityTypes.length - 1)],
        strength: random(1, 20),
        dexterity: random(1, 20),
        constitution: random(1, 20),
        intelligence: random(1, 20),
        wisdom: random(1, 20),
        charisma: random(1, 20)
      },
      forSale: chance.bool(),
      ...override
    };

    return cow;
  }

  generateStraw(override) {
    const straw = {
      id: ++strawCount,
      image: "https://placehold.it/64x64",
      attributes: {
        frozen: chance.bool(),
        parentId: random(1, 100000)
      },
      forSale: chance.bool(),
      ...override
    };

    return straw;
  }

  generateLocalSet() {
    const cowCount = random(5, 50);
    const strawCount = random(5, 50);
    const cows = Array.from({ length: cowCount }, this.generateCow);
    const straws = Array.from({ length: strawCount }, this.generateStraw);

    window.localStorage.setItem("localCows", JSON.stringify(cows));
    window.localStorage.setItem("localStraws", JSON.stringify(straws));

    console.info("Local set created. Moo!");
  }

  generateUpstreamSet() {
    const cowCount = random(500, 2000);
    const strawCount = random(500, 2000);
    const cows = Array.from({ length: cowCount }, () =>
      this.generateCow({ forSale: true })
    );
    const straws = Array.from({ length: strawCount }, () =>
      this.generateStraw({ forSale: true })
    );

    window.localStorage.setItem("upstreamCows", JSON.stringify(cows));
    window.localStorage.setItem("upstreamStraws", JSON.stringify(straws));

    console.info("Upstream set created. Moo!");
  }
};
