import React from "react";


const App = () => {
  return (
    <div>
      <section>
        <img src="/images/ironhack-logo.svg" />
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library,and become a super ninja developer</p>
        <button>Awesome!</button>
      </section>

      <section>
        <article>
          <img src="/images/icon1.png" />
          <h2>Declarative</h2>
          <p>react makes it painless to create interactive UIs</p>
        </article>
        <article>
          <img src="/images/icon2.png" />
          <h2>Componenets</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>
        <article>
          <img src="/images/icon3.png" />
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </article>
        <article>
          <img src="/images/icon4.png" />
          <h2>JSX</h2>
          <p>Statically-typed,desiegned to run on moders browsers.</p>
        </article>
      </section>
    </div>
  )
};


export default App;
