// src/data/content.js
import groupImg from '../assets/images/photo.png';
import checkIcon from '../assets/icons/Combined shape 16072.png';
import crossIcon from '../assets/icons/close (1).png';
import slider1 from '../assets/images/slider1.png';
import slider2 from '../assets/images/slider2.png';
import slider3 from '../assets/images/slider3.png';


export const faqData = [
  {
    question: "How to contact with riders emergency ?",
    answer: "Use the rider's profile contact number or emergency option inside the app.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer: "Make sure your OS is up to date and try reinstalling from the app store.",
  },
  {
    question: "Website reponse taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    question: "New update fixed all bug and issues",
    answer: "Yes, the latest version resolves all reported performance and stability bugs.",
  },
];

export const tutorials = [
  {
    id: 1,
    title: 'Convert your web layout theming easily with sketch zeplin extension',
    image: groupImg,
    reviews: 392,
    rating: 5,
    students: 1037,
  },
  {
    id: 2,
    title: 'Create multiple layout for figma prototype testing',
    image: groupImg,
    reviews: 532,
    rating: 4.5,
    students: 3532,
  },
];


export const pricingPlans = {
  monthly: [
    {
      id: 'free',
      name: 'Free Plan',
      desc: 'For Small teams or office',
      recommended: false,
      price: null,
      button: 'Start free trial',
      features: [
        { text: 'Ultimate access to all course, exercises and assessments', included: true },
        { text: 'Free access for all kinds of exercise corrections with downloads.', included: true },
        { text: 'Total assessment corrections with free download access system', included: true },
        { text: 'Unlimited download of courses on the mobile app contents', included: false },
        { text: 'Download and print courses and exercises in PDF', included: false },
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      desc: 'For startup enterprise',
      recommended: true,
      price: '49.99/mo',
      button: 'Subscribe Now',
      features: [
        { text: 'Ultimate access to all course, exercises and assessments', included: true },
        { text: 'Free access for all kinds of exercise corrections with downloads.', included: true },
        { text: 'Total assessment corrections with free download access system', included: true },
        { text: 'Unlimited download of courses on the mobile app contents', included: true },
        { text: 'Download and print courses and exercises in PDF', included: true },
      ],
    },
  ],
  annual: [
    {
      id: 'free',
      name: 'Free Plan',
      desc: 'For Small teams or office',
      recommended: false,
      price: null,
      button: 'Start free trial',
      features: [
        { text: 'Ultimate access to all course, exercises and assessments', included: true },
        { text: 'Free access for all kinds of exercise corrections with downloads.', included: true },
        { text: 'Total assessment corrections with free download access system', included: true },
        { text: 'Unlimited download of courses on the mobile app contents', included: false },
        { text: 'Download and print courses and exercises in PDF', included: false },
      ],
    },
    {
      id: 'premium',
      name: 'Premium Annual',
      desc: 'For growing enterprise',
      recommended: true,
      price: '499.99/year',
      button: 'Subscribe Annually',
      features: [
        { text: 'Everything in Monthly Plan', included: true },
        { text: 'Priority customer support', included: true },
        { text: 'Exclusive annual-only content', included: true },
        { text: 'Offline access to resources', included: true },
        { text: 'Printable PDFs included', included: true },
      ],
    },
  ],
};

export const iconMap = {
  true: checkIcon,
  false: crossIcon,
};

export const steps = [
  {
    number: "01",
    title: "Set disbursement Instructions",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests."
  },
  {
    number: "02",
    title: "Assembly retrieves funds from your account",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests."
  },
  {
    number: "03",
    title: "Assembly initiates disbursement",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests."
  },
  {
    number: "04",
    title: "Customer receives funds payment",
    description:
      "Get your blood tests delivered at home collect a sample from the your blood tests."
  }
];

export const tutorialsSlider = [
  {
    id: 1,
    title: 'How to work with prototype design with adobe xd featuring tools',
    rating: '5.0',
    reviews: 392,
    watched: 2538,
    image: slider1,
  },
  {
    id: 2,
    title: 'Create multiple artboard by using figma prototyping tools development',
    rating: '4.5',
    reviews: 524,
    watched: 3532,
    image: slider2,
  },
  {
    id: 3,
    title: 'Convert your web layout theming easily with sketch zeplin extension',
    rating: '5.0',
    reviews: 392,
    watched: 1037,
    image: slider3,
  },
];