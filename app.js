const btns = document.querySelectorAll('.question-btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement

    question.classList.toggle('show-text')
  })
})

const faqQuestions = [
  {
    faq_type: 'general',
    faq_question:
      'I want to connect my brand to Creatiosoft Poker; is it possible?',
    faq_answer:
      'Yes, the microservice architecture used to create this poker enables the independent modification of each gaming service. The game logic micro-service makes it simple to add new games, and the UI/UX micro-service makes it easier to customize the front-end style. To sum up, you can change or modify any part of the game, including the front-end and back-end. You can either assemble your team internally or hire developers from Creatiosoft Poker to modify.',
  },
  {
    faq_type: 'general',
    faq_question:
      'Is it possible to set up a poker network including resellers of chips, agents, and affiliates?',
    faq_answer:
      "Yes, Creatiosoft Poker provides a complete solution for running an online poker network. Agents and sub-agents may manage their players with support for cashouts and deposits using a specialized agent login dashboard. With specified rake sharing, the administrator may designate affiliates and provide a unique URL for players to accept invitations. Reseller users can replenish their players' chips directly from their dashboards. From the super admin dashboard, commission schemes may be set up for several roles, including affiliates, chip resellers, agents, and sub-agents.",
  },
  {
    faq_type: 'general',
    faq_question: 'Which payment options does the poker software support?',
    faq_answer:
      'The Creatiosoft poker software is pre-programmed to accept credit/debit cards, bank transfers, e-wallets like PayPal and Skrill, and other payment methods for real money. It also supports well-known cryptocurrencies, like USDT (Tether), ETH (Ethereum), and BTC (Bitcoin). As an extra payment option, you can also use your private crypto tokens. For the convenience of our customers, we have now integrated several web 3.0 wallets, including Metamask, Phantom, and Nami.',
  },
  {
    faq_type: 'general',
    faq_question: 'What is the usual lead time for poker source code delivery?',
    faq_answer:
      'After payment confirmation, the standard-ready Creatiosoft poker software may be sent out in three hours. But, if you need customization, we will discuss it and get your agreement before sending you a thorough delivery schedule. Please be aware that the delivery day count will not start until we have all the data, resources, and accounts needed for deployment and installation. If any local holidays or weekends occur during the delivery timeline calculation, they will not be included.',
  },
  {
    faq_type: 'general',
    faq_question:
      "How is the poker software's random number generator (RNG) controlled?",
    faq_answer:
      'The Fisher-Yates method, also known as the Knuth Shuffle, is used in many public domain PRNGs to control the RNG (Random Number Generator) in Creatiosoft Poker. This method is used to shuffle the deck of cards and ensure that the card order is random and unpredictable to provide a fair and unbiased game. This poker program is powered by a JavaScript library that is based on Python\'s "random" PRNG (Pseudo-Random Number Generator) module. The library uses a seed value to initialize the generator and generate random numbers. By using the same seed value, the same set of random numbers can be generated each time, which is important for maintaining fairness and reproducing game outcomes. The WELL-1024a PRNG technique is used by many poker software systems as their central random number generator (RNG). This method is known for its unpredictability and randomness and is considered to be cryptographically secure. This technique generates random numbers based on a large pool of internal states that changes after each random number generation. This ensures that every number generated is completely random and unbiased and that an external observer cannot predict the order in which the numbers are generated. Finally, it is important to note that RNG certification for software will come from reputable RNG certification laboratories such as BMM Test Labs, iTech laboratories, GLI (Gaming Laboratories International), eCOGRA (eCommerce Online Gaming Regulation and Assurance), and iTech Labs.',
  },
  {
    faq_type: 'pricing',
    faq_question: 'How much is the average cost of poker software?',
    faq_answer:
      "Approximately USD 10500 is spent on poker software that includes Texas and Omaha games along with standard features like player management, rake setup, game manager, deposit and cashout options, etc. But if you add more sophisticated features like agents, affiliates, tournaments, and support for many platforms including iOS, Android, Facebook, Mac, and desktop installable solutions—as well as bonuses—the price might go up to USD 60000. The necessary platform connections and technologies also affect the total cost. With a starting fee of just 2% per month on the total earned rake on our software, a white-label poker setup might be less expensive than an outright purchase. This gives you less flexibility and control than an outright purchase, but it still allows you to utilize Creatiosoft's infrastructure, branding, and software as your own. The sales staff at Creatiosoft Poker is always ready to talk about your unique needs for poker software and to deliver you a customized solution that works with your budget and meets your company objectives. Additionally, they will show you many price alternatives and assist you in selecting the most appropriate one for your job. Please don't hesitate to contact them at any moment!",
  },
  {
    faq_type: 'pricing',
    faq_question:
      'Can I pay for the source code for the poker program in instalments rather than all at once?',
    faq_answer:
      "Of course, as agreed upon in a mutual agreement, you can pay the poker source code fee in two to three stages. Code distribution won't start until the last milestone payment is received. However, you would have to pay the entire price in advance if you want the code sent right now.",
  },
  {
    faq_type: 'pricing',
    faq_question:
      'After I buy the poker source code, can I hire engineers to alter it? If yes, how much does it usually cost?',
    faq_answer:
      'Indeed, you may work on your specialized bespoke requests with your in-house team or by hiring developers from Creatiosoft Poker. The hourly rate for hiring a developer from Creatiosoft Poker is $25, and based on the volume of work, you could be able to receive a reduction in the overall cost.',
  },
  {
    faq_type: 'pricing',
    faq_question:
      'Does Creatiosoft Poker have any setup or installation costs?',
    faq_answer:
      'No, the cost of purchasing the package already includes the setup charge for the first domain. However, the sales staff will send you a separate estimate if you need our assistance setting up the poker software on different domains.',
  },
  {
    faq_type: 'pricing',
    faq_question:
      'Does the poker software need payment for customer care or technical support?',
    faq_answer:
      'The pricing of the device includes the first three months of assistance; after that, you will need to sign up for our assistance-Tech Care Plan, which is available for just USD 499 a month. Development work and server problems are not included in this plan; it solely covers bug support. So, you may speak with your account manager about any bespoke support plan, and they will offer you a cost based on your unique needs.',
  },
  {
    faq_type: 'integration',
    faq_question:
      'Is it possible to include the poker game in my current gaming portal?',
    faq_answer:
      "Creatiosoft Poker's ability to provide a quick and easy game integration procedure using RESTful APIs has completely changed the online poker gaming landscape. It's easy to integrate with your current payment processor and user database by using the poker API. We use a variety of techniques to link our poker game to the desired websites. Putting the game on a subdomain that points to your primary navigation tab is one approach to incorporate it. As an alternative, you may use an iframe to immediately generate a game view.",
  },
  {
    faq_type: 'integration',
    faq_question: 'How much time and money does integration need?',
    faq_answer:
      'Generally, depending on the help from your internal teams, we need 5-7 business days to complete the setup and integration of the poker game. To integrate the game with the current user base, access to the server and database is required.',
  },
  {
    faq_type: 'integration',
    faq_question:
      'How do payments for poker games that are connected to our platform get made?',
    faq_answer:
      "Delivering the poker games and integrating them into your website's URL is part of our services. We also handle all payment-related tasks, such as betting, depositing, and cashing out inside your website and database. By advising on how to get the approved gaming license, we also help with the setup of a payment gateway. Many currencies, including cryptocurrencies and conventional fiat currencies, can be supported by the Creatiosoft Poker. In a typical setup, users may choose to buy chips using a credit card or by sending Bitcoin to a single wallet.",
  },
  {
    faq_type: 'integration',
    faq_question:
      'Does integrating a poker game with our platform come with a price?',
    faq_answer:
      "Yes, the cost of the integration services is usually already covered by the price of the package. Before offering a quote, still, in some circumstances, we might still need to assess the target website's coding structure and necessary API connections.",
  },
  {
    faq_type: 'integration',
    faq_question:
      'Can users who play poker use their current gaming account, or do they need to establish a new one?',
    faq_answer:
      "The flow of user registration and login is not changed by the integration procedure. Since we'll be using your current database and profile information, your current players may access the online poker game using their game account. Also to poker, new users can sign up and play other games that are already available.",
  },
  {
    faq_type: 'code_setup',
    faq_question:
      'After purchasing, how long does it take to set up the Creatiosoft Poker?',
    faq_answer:
      'The bundle you select will determine when the Creatiosoft poker software is delivered. The files may be given in three hours if you choose the "Creatiosoft Poker for sale" approach. You will receive comprehensive documentation with the program to help you launch your game properly. Our poker software has a streamlined and improved setup procedure that reduces the time and effort needed to implement it in stores. The delivery period for the "white label poker software" service is often three to five business days. This is because we have a lot on our plate, including installing the server, setting up the domain name, integrating your branding and logo where it belongs, and waiting for DNS propagation. The intricacy of the design and the features you want us to incorporate will determine how long it takes to complete if you need bespoke work and design.',
  },
  {
    faq_type: 'code_setup',
    faq_question: 'Which programming language does Creatiosoft Poker use?',
    faq_answer:
      'Three distinct products, each based on a different frontend technology (React Js, Unity 3D, or Cocos Creator), are offered by Creatiosoft Poker. The backend has a specially designed multiplayer configuration that is compatible with all platforms and is built on HTML5, Node Js, and Socket. Select the one that best meets your demands by getting in touch with the sales staff.',
  },
  {
    faq_type: 'code_setup',
    faq_question:
      'What specifications does the Creatiosoft Poker installation server need to meet?',
    faq_answer:
      'For hosting your poker software, we advise using a dedicated Amazon cloud server, which will run you between $80 and $120 a month for 20,000 players. You can begin by setting up these settings; RAM: 2x 8GB, CPU: 2x 16 cores 2.30GHz, PORT: 1 Gbit/s Port, 500 GB SSD Application Server, Server for databases: 100 GB SSD, Ubuntu as the operating system. Regularly monitoring your server and scaling it up only when required are cost-effective strategies.',
  },
  {
    faq_type: 'code_setup',
    faq_question: 'Can I configure my server to run a Creatiosoft Poker?',
    faq_answer:
      'Creatiosoft Poker offers a thorough setup manual along with an online knowledge base to assist you in configuring the poker source code on your server. There will also be a video lesson available for Amazon Web Server.',
  },
  {
    faq_type: 'code_setup',
    faq_question: 'Will there be technical help available to me during setup?',
    faq_answer:
      'Yes, you will receive eight hours of help from a professional poker developer to help you grasp the code and configurations after purchasing the Creatiosoft Poker.',
  },
  {
    faq_type: 'security',
    faq_question: 'How does cryptocurrency affect poker?',
    faq_answer:
      "A cryptocurrency poker website is an online poker room where players may utilize popular cryptocurrencies as payment methods. Players may remain anonymous when playing crypto poker by not disclosing their financial or personal information. The game's accessibility across many areas is further improved by the adoption of cryptocurrencies like Ethereum and Bitcoin. We at Creatiosoft Poker do not support conventional forms of gambling. The play-money experience that our software offers is intended only for leisure use. We solely function as a software supplier; we don't perform any game licensing operations. Global rules are adhered to in the development of our Creatiosoft poker, and it is your responsibility as a customer to secure your certificates. To enable you to use our product efficiently, we provide technical support as well as documentation assistance.",
  },
  {
    faq_type: 'security',
    faq_question:
      'How is collusion identified and avoided by the poker software?',
    faq_answer:
      "Creatiosoft Poker guarantees robust security protocols for every product's code. It uses neural pattern recognition. Real-time hand history recording and player behaviour analysis can assist detect collusion. To provide warnings for any strange behaviour on the admin dashboard. The algorithm also keeps an eye on player IP addresses and betting patterns. A team of human reviewers then reviews the alerts and takes necessary action.",
  },
  {
    faq_type: 'security',
    faq_question:
      'Are there any built-in bot-detecting features in the poker software?',
    faq_answer:
      "A bot detection module in poker software may identify common bot behaviours such as making flawless judgments, making excessive bets, or playing an abnormally high number of hands per hour. It also can identify any third-party software that is used to automate games. The system flags the player's account and notifies the security team to take the appropriate action if it detects suspicious activity or bots.",
  },
  {
    faq_type: 'security',
    faq_question:
      'Is it possible to keep an eye on and trace the IP addresses that the poker software uses?',
    faq_answer:
      "Yes, each player's IP address is recorded and gathered by the poker software. The power to ban players from playing on the same IP belongs to the admin. Players can join a single table with friends and relatives on the same network by default.",
  },
  {
    faq_type: 'security',
    faq_question:
      'In the event of chip dumping, how does the poker program guarantee fair play for other players?',
    faq_answer:
      'To guarantee fair play, Creatiosoft Poker uses its systems to keep an eye on the quantity and frequency of transfers. It also looks for unusual betting patterns or player activity. Such as people plotting to cheat or moving a lot of chips between accounts. The operator has the authority to impose restrictions on the quantity of chips. It can be transferred between accounts or used to punish players found to be involved in this kind of behaviour. By taking these steps, chip dumping may be avoided and everyone can play on a fair playing field.',
  },
  {
    faq_type: 'support',
    faq_question: 'How can I get in touch with software support?',
    faq_answer:
      'You may email Sales@Creatiosoft.Com or open a support ticket on Creatiosoft Poker Helpdesk. Also, paid clients get access to a special Telegram channel where they may get fast help for any problems.',
  },
  {
    faq_type: 'support',
    faq_question: 'Which kinds of software help are offered?',
    faq_answer:
      'We offer both operational and technical help. A committed crew provides operational help. You can connect to them via chat and messaging apps like Google Chat, Skype, and Slack. On the other side, our technical staff provides technical help via a well-detailed instruction manual and knowledge base support.',
  },
  {
    faq_type: 'support',
    faq_question: 'Is software support a free service or does it need payment?',
    faq_answer:
      'Support will be given at no cost for the first three months. Following this time, you can ask for specialized assistance based on your requirements. To get real-time support, we advise paying USD 499 each month for a personal support engineer.',
  },
  {
    faq_type: 'support',
    faq_question:
      'Can I get help with development requests or customizations from software support?',
    faq_answer:
      "No, the primary goal of the support staff is to assure uptime and seamless functioning. If you have any extra development requirements, please contact your account manager. Make sure they stay within the given scope. Every new development request is viewed as extra labour. And it won't go live until the quality confirmation.",
  },
  {
    faq_type: 'support',
    faq_question:
      'How can I install and configure a poker game server without assistance?',
    faq_answer:
      'You will receive source code deliverables, installation instructions, and knowledge base access. To guarantee thorough knowledge transfer, a dedicated engineer will be assigned. He/ she will help with server setup, code configuration, and walkthroughs during the first three days.',
  },
]

