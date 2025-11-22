import type {ReactNode} from 'react';
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import GitHubStars from '@site/src/components/GitHubStars';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/labs/intro">
            Начать 🚀
          </Link>
        </div>
        <GitHubStars />
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center padding-horiz--md">
              <h2>О курсе</h2>
              <p>
                Добро пожаловать в документацию по лабораторным работам и курсовым проектам 
                по курсам "Периферийные устройства" и "Организация ЭВМ". Здесь вы найдете 
                подробные методические указания, примеры кода, теоретические материалы 
                и практические задания для изучения архитектуры компьютеров и работы с 
                периферийными устройствами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageSections() {
  return (
    <section className={styles.sections}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="card">
              <div className="card__header">
                <h3>Периферийные устройства</h3>
              </div>
              <div className="card__body">
                <p>
                  Лабораторные работы по изучению периферийных устройств процессора x86, 
                  включая работу с прерываниями, исключениями, страничной организацией памяти 
                  и другими аспектами архитектуры.
                </p>
                <ul>
                  <li><Link to="/labs/peripheral-devices/lab1">Лабораторная работа 1</Link></li>
                  <li><Link to="/labs/peripheral-devices/lab2">Лабораторная работа 2</Link></li>
                  <li><Link to="/labs/peripheral-devices/lab3">Лабораторная работа 3</Link></li>
                  <li><Link to="/labs/peripheral-devices/lab4">Лабораторная работа 4</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card">
              <div className="card__header">
                <h3>Организация ЭВМ</h3>
              </div>
              <div className="card__body">
                <p>
                  Практические работы по проектированию и программированию процессорных систем 
                  на базе NIOS II, включая работу с JTAG UART, таймерами и другими компонентами.
                </p>
                <ul>
                  <li><Link to="/labs/computer-organization/lab7">Лабораторная работа 7</Link></li>
                  <li><Link to="/labs/computer-organization/lab8">Лабораторная работа 8</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card">
              <div className="card__header">
                <h3>Курсовая работа</h3>
              </div>
              <div className="card__body">
                <p>
                  Методические указания по проектированию компонентов учебного процессора на ПЛИС, 
                  включая регистровую и оперативную память, арифметические устройства.
                </p>
                <ul>
                  <li><Link to="/labs/course-work/01-rp-op-design">Проектирование РП и ОП</Link></li>
                  <li><Link to="/labs/course-work/02-arithmetic-device">Арифметическое устройство</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageQuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center">Быстрый старт</h2>
            <div className="row">
              <div className="col col--6">
                <h3>Для студентов</h3>
                <ol>
                  <li>Ознакомьтесь с <Link to="/labs/intro">вводной страницей</Link></li>
                  <li>Выберите лабораторную работу из соответствующего раздела</li>
                  <li>Изучите теоретический материал и контекст работы</li>
                  <li>Следуйте пошаговым инструкциям и чеклисту</li>
                  <li>Используйте FAQ для решения типичных проблем</li>
                </ol>
              </div>
              <div className="col col--6">
                <h3>Для преподавателей</h3>
                <ol>
                  <li>Ознакомьтесь с <Link to="/labs/contributing">руководством по контрибьюции</Link></li>
                  <li>Используйте шаблоны для создания новых материалов</li>
                  <li>Следуйте стандартам оформления документации</li>
                  <li>Добавляйте контекст, чеклисты и FAQ к каждой работе</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Документация`}
      description="Документация лабораторных работ и курсовых проектов по курсам 'Периферийные устройства' и 'Организация ЭВМ'">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSections />
        <HomepageQuickStart />
      </main>
    </Layout>
  );
}

