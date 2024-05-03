import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
  {
    title: '学習課題',
    url: 'training',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        フロントエンドを中心に、手を動かして自分で確認しながら、体で覚えてもらうための学習課題です。
      </>
    ),
  },
  {
    title: 'ナレッジ',
    url: 'knowledge',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        開発メンバーの複数人に複数回繰り返し口頭で伝えるような情報をドキュメントに纏めています。
      </>
    ),
  },
  {
    title: 'ブログ',
    url: 'blog',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        自分の備忘録として、調べたこと学んだことを記載します。
      </>
    ),
  },
];

function Feature({Svg, title, description,url}) {

  return (
    <Link to={url} className={`col col--4 ${styles.cardLink}`}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
