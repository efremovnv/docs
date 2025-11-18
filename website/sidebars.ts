import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  // Структура боковой панели для лабораторных работ
  labsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Периферийные устройства',
      items: [
        'pe/lab1',
        'pe/lab2',
        'pe/lab3',
        'pe/lab4',
      ],
    },
    {
      type: 'category',
      label: 'Организация ЭВМ',
      items: [
        'oevm/lab7',
        'oevm/lab8',
      ],
    },
    {
      type: 'category',
      label: 'Курсовая работа',
      items: [
        'course-work/arithmetic-device',
        'course-work/rp-op-design',
      ],
    },
  ],
};

export default sidebars;

