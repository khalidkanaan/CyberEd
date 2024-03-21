import { toggleElements, navigateSlide } from '../../../assets/js/helpers';
import Slide2 from '../slides/Slide2'
import Slide3 from '../slides/Slide3'
import Slide2CyberThreats from '../../threats/slides/Slide2' // change to slide 1 later

const robotId = ['robot'];
const malwaresIds = ['malware-img-div', 'virus', 'ransomware', 'trojan', 'worm', 'antivirus-img-div', 'kaspersky', 'shield'];
const all = [...robotId, ...malwaresIds];
export const intro = [
  {
    text: 'Hey there, young cyber defenders! Welcome to the Cyber City, ' +
    'where you become the hero of the digital realm! I\'m your trusty Character Guide, ' +
    'and I\'m here to help you navigate through the world of cyber threats.',
    action: () => toggleElements(robotId),
  },
  {
    text: 'Our digital world is full of challenges, and you\'re about to embark on a journey ' +
    'to become a Cyber Guardian. Your mission? To protect your virtual kingdom from the ' +
    'notorious malware villains that threaten its safety.',
    action: () => toggleElements(malwaresIds, false),
  },
  {
    text: 'But fear not, you won\'t be alone. Along the way, you\'ll meet some unique characters ' +
    '– both friends and foes – each representing a different type of malware or cybersecurity defense. By understanding ' +
    'them, you\'ll gain the knowledge and skills needed to outsmart these digital troublemakers.',
    action: () => toggleElements(malwaresIds),
    ids: malwaresIds,
  },
  {
    text: 'Are you ready to dive in, learn the secrets of cybersecurity, and become ' +
    'a hero of the virtual realm? Great! Let the Cybersecurity Quest begin! ',
    okActions: [
      () => toggleElements(all, false, true),
      () => navigateSlide(Slide2)
    ],
  },
];

export const intro2 = [
  {
    text: 'Seeing as you are a novice, we’ll begin with the basics. ' +
          'Let\'s understand what cybersecurity is all about.',
    action: () => toggleElements(['cybersecurity']),
  },
  {
    text: 'Cybersecurity is the shield that protects computers, networks, and data from sneaky intruders. ' +
          'You can think of your digital devices as castles and your data as treasures. ' +
          'The simple goal of Cybersecurity is to keep those treasures safe from thieves and villains.',
    action: () => toggleElements(['cia-stool'], false).then(() => 
                  toggleElements(['cybersecurity'])),
  },
  {
    text: 'Let\'s delve into some key concepts of cybersecurity. ' +
          'First up, we have the CIA Triad: Confidentiality, Integrity, and Availability. ' +
          'Imagine it like a three-legged stool. If one leg wobbles, our cybersecurity stance becomes shaky!',
    action: () => toggleElements(['cybersecurity', 'stoolCMissing', 'confidentiality'], false).then(() => 
                  toggleElements(['cia-stool'])),
  },
  {
    text: 'Let’s break things down one stool leg at a time. The first leg represents Confidentiality, this principle ' + 
          'underscores the importance of restricting access to sensitive information to ONLY authorized individuals. ',    
    action: () => toggleElements(['cia-stool', 'userlogin'], false).then(() => 
                  toggleElements(['stoolCMissing', 'confidentiality'])),
  },
  {
    text: 'For example, when you set a password for your phone or computer, you do this to ensure that only you ' + 
          'can access your messages, photos, and other personal data. This prevents others from accessing your data ' +
          'unless they enter the correct username and password.',
    action: () => toggleElements(['confidentiality', 'integrity', 'stoolIMissing'], false).then(() => 
                  toggleElements(['userlogin', 'stoolCMissing'])),
  },
  {
    text: 'Let\'s now inspect the second leg of our stool. Integrity ensures that information remains accurate and trustworthy. ' +
          'It\'s about making sure that nobody messes with your data by changing it or deleting it without your permission.',
    action: () => toggleElements(['stoolCMissing', 'userlogin', 'tf2cheater'], false).then(() => 
                  toggleElements(['stoolIMissing', 'integrity'])),
  },
  {
    text: 'For instance, In video games, if a player cheats by altering the game code to gain an unfair advantage, this compromises ' +
          'the integrity of the game because the cheater\'s game has been altered to be different than other players.',
    action: () => toggleElements(['integrity', 'availability', 'stoolAMissing'], false).then(() => 
                  toggleElements(['tf2cheater', 'stoolIMissing'])),
  },
  {
    text: 'Lastly, we have Availability, this is the principle which ensures that information or resources are readily accessible whenever required. ' +
          'Think of it as having your favorite book always on the shelf, ready for you to pick up and read whenever you feel like it.',
    action: () => toggleElements(['tf2cheater', 'stoolIMissing', 'dinoGame', 'netflixDown'], false).then(() => 
                  toggleElements(['availability', 'stoolAMissing'])),
  },
  {
    text: 'Another example is when you log in to a website to watch your favorite show. In this scenario, you anticipate the website to be ' +
          'operational and accessible instead of being offline.',
    action: () => toggleElements(['availability', 'stoolAMissing', 'cia-quiz', 'cia-stool-right'], false).then(() => 
                  toggleElements(['dinoGame', 'netflixDown'])),
  },
  {
    text: 'Let\'s do a short quiz to test your understanding of the CIA triad.',
    action: () => toggleElements(['dinoGame', 'netflixDown'], false).then(() => 
                  toggleElements(['cia-quiz', 'cia-stool-right'])),
    okActions: [
      () => toggleElements(['robot'], false, true),
    ],
  },
];

