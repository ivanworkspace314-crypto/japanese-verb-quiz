const quizGroups = [
  {
    number: '1',
    items: [
      {
        id: 'q1a',
        question: 'わたしは でんきを (　　　　)。',
        english: 'I turn on the light.',
        answer: 'つけます',
      },
      {
        id: 'q1b',
        question: 'でんきが (　　　　)。',
        english: 'The light is switched on.',
        answer: 'つきます',
      },
    ],
  },
  {
    number: '2',
    items: [
      {
        id: 'q2a',
        question: 'わたしは ドアを (　　　　)。',
        english: 'I close the door.',
        answer: 'しめます',
      },
      {
        id: 'q2b',
        question: 'ドアが (　　　　)。',
        english: 'The door is closed.',
        answer: 'しまります',
      },
    ],
  },{
    number: '3',
    items: [
      {
        id: 'q3a',
        question: 'せんせいは せいとを (　　　　)。',
        english: 'The teacher separates the student.',
        answer: 'はなします',
      },
      {
        id: 'q3b',
        question: 'ともだちと (　　　　)。',
        english: 'I am separated from my friends.',
        answer: 'はなれます',
      },
    ],
  },
  {
    number: '4',
    items: [
      {
        id: 'q4a',
        question: 'かれは かみをながく (　　　　)。',
        english: 'He is growing his hair long.',
        answer: 'はやしています',
      },
      {
        id: 'q4b',
        question: 'くさが (　　　　)。',
        english: 'Grass is growing.',
        answer: 'はえています',
      },
    ],
  },
  {
    number: '5',
    items: [
      {
        id: 'q5a',
        question: 'かれは とけいを (　　　　)。',
        english: 'He removes his watch.',
        answer: 'はずします',
      },
      {
        id: 'q5b',
        question: 'ぼたんが (　　　　)。',
        english: 'The button comes off.',
        answer: 'はずれます',
      },
    ],
  },
  {
    number: '6',
    items: [
      {
        id: 'q6a',
        question: 'かれは うんどうをして たいじゅうを (　　　　)。',
        english: 'He is exercising to decrease his weight.',
        answer: 'へらしています',
      },
      {
        id: 'q6b',
        question: 'たいじゅうが (　　　　)。',
        english: 'The weight is decreasing.',
        answer: 'へっています',
      },
    ],
  },{
    number: '7',
    items: [
      {
        id: 'q7a',
        question: 'かのじょは のみものを (　　　　)。',
        english: 'She cools down the drink.',
        answer: 'ひやします',
      },
      {
        id: 'q7b',
        question: 'のみものが (　　　　)。',
        english: 'The drink is cooled down.',
        answer: 'ひえています',
      },
    ],
  },{
    number: '8',
    items: [
      {
        id: 'q8a',
        question: 'かれは もんだいを (　　　　)。',
        english: 'He solves the problem.',
        answer: 'ときます',
      },
      {
        id: 'q8b',
        question: 'もんだいが (　　　　)。',
        english: 'The problem is solved.',
        answer: 'とけます',
      },
    ],
  },
  {
    number: '9',
    items: [
      {
        id: 'q9a',
        question: 'かのじょは かばんに ほんを (　　　　)。',
        english: 'She puts a book in the bag.',
        answer: 'いれます',
      },
      {
        id: 'q9b',
        question: 'ほんが かばんに (　　　　)。',
        english: 'The book is in the bag.',
        answer: 'はいっています',
      },
    ],
  },
  {
    number: '10',
    items: [
      {
        id: 'q10a',
        question: 'かれは かみのいろを (　　　　)。',
        english: 'He changes his hair color.',
        answer: 'かえます',
      },
      {
        id: 'q10b',
        question: 'じかんが (　　　　)。',
        english: 'The time changes.',
        answer: 'かわります',
      },
    ],
  },{
    number: '11',
    items: [
      {
        id: 'q11a',
        question: 'かれは ほんを ともだちに (　　　　)。',
        english: 'He returns the book to his friend.',
        answer: 'かえします',
      },
      {
        id: 'q11b',
        question: 'かれは いえに (　　　　)。',
        english: 'He returns home.',
        answer: 'かえります',
      },
    ],
  },
  {
    number: '12',
    items: [
      {
        id: 'q12a',
        question: 'かのじょは コートを フックに (　　　　)。',
        english: 'She hangs the coat on the hook.',
        answer: 'かけます',
      },
      {
        id: 'q12b',
        question: 'コートが フックに (　　　　)。',
        english: 'The coat is hung on the hook.',
        answer: 'かかっています',
      },
    ],
  },
  {
    number: '13',
    items: [
      {
        id: 'q13a',
        question: 'かれは はなを (　　　　)。',
        english: 'He accidentally dries up the flowers.',
        answer: 'からしてしまいます',
      },
      {
        id: 'q13b',
        question: 'はなが (　　　　)。',
        english: 'The flowers are withering.',
        answer: 'かれています',
      },
    ],
  },
  {
    number: '14',
    items: [
      {
        id: 'q14a',
        question: 'かのじょは せんたくものを (　　　　)。',
        english: 'She dries the laundry.',
        answer: 'かわかします',
      },
      {
        id: 'q14b',
        question: 'せんたくものが (　　　　)。',
        english: 'The laundry is dry.',
        answer: 'かわいています',
      },
    ],
  },
  {
    number: '15',
    items: [
      {
        id: 'q15a',
        question: 'かれは ライトを (　　　　)。',
        english: 'He turns off the light.',
        answer: 'けします',
      },
      {
        id: 'q15b',
        question: 'ライトが (　　　　)。',
        english: 'The light disappears.',
        answer: 'きえます',
      },
    ],
  },{
    number: '16',
    items: [
      {
        id: 'q16a',
        question: 'かれは おんがくを (　　　　)。',
        english: 'He listens to music.',
        answer: 'ききます',
      },
      {
        id: 'q16b',
        question: 'おんがくが (　　　　)。',
        english: 'I can hear music.',
        answer: 'きこえます',
      },
    ],
  },
  {
    number: '17',
    items: [
      {
        id: 'q17a',
        question: 'かのじょは りょこうのけいかくを (　　　　)。',
        english: 'She decides on the travel plan.',
        answer: 'きめます',
      },
      {
        id: 'q17b',
        question: 'りょこうのけいかくが (　　　　)。',
        english: 'The travel plan is decided.',
        answer: 'きまります',
      },
    ],
  },
  {
    number: '18',
    items: [
      {
        id: 'q18a',
        question: 'かれは おもちゃを (　　　　)。',
        english: 'He breaks the toy.',
        answer: 'こわします',
      },
      {
        id: 'q18b',
        question: 'おもちゃが (　　　　)。',
        english: 'The toy is broken.',
        answer: 'こわれています',
      },
    ],
  },
  {
    number: '19',
    items: [
      {
        id: 'q19a',
        question: 'かれは かいぎに あたらしいメンバーを (　　　　)。',
        english: 'He adds a new member to the meeting.',
        answer: 'くわえます',
      },
      {
        id: 'q19b',
        question: 'あたらしいメンバーが かいぎに (　　　　)。',
        english: 'A new member joins the meeting.',
        answer: 'くわります',
      },
    ],
  },
  {
    number: '20',
    items: [
      {
        id: 'q20a',
        question: 'かれは ノブを (　　　　)。',
        english: 'He turns the knob.',
        answer: 'まわします',
      },
      {
        id: 'q20b',
        question: 'ノブが (　　　　)。',
        english: 'The knob is turning.',
        answer: 'まわっています',
      },
    ],
  },
  {
    number: '21',
    items: [
      {
        id: 'q21a',
        question: 'かのじょは えいがを (　　　　)。',
        english: 'She watches a movie.',
        answer: 'みます',
      },
      {
        id: 'q21b',
        question: 'えいがが (　　　　)。',
        english: 'The movie can be seen.',
        answer: 'みえます',
      },
    ],
  },
  {
    number: '22',
    items: [
      {
        id: 'q22a',
        question: 'かれは かぎを (　　　　)。',
        english: 'He finds the key.',
        answer: 'みつけます',
      },
      {
        id: 'q22b',
        question: 'かぎが (　　　　)。',
        english: 'The key is found.',
        answer: 'みつかります',
      },
    ],
  },
  {
    number: '23',
    items: [
      {
        id: 'q23a',
        question: 'かれは こわれた とけいを (　　　　)。',
        english: 'He fixes the broken clock.',
        answer: 'なおします',
      },
      {
        id: 'q23b',
        question: 'とけいが (　　　　)。',
        english: 'The clock is fixed.',
        answer: 'なおります',
      },
    ],
  },
  {
    number: '24',
    items: [
      {
        id: 'q24a',
        question: 'かれは とりを (　　　　)。',
        english: 'He lets the bird escape.',
        answer: 'にがします',
      },
      {
        id: 'q24b',
        question: 'とりが (　　　　)。',
        english: 'The bird escapes.',
        answer: 'にげます',
      },
    ],
  },
  {
    number: '25',
    items: [
      {
        id: 'q25a',
        question: 'かれは こどもを くるまに (　　　　)。',
        english: 'He puts the child in the car.',
        answer: 'のせます',
      },
      {
        id: 'q25b',
        question: 'こどもが くるまに (　　　　)。',
        english: 'The child gets into the car.',
        answer: 'のります',
      },
    ],
  },{
    number: '26',
    items: [
      {
        id: 'q26a',
        question: 'かれは はを (　　　　)。',
        english: 'He pulls out a tooth.',
        answer: 'ぬきます',
      },
      {
        id: 'q26b',
        question: 'はが (　　　　)。',
        english: 'The tooth comes out.',
        answer: 'ぬけます',
      },
    ],
  },
  {
    number: '27',
    items: [
      {
        id: 'q27a',
        question: 'かのじょは こどもを (　　　　)。',
        english: 'She wakes up the child.',
        answer: 'おこします',
      },
      {
        id: 'q27b',
        question: 'こどもが (　　　　)。',
        english: 'The child wakes up.',
        answer: 'おきます',
      },
    ],
  },
  {
    number: '28',
    items: [
      {
        id: 'q28a',
        question: 'かれは バスを (　　　　)。',
        english: 'He lowers the bus.',
        answer: 'おろします',
      },
      {
        id: 'q28b',
        question: 'かれは バスから (　　　　)。',
        english: 'He gets off the bus.',
        answer: 'おります',
      },
    ],
  },
  {
    number: '29',
    items: [
      {
        id: 'q29a',
        question: 'かのじょは リンゴを (　　　　)。',
        english: 'She drops the apple.',
        answer: 'おとします',
      },
      {
        id: 'q29b',
        question: 'リンゴが (　　　　)。',
        english: 'The apple falls.',
        answer: 'おちます',
      },
    ],
  },
  {
    number: '30',
    items: [
      {
        id: 'q30a',
        question: 'かれは ドアを (　　　　)。',
        english: 'He closes the door.',
        answer: 'しめます',
      },
      {
        id: 'q30b',
        question: 'ドアが (　　　　)。',
        english: 'The door is closed.',
        answer: 'しまっています',
      },
    ],
  },
  {
    number: '31',
    items: [
      {
        id: 'q31a',
        question: 'かのじょは こどもを (　　　　)。',
        english: 'She is raising a child.',
        answer: 'そだてています',
      },
      {
        id: 'q31b',
        question: 'こどもが (　　　　)。',
        english: 'The child is growing up.',
        answer: 'そだっています',
      },
    ],
  },
  {
    number: '32',
    items: [
      {
        id: 'q32a',
        question: 'かれは きゅうかを たのしく (　　　　)。',
        english: 'He spends his vacation happily.',
        answer: 'すごします',
      },
      {
        id: 'q32b',
        question: 'じかんが (　　　　)。',
        english: 'Time passes.',
        answer: 'すぎます',
      },
    ],
  },
  {
    number: '33',
    items: [
      {
        id: 'q33a',
        question: 'かれは てきを (　　　　)。',
        english: 'He knocks down the enemy.',
        answer: 'たおします',
      },
      {
        id: 'q33b',
        question: 'きが (　　　　)。',
        english: 'The tree falls down.',
        answer: 'たおれます',
      },
    ],
  },
  {
    number: '34',
    items: [
      {
        id: 'q34a',
        question: 'かれは ともだちを (　　　　)。',
        english: 'He helps his friend.',
        answer: 'たすけます',
      },
      {
        id: 'q34b',
        question: 'あなたのおかげで (　　　　)。',
        english: 'I am helped thanks to you.',
        answer: 'たすかります',
      },
    ],
  },
  {
    number: '35',
    items: [
      {
        id: 'q35a',
        question: 'かれは テーブルを (　　　　)。',
        english: 'He sets up the table.',
        answer: 'たてます',
      },
      {
        id: 'q35b',
        question: 'テーブルが (　　　　)。',
        english: 'The table is standing.',
        answer: 'たっています',
      },
    ],
  },
  {
    number: '36',
    items: [
      {
        id: 'q36a',
        question: 'かのじょは てがみを (　　　　)。',
        english: 'She delivers the letter.',
        answer: 'とどけます',
      },
      {
        id: 'q36b',
        question: 'てがみが (　　　　)。',
        english: 'The letter arrives.',
        answer: 'とどきます',
      },
    ],
  },
  {
    number: '37',
    items: [
      {
        id: 'q37a',
        question: 'かれは バターを (　　　　)。',
        english: 'He melts the butter.',
        answer: 'とかします',
      },
      {
        id: 'q37b',
        question: 'バターが (　　　　)。',
        english: 'The butter is melting.',
        answer: 'とけています',
      },
    ],
  },
  {
    number: '38',
    items: [
      {
        id: 'q38a',
        question: 'かれは とけいを (　　　　)。',
        english: 'He stops the clock.',
        answer: 'とめます',
      },
      {
        id: 'q38b',
        question: 'とけいが (　　　　)。',
        english: 'The clock is stopped.',
        answer: 'とまっています',
      },
    ],
  },
  {
    number: '39',
    items: [
      {
        id: 'q39a',
        question: 'かれは にもつを (　　　　)。',
        english: 'He lets the luggage through.',
        answer: 'とおします',
      },
      {
        id: 'q39b',
        question: 'くるまが (　　　　)。',
        english: 'A car is passing through.',
        answer: 'とおっています',
      },
    ],
  },
  {
    number: '40',
    items: [
      {
        id: 'q40a',
        question: 'かれは ほんを (　　　　)。',
        english: 'He sells a book.',
        answer: 'うります',
      },
      {
        id: 'q40b',
        question: 'ほんが (　　　　)。',
        english: 'The book is sold.',
        answer: 'うれます',
      },
    ],
  },
  {
    number: '41',
    items: [
      {
        id: 'q41a',
        question: 'かれは おゆを (　　　　)。',
        english: 'He boils the water.',
        answer: 'わかします',
      },
      {
        id: 'q41b',
        question: 'おゆが (　　　　)。',
        english: 'The water is boiling.',
        answer: 'わいています',
      },
    ],
  },
  {
    number: '42',
    items: [
      {
        id: 'q42a',
        question: 'かのじょは わたしに てがみを (　　　　)。',
        english: 'She hands me the letter.',
        answer: 'わたします',
      },
      {
        id: 'q42b',
        question: 'かれは はしを (　　　　)。',
        english: 'He crosses the bridge.',
        answer: 'わたります',
      },
    ],
  },
  {
    number: '43',
    items: [
      {
        id: 'q43a',
        question: 'かれは パンを (　　　　)。',
        english: 'He bakes bread.',
        answer: 'やきます',
      },
      {
        id: 'q43b',
        question: 'パンが (　　　　)。',
        english: 'The bread is baked.',
        answer: 'やけています',
      },
    ],
  },
  {
    number: '44',
    items: [
      {
        id: 'q44a',
        question: 'かれは ふくを (　　　　)。',
        english: 'He dirties his clothes.',
        answer: 'よごします',
      },
      {
        id: 'q44b',
        question: 'ふくが (　　　　)。',
        english: 'The clothes are dirty.',
        answer: 'よごれています',
      },
    ],
  },
  {
    number: '45',
    items: [
      {
        id: 'q45a',
        question: 'かのじょは ともだちを (　　　　)。',
        english: 'She makes her friend happy.',
        answer: 'よろこばせます',
      },
      {
        id: 'q45b',
        question: 'ともだちが (　　　　)。',
        english: 'The friend is happy.',
        answer: 'よろこんでいます',
      },
    ],
  },
  {
    number: '46',
    items: [
      {
        id: 'q46a',
        question: 'かれは いすを (　　　　)。',
        english: 'He brings the chair closer.',
        answer: 'よせます',
      },
      {
        id: 'q46b',
        question: 'かれは ちかくに (　　　　)。',
        english: 'He is approaching nearby.',
        answer: 'よっています',
      },
    ],
  }
];

export default quizGroups;
