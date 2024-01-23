import { toggleElements, navigateSlide } from '../../../../assets/js/helpers';
// import Slide3 from '../../slides/Slide3'
import Slide2 from '../../slides/Slide2'

export const intro = [
  {
    text: 'Welcome to Email Operations Central, the heartbeat of Cybercity\'s communications. ' +
    'Here, we oversee all email traffic, ensuring every message is safely delivered and received. ',
    action: () => toggleElements(['inside', 'mailmanHand'],false).then(() => 
    toggleElements(['outside','face','mailman'], 1)),
  },
 
  {
    text: 'Let\'s dive into the essentials of email safety and understand how this hub keeps the city connected and protected.',
    action: ()=> toggleElements(['pkgs', 'mailmanSide', 'sorting-img-div'],false,0).then(() => 
    toggleElements(['outside', 'mailman'],false,1)).then(() => 
    toggleElements(['inside', 'mailmanHand'], 1)),
  },
  
  {
    text: 'In this nexus of communication, every email is crucial. ' +
    'Just like the city relies on efficient roads and signals, Cybercity depends on us for smooth and secure email operations. ' +
    'Your vigilance and understanding of email safety are vital. ',
    action: ()=>toggleElements(['mailmanFront'],false).then(() => 
    toggleElements(['inside', 'mailmanHand'],false,0)).then(() => 
    toggleElements(['pkgs'],1)).then(() => 
    toggleElements(['mailmanSide', 'sorting-img-div'])),

  },
  
  {
    text: 'All right, let\'s get straight to work, partner. There\'s a lot to cover, and your role here is crucial. ' +
    'Follow me, and I\'ll show you the ropes of managing and protecting our city\'s lifeline – email communications. ',
    action: () => toggleElements(['mailmanSide', 'sorting-img-div'],false,0).then(() => 
    toggleElements(['mailmanFront'])),
    okActions: [
      () => navigateSlide(Slide2)
    ],
  },
];

export const DigitalIdentity = [
  { 
    text: 'Welcome to the core of Email Operations Central, where securing digital identities and crafting trusted ' +
    'email addresses go hand in hand. Each email account here is like a fortified vault, protected by robust passwords and encryption.',
    action: () => toggleElements(['mailman'],false,false,1).then(() => 
    toggleElements(['private', 'door', 'face', 'NS'],true,false,300))
  },
  
  { 
    text: 'Emails are like special name tags that say a lot about who has them. They should look nice, be easy to remember, and make people feel safe.',
    action: () => toggleElements(['NS'],false,false,1).then(() => 
    toggleElements(['mailman'],true,false,1)) 
  },
  
  { 
    text: 'Only the right password grant access, we have to make sure these digital safes remain fortified against attackers.' +
    'Your password is the golden key to access your information. Use the lessons from the previous module to create a steel-strong password!',
    action: () => toggleElements(['mailman','point'],false,false,1).then(() => 
    toggleElements(['mailman'],true,false,1))
  },

  { 
    text: 'Drag this golden key to the lcoked warehouse door to access your safeguarded inbox!',
    action: () => toggleElements(['mailman'],false,false,1).then(() => 
    toggleElements(['point', 'key-move-div'],true,false,1)),
    okActions: [
      () => toggleElements(['face'],false,1)
    ],
  },
];

export const Settings = [
  { text: 'Slide 3 Dialogue 1' },
  { text: 'Slide 3 Dialogue 2' },
  { text: 'Slide 3 Dialogue 3'}
];
