import { toggleElements, navigateSlide } from '../../../assets/js/helpers';
import Slide3 from '../slides/Slide3'
import Slide2 from '../slides/Slide2'
import Slide4 from '../slides/Slide4'

const robotId = ['robot'];
const malwaresIds = ['malware-img-div', 'virus', 'ransomware', 'trojan', 'worm', 'antivirus-img-div', 'kaspersky', 'shield'];
const villainId = ['villain-img-div', 'villain'];
const passwordId = ['password-img-div', 'password'];
const pwdManager1Id = ['pwdmanager1-img-div', 'pwdmanager1']; // Add this line
const pwdManager2Id = ['pwdmanager2-img-div', 'pwdmanager2']; // Add this line
const twoFAId = ['twoFA']; // Add this line
const lockId = ['lock']; // Add this line
const robotChillId = []
const all = [...robotId, ...malwaresIds, ...villainId, ...passwordId, ...pwdManager1Id, ...pwdManager2Id, ...twoFAId, ...lockId]; // Include the new IDs here

export const intro = [
  {
    text: 'Greetings, cyber apprentice! Welcome to Module 2: Passwords and Authentication.' +
    'In this module, we will learn about the importance of strong, unique passwords, ' +
    'how to use password managers, and what two-factor authentication is.',
    action: () => toggleElements(robotId),
    ids: robotId,
  },
  {
    text:
    ' Creating a powerful password is super important to keep your online accounts safe from people who shouldn\'t be there, like this evil Haunter!' +
    ' Make sure each of your passwords is different for every account so that if one password is ever guessed by the evil Haunter it won\'t put all your other accounts at risk.',
    action: () => toggleElements(villainId),
    ids: villainId,
  },
  {
    text:
    'Avoid using easily guessable information such as birthdays, names, or common words in your passwords. ' +
    ' Go for a combination of uppercase and lowercase letters, numbers, and symbols to improve security.',
    action: () => toggleElements(passwordId),
    ids: passwordId,
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
  { 
    text: 'Password Managers: Remembering all those strong, unique passwords can be tough. That is where password managers come in. They are like a secure vault for all your passwords!',
    action: () => toggleElements([...robotId, ...pwdManager1Id]),
    ids: [...robotId, ...pwdManager1Id],
  },
  { 
    text: 'Password managers not only store your passwords securely but also generate complex and unique passwords for you! ' +
          'With the help of a password manager, you only need to remember one master password to access your secret vault.',
    action: () =>  toggleElements(pwdManager1Id, false).then(() => toggleElements(pwdManager2Id)),
    ids: pwdManager2Id,
  },
  { 
    text: 'It\'s super important to choose a trustworthy password manager talk with a grown up to find a safe password manager for you.',
    okActions: [
      () => toggleElements(all, false, true),
      () => navigateSlide(Slide3)
    ],
  },
];

export const dialogues3 = [
  { 
    text: 'Two-factor authentication or 2FA is like having a second lock on your door. Even if someone guesses your password, they will still need your second factor to access your account.',
    action: () => toggleElements(['robot','lock']),
  },
  { 
    text: 'Some examples of 2FA include receiving a code on your phone, using biometric data like fingerprints, or employing hardware tokens for an added layer of security.',
    action: () => toggleElements(['twoFA']),
  },
  { 
    text: 'Always activate 2FA whenever possible, as it really enhances the security of your accounts by requiring multiple forms of verification.',
    okActions: [
      () => navigateSlide(Slide4)
    ],
  },
];


export const dialogues4 = [
  { 
    text: 'Let\'s start our adventure to create a strong password. See this weak password? The naughty Haunter likes these because they are easy to guess! Let\'s make it stronger to keep Haunter away.',
    action: () => toggleElements(['updateButton'], false).then(() => toggleElements(['robot','lock'])),
    
  },
  { 
    text: 'This password is too easy for Haunter! Let\'s make it better by adding some uppercase letters. Hit the button to see the change. Adding uppercase letters is like using magical shields that protect your password!',
    action: () => toggleElements(['twoFA', 'updateButton']),
  },
  { 
    text: 'Great job! Uppercase letters have made your password tougher. But Haunter is still trying! Let\'s confuse him by adding some symbols. Hit the button to see the change.',
    action: () => toggleElements(['robot']),
  },
  { 
    text: 'Awesome! Symbols are like secret codes that add extra protection. But we\'re not done yet! Let\'s make the password longer. A strong password is usually 12 characters long, but going for 14 or more is like building a big wall!',
    action: () => toggleElements(['robot']),
  },
  { 
    text: 'Fantastic! A longer password is like a maze that Haunter can\'t find his way through. You\'ve just made a strong password that Haunter can\'t guess! Remember, using different passwords for each of your accounts is like having a different key for every door.',
    okActions: [
      () => console.log('Wesh Khoya labass?')
    ],
  },
];