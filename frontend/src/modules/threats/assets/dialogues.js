import { toggleElements, navigateSlide } from '../../../assets/js/helpers';
import Slide3 from '../slides/Slide3'
import Slide2 from '../slides/Slide2'


const robotId = ['robot'];
const malwaresIds = ['malware-img-div', 'virus', 'ransomware', 'trojan', 'worm', 'antivirus-img-div', 'kaspersky', 'shield'];
const all = [...robotId, ...malwaresIds];
export const intro = [
  {
    text: 'Hey there, young cyber defenders! Welcome to the Cybersecurity Quest, ' +
    'where you become the hero of the digital realm! I\'m your trusty Character Guide, ' +
    'and I\'m here to help you navigate through the world of cyber threats.',
    action: () => toggleElements(robotId),
    ids: robotId,
  },
  {
    text: 'Our digital world is full of challenges, and you\'re about to embark on a journey ' +
    'to become a Cyber Guardian. Your mission? To protect your virtual kingdom from the ' +
    'notorious malware villains that threaten its safety.',
    action: () => console.log("the second dialogue"),
  },
  {
    text: 'But fear not, you won\'t be alone. Along the way, you\'ll meet some unique characters ' +
    '– both friends and foes – each representing a different type of malware. By understanding ' +
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

export const dialogues2 = [
  { text: 'Slide 2 Dialogue 1' },
  { text: 'Slide 2 Dialogue 2' },
  { text: 'Slide 2 Dialogue 3',
    okActions: () => navigateSlide(Slide3)
  },
];

export const dialogues3 = [
  { text: 'Slide 3 Dialogue 1' },
  { text: 'Slide 3 Dialogue 2' },
  { text: 'Slide 3 Dialogue 3'}
];
