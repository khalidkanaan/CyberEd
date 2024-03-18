import { toggleElements, navigateSlide, setOpacity } from '../../../../assets/js/helpers';
import Slide2 from '../../slides/Slide2'
import Slide4 from '../../slides/Slide4'
import Slide5 from '../../slides/Slide5'

export const intro = [
  {
    text: 'Welcome to Email Operations Central, the heartbeat of Cybercity\'s communications. ',
    action: () => toggleElements(['outside','face','mailman'], 1)
  },
  {
    text: 'Here, we oversee all email traffic, ensuring every message is safely delivered and received. ',
  },
 
  {
    text: 'Let\'s dive into the essentials of email safety and understand how this hub keeps the city connected and protected.',
    action: ()=> toggleElements(['mailmanSide','pkgs','sorting-img-div'], false).then(() =>
    toggleElements(['outside','face','mailman']))
  },
  
  {
    text: 'In this nexus of communication, every email is crucial. ',
    action: ()=>toggleElements(['mailmanFront'],false).then(() => 
    toggleElements(['mailman','outside'], false).then(()=>
    toggleElements(['pkgs'],1)).then(() => 
    toggleElements(['mailmanSide', 'sorting-img-div']))),

  },
  {
    text:'Just like the city relies on efficient roads and signals, Cybercity depends on us for smooth and secure email operations. ' +
    'Your vigilance and understanding of email safety are vital. ',
    action: ()=>toggleElements(['mailmanFront'],false).then(() => 
    toggleElements(['pkgs'],1)).then(() => 
    toggleElements(['mailmanSide', 'sorting-img-div'])),

  },
  
  {
    text: 'All right, let\'s get straight to work, partner. There\'s a lot to cover, and your role here is crucial. ' ,
    action: () => toggleElements(['mailmanSide', 'sorting-img-div'],false,0).then(() => 
    toggleElements(['mailmanFront'])),
  },
  {
    text: 'Follow me, and I\'ll show you the ropes of managing and protecting our city\'s lifeline – email communications. ',
    action: () => toggleElements(['mailmanSide', 'sorting-img-div'],false,0).then(() => 
    toggleElements(['mailmanFront'])),
    okActions: [
      () => navigateSlide(Slide2)
    ],
  },
];

export const DigitalIdentity = [
  { 
    text: 'Welcome to the core of Email Operations Central, where securing digital identities and crafting trusted ' ,
    action: () => toggleElements(['mailman'],false,false,1).then(() => 
    toggleElements(['private', 'door', 'face', 'NS'],true,false,300))
  },
  { 
    text: 'Each email account here is like a fortified vault, protected by robust passwords and encryption.',
    action: () => toggleElements(['mailman'],false,false,1).then(() => 
    toggleElements(['private', 'door', 'face', 'NS'],true,false,300))
  },
  { 
    text: 'Emails are like special name tags that say a lot about who has them. They should look nice, be easy to remember, and help others identify you.',
    action: () => toggleElements(['NS','example-img-div', 'MS'],false,false,1).then(() => 
    toggleElements(['mailman'],true,false,1)) 
  },
  { 
    text: 'Here are some examples of proper email addresses. Your email address should follow a similar format.',
    action: () => toggleElements(['mailman'],false,false,1).then(() => 
    toggleElements(['example-img-div', 'MS'],true,false,1)) 
  },
  
  { 
    text: 'Only the right password should grant access, we have to make sure these digital safes remain fortified against attackers.' ,
    action: () => toggleElements(['example-img-div', 'MS'],false,false,1).then(() => 
    toggleElements(['mailman'],true,false,1))
  },
  { 
    text: 'Your password is the golden key to access your information. Use the lessons from the previous module to create a steel-strong password!',
    action: () => toggleElements(['mailman','point','key-move-div'],false,false,1).then(() => 
    toggleElements(['mailman'],true,false,1))
  },

  { 
    text: 'Drag this golden key to the locked warehouse door to access your safeguarded inbox!',
    action: () => toggleElements(['mailman', 'key-move-div'],false,false,1).then(() => 
    toggleElements(['point', 'key-move-div'],true,false,1)),
    okActions: [
      () => toggleElements(['face'],false,1)
    ],
  },
];

