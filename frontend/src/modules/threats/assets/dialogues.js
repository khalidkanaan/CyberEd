import { toggleElements, navigateSlide, createDialogueBox } from '../../../assets/js/helpers';
import Slide2 from '../slides/Slide2'


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

const randySpeaker = ['ransomware-speaker'];
const ransom = ['give-coin-button', 'bank', 'coin-counter']
export const dialogues3 = [
  { text: 'Greetings, unsuspecting user! I am Randy the Ransomware, your important files are ' + 
          'now under my control! Don\'t believe me? See if you can catch that folder over there! 👆',
    action: () => toggleElements(randySpeaker),
  },
  { text: 'Looks like I\'ve got something valuable of yours. You want your files back? '+
          'You\'ll have to pay up with coins!',
    okActions: [
      () => toggleElements(randySpeaker, false, true),
      () => toggleElements(ransom),
    ],
  },
];


const randy = ['ransomware'];
const randy2 = ['ransomware-play'];
const robot = ['robot'];
const rr = [...randy, ...robot];
const fileContainer = ['file-container']
const rc = [...randy2, ...fileContainer];
export const dialogues2 = [
  {   
    text: 'Randy the Ransomware is here to encrypt your files and demand a ransom! ' +
    'Always keep backups of your important data, and don\'t fall for Randy\'s tricks. ' +
    'Backup, Backup, Backup!',
    action: () => toggleElements(randy),
    okActions: [
      () => toggleElements(rr, false, true),
      () => toggleElements(rc),
      () => createDialogueBox(dialogues3)
    ],
  }
];

export const randyThanks = [
  {
    text: 'Ah, splendid! You fell for my tricks and delivered those shiny coins. ' +
          'Consider it a thank-you gift for supporting my digital endeavors! But beware, ' +
          'next time, your files might not be so lucky!',
    action: () => toggleElements(randySpeaker),
  },
  {
    text: 'Well, since I still have access to your computer, I could help myself to more of ' +
          'your files, but I\'m starting to feel bad for you today. Instead, how about I teach you ' +
          'a valuable lesson in data protection?',
    action: () => toggleElements(['google-drive-empty'], false),
  },
  {
    text: 'Listen closely, dear user. To shield your precious files from nefarious characters ' +
          'like me, you need to make backups either online or on a separate drive.',
    action: () => toggleElements(['google-drive-empty']),
  },
  {
    text: 'It\'s as easy as a drag and drop – try it! Just toss that important folder into the ' +
          'Google Drive window to upload.',
    okActions: [
      () => toggleElements(randySpeaker, false, true),
    ],
  }
];

export const randyCongrats = [
  {
    text: 'Excellent! Now that you have uploaded a backup of your folder, you\'re one step ' +
          'closer to securing your valuable data. Only one problem remains and it\'s that ' +
          'I\'m still here!',
    action: () => toggleElements(['antivirus-option'], false).then(() => 
                  toggleElements(['ransomware-speaker', 'ransomware'])),
  },
  {
    text: 'Now, to get rid of me, you\'ve got a couple of options. For your first option, you can unleash ' +
          'the power of antivirus software. Let it hunt me down and erase my existence from ' +
          'your system. Or... 😣',
    action: () => toggleElements(['google-drive-upload', 'nuclear-option'], false).then(() => 
                  toggleElements(['antivirus-option'])),
  },
  {
    text: 'Or.. for a more decisive move 😰, you can opt for the NUCLEAR option and reset your ' +
          'computer entirely which deletes everything on it. The choice is yours my unsuspecting friend!',
    action: () => toggleElements(['nuclear-option']),
    okActions: [
      () => toggleElements(randySpeaker, false, true),
    ],
  },
];

export const ripRandy = [
  { 
    text: 'R.I.P Randy, you will not be forgotten!',
    action: () => toggleElements(['robot']),
    okActions: () => toggleElements(['robot'], false, true),
  }
];