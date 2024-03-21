import { navigateSlide } from '../../../assets/js/helpers';
import Slide2 from '../../SafeBrowsing/slides/Slide2';
import Slide3 from '../../SafeBrowsing/slides/Slide3';
import Slide4 from '../../SafeBrowsing/slides/Slide4';

export const intro = [
    {
        text: 'Greetings, cyber apprentice! ' +
        'The internet is a large and exciting place with  filled with many hidden paths, twists, and turns. But beware! Some paths lead to traps set by sneaky villains like Randy the ransomware.' +
        'Our mission is to learn safe browsing habits to identify and evade these traps',
        okActions: [
            () => navigateSlide(Slide2)
        ],
    },  
];

export const dialogue1 = [
    {
        text: 'Let\'s talk about malicious URLs, the digital traps lurking in cyberspace. These links are used to deceive users into cyberattacks.' +
        'When you encounter any URL, examine it closely. If it\'s long and unfamiliar, proceed with caution!' +
        ' Don\'t fall into the trap of clicking blindly into the unknown.',

    },
    {
        text: 'Spotting malicious links is essential in our digital security. Remember, URLs can be deceptive.' +
        ' Avoid clicking on shortened URLs in unexpected emails, they\'re like hidden landmines waiting to detonate.' + 
        'Be wary of urgent email prompts to open links – they\'re often used to deceive users.'
    },
    {
        text: 'Dealing with sneaky online traps like malicious URLs needs a team effort to keep us safe.' +
         'Make sure to use antivirus software can help detect and block malicious URLs before they cause harm.' +
         'Always activate your antivirus software when possible, as it really enhances the security of your browsing.'
    },
    {
        text: 'Beware of sneaky tricks with malicious URLs! Cyber attackers often manipulate web addresses to deceive you into clicking.' +
        'They might change a few letters in a familiar website name to lead mislead you.' +
        ' For example, \'www.google.com\' could become \'www.g00gle.com.\'. Stay sharp and avoid those links.',
        okActions: [
            () => navigateSlide(Slide3)
        ],
    }
]

export const dialogue2 = [
    {
        text: 'Understanding the importance of HTTPS is crucial in improving our online security.' +
        ' It serves as armor, encrypting our data transmissions which protects us from data interception and tampering.' +
        ' It ensures our online transactions remain confidential and secure. But how do we spot HTTPS in action?'
    },
    {
        text: 'Keep an eye out for HTTPS in the URL bar' + 
        '. You\'ll know a website is secure when you see \'https://\' with a reassuring padlock icon next to it. Stay vigilant and always verify that a site is' +
        'secure before entering any personal information',
        okActions: [
            () => navigateSlide(Slide4)
        ],
    }
]

export const dialogue3 = [
    {
        text: 'Another crucial safe browsing habit is avoiding downloads from untrusted sources. Downloading unknown or unsolicited programs can unleash digital dangers like viruses and malware, putting your computers and personal data at risk.' +
        ' How can we stay safe amidst this digital minefield?'
    },
    {
        text: 'Before downloading anything, make sure it\'s from a trusted place! Check the website or app store to see if it\'s safe.' + 
        'Look for the special lock next to the web address.' +
        ' If you don\'t see the lock, it might not be safe, so be careful! Ask an adult for help if you\'re not sure.'
    },
    {
        text: 'Always scan your downloads for hidden surprises! Even if you think you\'re getting something cool, it could be hiding bad stuff like viruses.' + 
        'Use special tools such as antivirus or anti-malware software to check your downloads before you open it. These tools ensure that the downloaded software is safe to open or not.'
    }
]