export const Settings = [
  { 
    text: 'We now have access to your email inbox, but that doesnt mean we have finished securely setting it up.' +
    'There are quite a few settings that we must explore, these settings will ensure that your account is safe and secure from attackers!',
    action: () => toggleElements(['Tfa','Sqs','Rcv'],false).then(() => 
    toggleElements(['inside','face'], 1))
  },
  { 
    text: 'Let\'s take a look at these essential settings, they can be set up when creating your email: Two-factor Authentication, Security Questions, and Recovery Email',
    action: () => setOpacity('inside','0.5').then(
    () => toggleElements(['2fa'],false).then(
    () => toggleElements(['Tfa','Sqs','Rcv'],100)))
  },
  {
    text: 'Two-factor Authentication, or 2FA, serves as an extra layer of defense for your account, much like a dual-lock system on a treasure chest. It\'s designed to ensure that the only person who can access your account is you.',
    action: () => toggleElements(['Tfa','Sqs','Rcv','mailmanFront'],false).then(() =>
    toggleElements(['2fa']))
  },
  {
    text:'Imagine your account as a secure package that needs to be delivered safely to you. Your password is the first security check, similar to the delivery address on the package.',
    action: () => toggleElements(['waits','clip','2fa'],false).then(() => 
    toggleElements(['mailmanFront'],1)) 
  },
  {
    text:' But to make sure the package (or in this case, access to your account) doesn\'t end up in the wrong hands, there\'s an additional step—like the delivery man asking for a signature before handing over your package.', 
    action: () => toggleElements(['mailmanFront','laptop','verifyFormContainer','phone' ],false).then(()=>
    toggleElements(['waits','clip'],500)) 
  },
  {
    text: 'In the digital realm of emails, this "signature" comes in the form of a one-time code sent directly to your phone. When you log in with your password, you\'re also asked to provide this unique code, proving your identity. Enter the code shown above!',
    action: () => toggleElements(['waits','clip'],false).then(() =>
    toggleElements(['laptop','verifyFormContainer','phone'],200))
  },
];

export const Settings2 = [
  {
    text: 'Next up, let\'s take a look Security Questions! These are extra passwords, but instead of numbers and letters, they\'re questions that only you know the answers to.',
    action: () => toggleElements(['Qs-img-div'],false).then(() =>
    toggleElements(['inside2'],0).then(() =>
    setOpacity('inside2', '0.5').then(() =>
    toggleElements(['face','secQ-img-div']))))
  },
  {
    text: 'When you\'re setting them up, you\'ll see a bunch of questions to choose from. Pick the ones that feel special to you, the kind of questions you\'d never forget the answers to.',
    action: () => toggleElements(['secQ-img-div', 'Sxs-img-div'],false).then(() =>
    toggleElements(['Qs-img-div'])) 
  },
  {
    text: 'Make sure these answers are super secret. They should be things that even your closest friends or family can\'t guess. Why? Because these answers are like extra keys to your personal email.  It\'s smart to update your security questions every once in a while to keep things extra secure.', 
    action: () => toggleElements(['Qs-img-div','RcEx', 'Adrc'],false).then(() =>
    toggleElements(['Sxs-img-div']))

  },

  {
    text: 'Finally, recovery emails. Just like when you send a letter and put a return address on the envelope, a recovery email acts as your return address for your digital mailbox. If you ever forget how to get into your email account, this trusted backup—whether it\'s another email of yours or your parent\'s—helps mail the access back to you.',
    action: () => toggleElements(['Sxs-img-div','handme'],false).then(() =>
    toggleElements(['RcEx', 'Adrc'])) 
  },
  {
    text: 'Think of it as your personal postman who knows exactly where to deliver the spare key to your online world. Make sure it\'s someone or another email you trust completely, ensuring you can always get back in, no matter what.',
    action: () => toggleElements(['RcEx', 'Adrc'],false).then(() => 
    toggleElements(['handme'])),
    okActions: [
      () => navigateSlide(Slide4)
    ],
  }

];

