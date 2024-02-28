import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '学習課題',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        フロントエンドを中心に、手を動かして自分で確認しながら、体で覚えてもらうための学習課題です。
      </>
    ),
  },
  {
    title: 'その他',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        開発メンバーの複数人に複数回繰り返し口頭で伝えるような情報をドキュメントに纏めています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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
