import { toggleElements, createDialogueBox, navigateSlide } from '../../../assets/js/helpers';
import Slide2 from '../slides/Slide2';

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
          'like me, you need to make backups either online or on an external hard drive.',
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
          'computer entirely which deletes everything on it. Make sure to create backups of all your important ' +
          'files and folders if you decide to go with this route.',
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

export const virusDialogue = [
  {
    text: 'ByteBuster the Virus has the ability to corrupt your files and steal your information! ' +
          'Always keep your antivirus up to date, and don\'t download files from sketchy ' +
          'websites or emails.',
    action: () => toggleElements(['virus-speaker'], false).then(
            () => toggleElements(['robot', 'virus']))
  },
  {
    text: 'Ah, greetings, dear user! Welcome to the digital underworld where mischief reigns and viruses like myself roam free. ' +
          'Allow me to shed some light on our nefarious nature.',
    action: () => toggleElements(['robot', 'code', 'arrowRight', 'file', 'virus-play'], false).then(
            () => toggleElements(['virus-speaker', 'virus']))
  },
  {
    text: 'You see, viruses such as myself are crafty bits of code that attach themselves to innocent programs or files. Once ' +
          'those files are opened, off we go, spreading our infectious code far and wide!',
    action: () => toggleElements(['virus', 'windowsProtection'], false).then(
            () => toggleElements(['code', 'arrowRight', 'file', 'virus-play']))
  },
  {
    text: 'It all starts with the human touch. We rely on you wonderful humans to unknowingly execute our infected files. ' +
          'Whether it\'s through email attachments, shared files, or even those convenient USB drives you carry around, we\'ll find ' +
          'a way to hitch a ride!',
    action: () => toggleElements(['code', 'arrowRight', 'file', 'pcDamaged'], false).then(
            () => toggleElements(['windowsProtection']))
  },
  {
    text: 'Once that’s done, the fun begins! Viruses can wreak all sorts of havoc like corrupting your files and stealing' +
          'your precious data or simply causing chaos in your system, we viruses are quite the digital troublemakers!',
    action: () => toggleElements(['windowsProtection', 'popups', 'doubleArrow', 'spyware'], false).then(
            () => toggleElements(['pcDamaged']))
  },
  {
    text: 'But beware, viruses are not always as obvious as a crashing computer or strange pop-up messages. ' +
          'Sometimes, we lurk quietly in the background, siphoning off your data or spying on your activities without you even noticing!',
    action: () => toggleElements(['pcDamaged', 'antivirusFactory', 'arrowDown', 'kaspersky'], false).then(
            () => toggleElements(['popups', 'doubleArrow', 'spyware']))
  },
  {
    text: 'To thwart us viruses, you\'ll want to arm yourself with updated antivirus software. ' +
          'Stay vigilant with those email attachments, and only download files from trusted sources. ' +
          'With a bit of caution and the right tools, you can keep us viruses at bay!',
    action: () => toggleElements(['popups', 'doubleArrow', 'spyware'], false).then(
            () => toggleElements(['antivirusFactory', 'arrowDown' ,'kaspersky'])),
    okActions: [
      () => toggleElements(['virus-play', 'antivirusFactory', 'arrowDown' ,'kaspersky', 'virus-speaker'], false, true),
      () => createDialogueBox(virusDialogue2),
    ],
  },
];

export const virusDialogue2 = [
  {
    text: 'Hey I\'m back! ByteBuster the virus is still infecting your computer, to get rid of him you\'ll have to run '+
          'the antivirus or reset your computer.',
    action: () => toggleElements(['antivirus-option'], false).then(
            () => toggleElements(['robot', 'virus'])),
  },
  {
    text: 'If your system is infected with a virus but is still functioning reasonably well, ' +
          'running antivirus software is usually the first step you should take. It\'s less disruptive ' +
          'and may effectively remove the malware.',
    action: () => toggleElements(['nuclear-option'], false).then(
            () => toggleElements(['antivirus-option'])),
  },
  {
    text: 'However, if your system is heavily compromised, experiencing severe performance issues, or ' +
          'if you suspect that the malware is deeply embedded in the system, resetting your PC to its ' +
          'original state might be the more reliable option to ensure complete removal of the malware. ',
    action: () => toggleElements(['nuclear-option']),
          
  },
  {
    text: 'Just remember to back up all of your important files if you decide to proceed with the reset option!',
  },
]

export const ripVirus = [
  {
    text: 'RIP ByteBuster 😔. Remember, in the digital realm, it\'s better to be safe than sorry! ' +
          'So keep your defenses up and your guard strong, for you never know when a mischievous virus ' +
          'might come knocking at your digital door!',
    okActions: [
      () => setTimeout(() => navigateSlide(Slide2), 650)
    ],
  },
]
