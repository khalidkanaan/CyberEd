import { toggleElements, createDialogueBox, navigateSlide } from '../../../assets/js/helpers';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';
import Slide4 from '../slides/Slide4';
import Slide5 from '../slides/Slide5';
import Slide6 from '../slides/Slide6';

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
      () => setTimeout(() => navigateSlide(Slide4), 650)
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

export const trojanDialogue = [
  {
    text: 'In the shadowy corners of the digital realm, DeceptiCode, a cunning Trojan, is addressing the user directly.',
    action: () => toggleElements(['trojanSpeaker'], false).then(
            () => toggleElements(['robot', 'trojanGif'])),
  },
  {
    text: 'Greetings, dear user! Welcome to the realm of Trojan horses, where deception is our weapon and trickery ' +
          'our art. Allow me to enlighten you about our craft.',
    action: () => toggleElements(['robot', 'trojanImg'], false).then(
            () => toggleElements(['trojanSpeaker', 'trojanGif'])),
  },
  {
    text: 'A Trojan, my dear user, is a master of disguise among malware. We masquerade as innocent software, ' +
          'waiting for the opportune moment to strike.',
    action: () => toggleElements(['trojanGif', 'trojanSoldiers'], false).then(
            () => toggleElements(['trojanImg'])),
  },
  {
    text: 'Like the cunning wooden horse used to sneak soldiers into Troy, Trojans disguise themselves as legitimate software or' +
          'files to trick users into installing them. You see, we often masquerade as harmless or ' +
          'desirable programs, such as games, utilities, or software updates.',
    action: () => toggleElements(['trojanImg', 'wolfMad'], false).then(
            () => toggleElements(['trojanSoldiers'])),
  },
  {
    text: 'Once invited in, we silently infiltrate your system, ready to carry out our '+
          'malicious deeds when the time is right.',
    action: () => toggleElements(['trojanSoldiers', 'wolfInSheep'], false).then(
            () => toggleElements(['wolfMad'])),
  },
  {
    text: 'But here\'s the real twist: unlike viruses and worms, we Trojans don\'t replicate ourselves or spread autonomously. '+
          'Instead, we rely on social engineering tactics to trick users into willingly installing us usually by opening an infected file '+
          'or clicking on a malicious link. It\'s like inviting a wolf in sheep\'s clothing into your digital home!',
    action: () => toggleElements(['wolfMad', 'popups'], false).then(
            () => toggleElements(['wolfInSheep'])),
  },
  {
    text: 'Social engineering is the art of manipulation in the digital realm! It\'s like a digital con game, where '+
          'we exploit human psychology to gain access to your system. Phishing, for instance, is a common tactic where we send '+
          'deceptive emails or create fake websites that appear legitimate, tricking users into revealing sensitive information or downloading malicious software.',
    action: () => toggleElements(['wolfInSheep', 'lightLaughing'], false).then(
            () => toggleElements(['popups'])),
  },
  {
    text: 'And here\'s the real kicker: Trojans can be challenging to detect because they often appear harmless or legitimate to antivirus software. '+
          'Unlike viruses, which can be identified through signature-based detection methods, Trojans may require more advanced detection techniques.',
    action: () => toggleElements(['popups', 'trojanEnemy'], false).then(
            () => toggleElements(['lightLaughing'])),
  },
  {
    text: 'Behavior analysis is one such technique, where antivirus software monitors the behavior of programs and looks for '+
          'suspicious activities that could indicate malicious intent. Heuristic scanning, on the other hand, involves analyzing the ' +
          'code of a program for characteristics commonly associated with malware, even if no specific virus signature is present.',
    action: () => toggleElements(['lightLaughing', 'robot', 'bigRobot'], false).then(
            () => toggleElements(['trojanSpeaker', 'trojanEnemy'])),
  },
  {
    text: 'So, dear user, stay wary of our deceptive ways, for in the digital jungle, the Trojan lurks, waiting to strike when least '+
          'expected. Arm yourself with knowledge and caution, for only then can you outsmart even the craftiest of Trojans like myself!',
    action: () => toggleElements(['trojanEnemy', 'trojanSpeaker'], false).then(
            () => toggleElements(['robot', 'bigRobot'])),
    okActions: [
      () => toggleElements(['robot', 'bigRobot'], false, true),
      () => setTimeout(() => navigateSlide(Slide6), 650)
    ],
  },
];


