// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
    position: 'Junior Fullstack JS Developer',
    salary: '600 $ в місяць',
  }, 
};

var footer = {
  social: {
    email: {
      text: "dmytro@mail.com",
      href: "https://www.linkedin.com/in/dmytro-test",
      address: 'Ukraine, Lutsk',
    },
    
    phone: {
      text: "+380670000123",
      href: "tel:+380670000123",
    },
   
    LinkedIn: {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/dmytro-test",
    },

    salary: {
      text: "600$ в місяць"
    },
  },
};

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    title: 'Resume',
    
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: "Summary",
        text: "Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.",
      },

      experience: {
        title: "Other experience",
        text: "Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
      },
    },

    footer,
  })
}),

// ================================================================


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    title: 'Skils',

    page: {
      title: 'Resume | Skills',
    },
    
    header,

    main: {
      title: 'My hobbies',
      titler: 'Navchannya',

      
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'JS',
          point: 8,
          isTop: false,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: false,
        },
        {
          name: 'PHP',
          point: null,
          isTop: false,
        },
      ],

      hobbies: [
        {
          name: 'football',
          isMain: true,
        },
        {
          name: 'Piano',
          isMain: false,
        },
        {
          name: 'IT',
          isMain: true,
        },
        {
          name: 'Play games that my frainds',
          isMain: false,
        },
      ],
    },

    footer,
  })
}),


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    title: 'Education',
    
    page: {
      title: 'Resume | Edukation',
    },

    header,

  

    main: {

      title: `My certificates`,
      educations: [
        {
          name: 'Все-освіта',
          isEnd: false,
        },
        {
          name: 'Укр-школа',
          isEnd: true,
        },
        {
          name: 'Луцький ліцей',
          isEnd: true,
        },
        {
          name: 'Школа №342',
          isEnd: false,
        },
        {
          name: 'Школа №586',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'Kartoshka',
          id: '234567'
        },
        {
          name: 'Pomidor',
          id: '986740'
        },
        {
          name: 'Yablochko',
          id: '243868'
        },
      ],
    },

    footer,
  })
}),


//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    
    page: {
      title: 'Resume | Work',
    },

    header,

  

    main: {
      works: [
        {
          position: 'junior fullstack developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },

          projectAmount: 3,
          

          projects: [
            {
              stackAmount: 4,
              awardAmount: 2,

              name: 'Resume',
              about: 'process.processTicksAndRejections',
              url: 'https://resume.com.ua/',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Coder',
                },
                {
                  name: 'Node.js',
                },
              ],

              awards: [
                {
                  name: 'Cache boolean hinting to the engine it should cache',
                },
                {
                  name: 'WebSocketServer.emit',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
}),




// ================================================================



// Підключаємо роутер до бек-енду
module.exports = router
