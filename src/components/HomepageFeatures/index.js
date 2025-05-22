import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple Integration',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TePay provides a straightforward .NET interface for integrating with the TBC Bank Payment API, so you can start accepting payments quickly.
      </>
    ),
  },
  {
    title: 'Full Payment Lifecycle',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        From creating and canceling payments to handling pre-authorization and recurring transactions—TePay covers the complete payment flow.
      </>
    ),
  },
  {
    title: 'Built-in Validation & Logging',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With FluentValidation for request validation and Serilog for robust logging, TePay ensures reliable, traceable interactions with the TBC Bank API.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