export const mitmDialogue = [
  {
    text: 'Your friendly robot guide is back and here to talk to you about the very fascinating topic of active attacks specifically the Man-in-the-Middle (MitM) attack!',
    action: () => toggleElements(['malwares', 'sus1second'], false).then(
            () => toggleElements(['robot', 'sus'])),
  },
  {
    text: 'While other malwares, such as viruses, worms, and Trojans, passively infect systems and carry out malicious activities in the background of your system, ' +
          'Man-in-the-Middle attacks involve hackers that actively intercept and manipulate the communication between two parties.',
          action: () => toggleElements(['sus', 'mitm1'], false).then(
                  () => toggleElements(['malwares', 'sus1second'])),
  },
  {
    text: 'Imagine you\'re sending a secret message to your friend, but instead of your friend receiving it, a sneaky cyber attacker intercepts it in the middle! ' +
          'That\'s why it\'s called a Man-in-the-Middle attack.',
          action: () => toggleElements(['malwares', 'sus1second'], false).then(
                  () => toggleElements(['mitm1'])),
  },
  {
    text: 'These cyber attackers sneak into the communication flow between you and your friend, like a digital spy! ' +
          'They can achieve this by exploiting weaknesses in the network to slip into the system undetected. Once they\'re ' +
          'in, they can eavesdrop on your messages or even tamper with them!',
          action: () => toggleElements(['mitm1', 'hackerFriend'], false).then(
                  () => toggleElements(['mitm3'])),
  },
  {
    text: 'But fret not, we can easily defend ourselves against these digital bandit! ' +
          'Our first point of defense against Man-in-the-Middle attacks is the use of encryption to scramble our messages so only ' +
          'the intended recipient of your message can decode and read them. It\'s like writing in invisible ink!',
          action: () => toggleElements(['mitm3', 'emailEncrypted', 'encryption', 'decryption'], false).then(
                  () => toggleElements(['hackerFriend'])),
  },
  {
    text: 'When a Man-in-the-Middle attacker tries to listen in on an encyrpted converstion, the only thing they\'ll be able to see are random letters and symbols ' +
          'called cyphertext. However, without encryption the attacker will be able to plainly see your messages and read them. Which is why unencrypted text is commonly  ' +
          'referred to as plaintext.',
          action: () => toggleElements(['mitm3', 'Phones', 'mitm2', 'hackerFriend'], false).then(
                  () => toggleElements(['robot', 'emailEncrypted', 'encryption', 'decryption'])),
  },
  {
    text: 'Try it out! In this example you and your friend are having a conversation over social media. The evil Man-in-the-Middle attacker is listening in on the conversation',
    action: () => toggleElements(['emailEncrypted', 'encryption', 'decryption'], false).then(
            () => toggleElements(['robot'], false, true).then(
            () => toggleElements(['Phones', 'mitm2', 'mitmText']))),
  },
  {
    text: 'As you can see, the hacker is able to read the plaintext messages exactly as they were written. Try sending some messages yourself, choose whichever phone you like ' +
          'and send a message to your friend. You can also use your friend\'s phone to reply back if you want.',
          action: () => toggleElements(['encryptDecrypt'], false)
  },
  {
    text: 'Now then, let\'s go ahead and add encryption to our conversation. Click the encryption button to enable and disable encryption to see the difference in text.',
    action: () => toggleElements(['encryptDecrypt']),
  }
]

export const mitmDialogue2 = [
  {
    text: 'As you can see, when encryption is enabled, the Man-in-the-Middle attacker will not be able to read any of the messages.',
    action: () => toggleElements(['robot']),
  },
  {
    text: 'Thanks to encryption, we can outsmart those cyber crooks and keep our digital conversations safe and sound! ' +
          'Remember, knowledge is power, so stay curious and keep exploring the exciting world of cybersecurity!',
    okActions: [
      () => {
        window.location.href = '/';
      } 
    ],
  },
];
