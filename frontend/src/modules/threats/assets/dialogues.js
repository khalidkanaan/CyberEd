import { toggleElements, createDialogueBox, navigateSlide } from '../../../assets/js/helpers';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import Slide5 from '../slides/Slide5';

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
    okActions: [
      () => toggleElements(['robot'], false, true),
      () => setTimeout(() => navigateSlide(Slide3), 650)
    ]
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

export const wormsDialogue = [
  {
    text: 'NetNova the worm has the overpowered ability of self replication and infecting networks. He can be a bit arrogant, he\'ll teach about his abilities' + 
          ' but I doubt he will let you in on how to deal with him.',
    action: () => toggleElements(['wormSpeaker'], false).then(
            () => toggleElements(['robot', 'worm'])),
  },
  {
    text: 'NetNova: Greetings user! Welcome to the world of worms, where networks are our playground and chaos is our game. Allow me to illuminate the ways of my kind.',
    action: () => toggleElements(['robot', 'wormSpreading', 'worm-play'], false).then(
            () => toggleElements(['wormSpeaker', 'worm']))
  },
  {
    text: 'A worm is a clever bit of malware that doesn\'t need a host file to spread. We aren’t like ' +
          'those basic viruses that attach themselves to files; instead, we roam the digital highways, ' +
          'replicating ourselves as we go.',
    action: () => toggleElements(['worm', 'plague'], false).then(
            () => toggleElements(['wormSpreading', 'worm-play']))
  },
  {
    text: 'Unlike viruses, which rely on human interaction to spread, worms are entirely autonomous. We can exploit vulnerabilities ' +
          'in networks and systems to spread ourselves far and wide at a very fast pace.',
    action: () => toggleElements(['wormSpreading', 'tenticle1', 'tenticle2', 'tenticle3'], false).then(
            () => toggleElements(['plague']))
  },
  {
    text: 'Worms spread like wildfire compared to other malwares. Once unleashed, each one of my tentacles can go on to ' +
          'infect countless systems in a matter of minutes, creating a digital epidemic that\'s hard to contain.',
    action: () => toggleElements(['burnPc'], false).then(
            () => toggleElements(['plague', 'tenticle2', 'tenticle3', 'tenticle1']))
  },
  {
    text: 'And here lies the challenge: our ability to spread rapidly and autonomously makes us incredibly difficult to detect and destroy. ' +
          'By the time you realize we\'re in your system, we may have already caused significant damage.',
    action: () => toggleElements(['tenticle1', 'tenticle2', 'tenticle3', 'plague', 'ddos'], false).then(
            () => toggleElements(['burnPc']))
  },
  {
    text: 'On top of that, we can also trigger a DDoS attack. DDoS stands Distributed Denial of Service ' +
          'and involves overwhelming a server with a flood of network traffic like visiting a ' +
          'website with countless fake users in order deny access to legitimate users like yourself.',
    action: () => toggleElements(['burnPc'], false).then(
            () => toggleElements(['ddos']))
  },
  {
    text: 'Traditional antivirus softwares may struggle to keep up with newly emerging worm variants, we evolve much ' +
          'too quickly for the antivirus to keep up. That\'s where firewalls and Network-based Intrusion Detection ' +
          'and Prevention Systems (IDS/IPS) come into play.',
    action: () => toggleElements(['ddos'], false).then(
            () => toggleElements(['noKaspersky', 'firewall']))
  },
  {
    text: 'I won\'t explain to you how to get rid of me, I\'ll let that silly robot handle the rest of the explaination.',
    okActions: [
      () => toggleElements(['worm-play', 'noKaspersky', 'firewall', 'wormSpeaker'], false, true),
      () => createDialogueBox(wormsDialogue2),
    ],
  },
]

export const wormsDialogue2 = [
  {
    text: 'Alright, thanks NetNova I\'ll take it from here. As NetNova mentioned, to counter worms you\'ll need a Firewall. Firewalls act as ' +
          'digital barriers, monitoring and controlling incoming and outgoing network traffic to prevent unauthorized access and ' +
          'stop malicious activity in its tracks.',
    action: () => toggleElements(['traffic'], false).then(
            () => toggleElements(['robot', 'firewall'])),
  },
  {
    text: 'Traffic refers to the data that travels across a network, like information being sent or received between ' +
          'devices like computers or servers.',
    action: () => toggleElements(['firewall', 'carTraffic'], false).then(
            () => toggleElements(['traffic'])),
  },
  {
    text: 'You can thing of traffic kind of like the flow of cars on in an intersection, just like cars move on a road, ' +
          'data also moves accross a network. Incoming traffic is data coming into your network, and outgoing traffic ' +
          'is data leaving your network.',
    action: () => toggleElements(['traffic'], false).then(
            () => toggleElements(['carTraffic'])),
  },
  {
    text: 'A firewall acts much like the gatekeeper of this fortress, standing guard at the entrance to your network. It inspects all incoming and outgoing traffic, analyzing ' +
          'each packet of data to determine whether it should be allowed into the network or denied entry.',
    action: () => toggleElements(['carTraffic'], false).then(
            () => toggleElements(['firewallFilter'])),
  },
  {
    text: 'It\'s basically a filter that sifts through the digital traffic, letting in trusted data while blocking ' +
          'anything suspicious or malicious from gaining access to your precious digital kingdom.',
    action: () => toggleElements(['firewallFilter'])
  },
  {
    text: 'Firewalls can be configured to enforce specific security conditions, such as blocking certain types of ' +
          'traffic based on their source of origin or restricting access to certain websites or services. ' +
          'these conditions are known as firewall rules.',
    action: () => toggleElements(['firewallFilter'], false).then(
            () => toggleElements(['firewallRules'])),
  },
  {
    text: 'Finally there\'s also Intrusion detection systems (IDS) and intrusion prevention systems (IPS) which are like radars, '+
          'constantly scanning your network for suspicious behavior and known attack patterns. They can identify and block ' +
          'worms before they have a chance to wreak havoc.',
    action: () => toggleElements(['firewallRules', 'firewall-quiz'], false).then(
            () => toggleElements(['radar'])),
  },
  {
    text: 'Now then, ready or not. Let\'s quiz you on some of the information you\'ve just learnt.',
    action: () => toggleElements(['radar'], false).then(
            () => toggleElements(['firewall-quiz'])),
  },
];

export const wormsEnd = [
  {
    text: 'Good job! If you did\'t do we well on the quiz or if you\'d like to revisit the information you just learnt about Firewalls and IDS/IPS systems then you can click ' +
          'the SLIDE BACK button in the bottom left corner of the screen to relearn the content. Otherwise, you can click Ok to start the next exercise',
    okActions: [
      () => navigateSlide(Slide5),
    ],
  },
];