export const Phishing = [
  {
    text: 'We\'re almost at the end of the module! We\'ve gone through setting up your account and enabling security settings. Finally, we will explore ways to identify phishing emails.',
    action: () => toggleElements(['inspect', 'mailmanSmile'],false).then(() => 
    toggleElements(['disp','face']))
  },
  {
    text: 'Spotting fake emails is just like mail workers checking packages when they arrive in the warehouse. They look at every box to make sure there\'s nothing bad or tricky inside.',
    action: () => setOpacity('disp','0.5').then(() =>
    toggleElements(['list'],false).then(() =>
    toggleElements(['inspect', 'mailmanSmile'])))
  },
  {
    text: 'In the same way, you need to look closely at each email to keep your online world safe from sneaky intruders. To make sure we can trust an email we must: Trust the sender\'s address, check for suspicious grammar mistakes, Never click a link if you\'re not 100% sure of it, amd Never gve out your personal information   ',
    action: () => toggleElements(['inspect', 'mailmanSmile','ems'],false).then(() => 
    toggleElements(['list']))
  },

  {
    text: 'Let\'s dive into this example email together. We\'ll use the checklist from the last slide to pick apart the issues step by step. This way, we can figure out the signs that tell us it might have been sent by someone trying to trick us.',
    action: () => toggleElements(['list','arrow1'],false).then(() =>
    toggleElements(['ems']))
  },

  {
    text: 'First, let\'s take a look at the sender\'s identity. At first, the sender\'s name might seem okay, but if you take a closer look, something\'s off. They\'ve swapped out letters for symbols, so "NETFLIX" is instead "ŅETFĿIX" ! Always double-check who\'s sending you emails to make sure they\'re the real deal!',
    action: () => toggleElements(['arrow2'],false).then(() =>
    toggleElements(['ems','arrow1']))
  },

  {
    text: 'Phishing emails often come loaded with spelling mistakes, awkward grammar, or phrases that don\'t sound quite right. Think of these errors as clues hinting that the email isn\'t what it claims to be. While this email might seem fine in terms of grammar at first glance, the first sentence uses the wrong version of "your." Keep a sharp eye out for these small mistakes!',
    action: () => toggleElements(['arrow1','arrow3'],false).then(() =>
    toggleElements(['ems','arrow2']))
  },

  {
    text: 'When you find links or attachments in an email that look strange or too good to be true, be cautious. Odd links might have random letters or offer unbelievable deals. Unexpected attachments, especially from people you rarely hear from, are red flags.',
    action: () => toggleElements(['arrow2', 'badLink','arrow4','links'],false).then(() =>
    toggleElements(['ems','arrow3']))
  },
  {
    text: 'The attackers were sneaky with the link here; it closely resembles a real Netflix link. A trick to see where a link leads is to hover over it. DO NOT CLICK THE LINK, but as you hover, you\'ll see the destination of the link appear at the bottom left of your screen. If you\'re still unsure about a link, it\'s best to ask a parent for a second opinion.',
    action: () => toggleElements(['ems','arrow3'],false).then(() =>
    toggleElements(['badLink','links','arrow4']))
  },
  {
    text: 'If something in an email doesn\'t seem right or comes out of nowhere, it\'s best not to click or open it. By avoiding these, you help keep your digital space safe from tricky cyber threats.',
    action: () => toggleElements(['ems','arrow3'],false).then(() =>
    toggleElements(['badLink','links','arrow4']))
  },

  {
    text: 'If an email directly asks you for personal or sensitive information, it\'s a major red flag. Remember, legitimate services and organizations will never ask you to share your personal details, like your password or bank account numbers, through an email. ',
    action: () => toggleElements(['badLink','links','arrow4','arrow5'],false).then(() =>
    toggleElements(['ems']))
  },

  {
    text: 'A legitimate company would not urgently request payment information as seen in this email. Typically, you would be guided to securely log into your account on the official website to update your payment details or change your password.',
    action: () => toggleElements(['arrow5']),
    okActions: [
      () => navigateSlide(Slide5)
    ],
  },

];

export const Activity = [
  {
    text: 'Now it\'s your turn to inspect some emails. Click to cycle through images of the email and use the lessons from this section to determine if an email is safe or not.\nImage 1 is the full email, Image 2 highlights the sender\'s address, and Image 3 highlights the email content.',
    action: () => toggleElements(['carousel', 'face']),
    okActions: [
      () => toggleElements(['face'],false)
    ],
  }
];

export const Ans1 = [
  {
    text: 'Not Quite! This email has all the common signs of a phishing email. It\'s promises are too good to be true, it is riddled with grammar errors, and sent from a suspicious email address. Ignore and report as spam!',
    action: () => toggleElements(['face']),
  },
  {
    text: 'Try your luck with this email!',
    action: () => toggleElements(['carousel'],false).then(() =>
    toggleElements(['carousel2'])),
    okActions: [
      () => toggleElements(['face'],false)
    ],
  }
];

export const Ans2 = [
  {
    text: 'Correct! This email has all the common signs of a phishing email. It\'s promises are too good to be true, it is riddled with grammar errors, and sent from a suspicious email address. Ignore and report as spam!',
    action: () => toggleElements(['face']),
  },
  {
    text: 'Try your luck with this email!',
    action: () => toggleElements(['carousel'],false).then(() =>
    toggleElements(['carousel2'])),
    okActions: [
      () => toggleElements(['face'],false)
    ],
  }
];