const faqSelect = document.querySelector('#faqs')
const faqQuestionsEl = document.querySelector('.faq-questions')
const faqButtons = document.querySelectorAll('.faq-btn')

// Function to render questions
function renderQuestions(questions) {
  if (questions.length) {
    faqQuestionsEl.innerHTML = questions
      .map((question) => {
        return `
        <article class="question">
          <div class="question-title">
            <h4>${question.faq_question}</h4>
            <button type="button" class="question-btn">
              <span class="plus-icon">
                <i class="fa-solid fa-plus"></i>
              </span>
              <span class="minus-icon">
                <i class="fa-solid fa-minus"></i>
              </span>
            </button>
          </div>
          <p class="question-answer">
            Answer: ${question.faq_answer}
          </p>
        </article>
      `
      })
      .join('')

    const newBtns = document.querySelectorAll('.question-btn')
    newBtns.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
      })
    })
  }
}

// Event listener for category buttons
faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    faqButtons.forEach((btn) => btn.classList.remove('active'))

    button.classList.add('active')

    const faq_type = button.id
    const filteredQuestions = faqQuestions.filter(
      (question) => question.faq_type === faq_type
    )

    renderQuestions(filteredQuestions)
  })
})

// Event listener for select dropdown
faqSelect.addEventListener('change', (e) => {
  const faq_type = e.currentTarget.value
  const filteredQuestions = faqQuestions.filter(
    (question) => question.faq_type === faq_type
  )

  renderQuestions(filteredQuestions)
})