export const intro2end = [
  {
    text: 'Good job! If you did\'t do we well on the quiz or if you\'d like to revisit the information you just learnt about the CIA triad then you can click ' +
          'the SLIDE BACK button in the bottom left corner of the screen to relearn the content. Otherwise, you can click Ok to start the next exercise',
    okActions: [
      () => navigateSlide(Slide3),
    ],
  },
];

export const intro3 = [
  {
    text: 'In cybersecurity, it\'s also crucial to distinguish between similar terms that carry different meanings. ' +
          'Take, for example, words like vulnerability, threat, attack, and risk. ' +
          'At first glance, these terms might seem interchangeable or overlapping. 🤔',
    action: () => toggleElements(['vrta']),
  },
  {
    text: 'Understanding the precise definitions of these terms is important for implementing effective security ' +
          'measures and mitigating potential risks to your digital assets!',
    action: () => toggleElements(['creeperVsArmour'], false).then(() => 
                  toggleElements(['vrta'])),
  },
  {
    text: 'Let\'s begin with vulnerability. You can think of Vulnerabilities as cracks in a warrior’s armor. ' +
          'These are weaknesses in the defense that the villains can exploit to sneak in and cause chaos!' +
          'These villains are known as threats and they lurk in the shadows and attack when their sinister schemes come to life.👺',
    action: () => toggleElements(['vrta', 'hacker', 'laptopSick'], false).then(() => 
                  toggleElements(['creeperVsArmour'])),
  },
  {
    text: 'A Threat is anything that can cause harm, like viruses or hackers. ' +
          'Threats may exist on your digital device or outside of it and they have the potential to be harmful only when an Attack happens. ' +
          'So an attack is when the threats actually try to do damage or steal information.',
    action: () => toggleElements(['creeperVsArmour'], false).then(() => 
                  toggleElements(['hacker', 'laptopSick'])),
  },
  {
    text: 'And Risk? Well, that\'s like the probability of your digital system getting attacked and the potential impact if it happens! ' +
          'The higher the risk, the more vigilant we need to be!',
    action: () => toggleElements(['hacker', 'laptopSick'], false).then(() => 
                  toggleElements(['riskAssess'])),
  },
  {
    text: 'Let\'s do a short quiz to test your understanding of vulnerabilities, threats, attacks, and risk. Click Ok to hide the dialogue box',
    action: () => toggleElements(['riskAssess'], false).then(() => 
                  toggleElements(['vrta-quiz'])),
    okActions: [
      () => toggleElements(['robot'], false, true),
    ],
  },
];

export const intro3end = [
  {
    text: 'Good job! If you did\'t do we well on the quiz or if you\'d like to revisit the information you just learnt you can click ' +
          'the SLIDE BACK button in the bottom left corner of the screen to relearn the content. Otherwise, you can click Ok to start ' +
          'learning about the different types of threats.',
    okActions: [
      () => navigateSlide(Slide2CyberThreats),
    ],
  },
];
