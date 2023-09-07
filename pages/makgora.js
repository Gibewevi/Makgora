import React from 'react';
import MakgoraForm from '@/components/form/MakgoraForm';

const Makgora = () => {
  return (
    <section className="pageContent">
      <section className="pageContent__header"></section>
      <section className="pageContent__content">
        <div className="pageContent__intro">
          <h2>Create Mak'gora</h2>
          <p>Nam sole orto magnitudine angusti gurgitis sed profundi a transitu arcebantur et dum piscatorios quaerunt lenunculos vel innare temere contextis cratibus parant, effusae legiones, quae hiemabant tunc apud siden, isdem impetu occurrere veloci.</p>
        </div>
        <MakgoraForm />
      </section>
      <section className="pageContent__footer"></section>
    </section>
  );
};

export default Makgora;