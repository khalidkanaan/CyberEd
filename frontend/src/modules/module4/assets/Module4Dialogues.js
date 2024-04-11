import { toggleElements, navigateSlide } from '../../../assets/js/helpers';
import Slide3 from '../slides/Module4Slide3'
import Slide2 from '../slides/Module4Slide2'
import Slide4 from '../slides/Module4Slide4'
import Slide5 from '../slides/Module4Slide5'



const robotId = ['robot'];

const malwaresIds = [
  'antivirus-img-div', 
  'ScanningGif', 
  'Watch',  
  'malware-img-div', 
  'Shoot',  
  'ScanningGif',  
  'ScanningGif2',  
  'Wake',
  'Stance1',
  'Stance2',
  'Stance3',
  'BackShot',
  

];

const all = [...robotId, ...malwaresIds];

export const intro = [
  {
    text: 'Welcome operative. I am Sentinel-4 from Device Protection Services.  '+ 'I will be your instructor on piloting the Antivirus Mech - AVIE.          '+ 'AVIE is the City\'s  Eyes, Sword and Shield. Our primary defense mech to keep cybercity safe' ,    action: () => toggleElements(all),
    ids: all,
  },
  {
    text: 'Just like a knight needs armor and a wizard needs spells, we need AVIE to protect our cyber city. You’ll learn how to spot those tricky bugs, trap them, and keep our files and friends safe online.',
    action: () => console.log("the second dialogue"),
  },
  {
    text: 'But every hero’s journey has its challenges. You’ll face tests like scanning for sneaky viruses and defending against invisible attacks. But don’t worry, I’ll be with you every step of the way, teaching you how to use AVIE’s powers!',
    action: () => toggleElements(malwaresIds),
    ids: malwaresIds,
  },
  {
    text: 'Are you ready to dive into this adventure, learn the secrets of being a Cyber Guardian, and help protect our online world? Fantastic! Let’s get started on our Cybersecurity Quest and make the internet a safer place for everyone!',
    okActions: [
      () => toggleElements(all, false, true),
      () => navigateSlide(Slide2)
    ],
  },
];

export const dialogues2 = [
  { 
    text: 'Alright, young Cyber Guardian! See that folder on the screen? Inside, sneaky cyber-bugs might be hiding, waiting to cause trouble in our cyber city. Let’s check it out together!' 
  },
  { 
    text: 'Move AVIE over to the folder and hold down [E] to start the scan. It’s like using a superhero’s x-ray vision to see through the folder and find any hidden threats!' 
  },
  { 
    text: 'Uh-oh! Looks like we’ve found Randy, the ransomware virus. He’s a tricky one, locking away our files and asking for coins to give them back. Not on our watch! Let’s get ready to trap him.'
  },
  {
  text: 'It’s time to use AVIE’s special quarantine power. Press [Q] to send Randy into the quarantine zone, keeping our files safe and sound. Remember, being quick and precise is the key to stopping these cyber-threats before they do harm!',
  },
  {
    text: 'That took care of him!',
    okActions: () => navigateSlide(Slide3)
  },
];

export const dialogues3 = [
  { 
    text: 'Great job on quarantining Randy! But wait, there’s more adventure ahead. Look at the center of the screen. See that precious digital asset? It’s the treasure of our digital city, and we need to protect it at all costs.' 
  },
  { 
    text: 'Notice that line coming in from the left? That’s a network connection. But beware, not all connections are friendly. Sometimes, they try to harm us and our digital assets. We need to be vigilant!' 
  },
  { 
    text: 'Here’s where your next superpower comes in. Ready to activate AVIE’s Network Firewall Shield? When you see a bad connection, press [W] to raise the firewall and block the network attack. It’s like summoning a magic barrier to protect our treasure!'
  },
  { 
    text: "Guarding Cyber City is a never ending battle. But AVIE's shields of defenses keeps our city safe. Stay alert, and ready your Firewall Shield with [W] at the first sign of network threats!",
    okActions: () => navigateSlide(Slide4)  
  },
];


export const dialogues4 = [
  {
    text: "Heads up, Cyber Guardian! As we venture further, we have spotted another mysterious folder. It's time to put AVIE’s scanning to the test again."
  },
  {
    text: 'Hover over the folder and press [E] to scan. Remember, we must always be on patrol to protect Cyber City against hidden threats.'
  },
  {
    text: "Wait, what’s this? A new virus has been detected, and it's unlike anything AVIE has faced before! Our current tools seem to have no effect. It looks like AVIE’s quarantine [Q] does not work on this cyber-threat."
  },
  {
    text: "Not to worry, young enforcer! In the world of cybersecurity, staying ahead means constant learning and upgrading. It's time to upgrade AVIE to the latest antivirus version!"
  },
  {
    text: 'Fantastic! With the upgrade complete, AVIE is now stronger and equipped with the latest in cyber defense technology. Ready to try again? Use the  quarantine cannone with [Q] to safely contain this new threat.'
  },
  {
    text: 'Good Job! The virus has been quarantined, proving once again that with the right tools and determination, no threat is too big for a Cyber Guardian. Remember, keeping Cyber City safe is an ongoing mission. Regular updates and upgrades are essential to stay prepared for whatever challenges come our way.',
  },
  {
    text: 'Becareful...We never know when our city will come under attack therefore we must always be Ready...',
    okActions: () => navigateSlide(Slide5)
  },
];


export const dialogues5 = [
  { 
    text: 'Clear all the Folders in this sector ' 
  },
  { 
    text: 'Notice that line coming in from the left? That’s a data connection. But beware, not all connections are friendly. Sometimes, they turn into lasers, trying to harm our digital asset. We need to be vigilant!' 
  },
  { 
    text: 'Here’s where your next superpower comes in. Ready to activate AVIE’s mighty Firewall Shield? When you see the connection turning into a laser, press [W] to raise the firewall and block the 3 network attacks. It’s like summoning a magic barrier to protect our treasure! Block'
  },
  { 
    text: 'Guardianship over Cyber City is an honor, young enforcer. Using AVIE’s array of defenses judiciously ensures our city remains a beacon of digital peace and security. Stay alert, and ready your Firewall Shield with [W] at the first sign of network threats!',
    okActions: () => navigateSlide(Slide5)  
  },
];

