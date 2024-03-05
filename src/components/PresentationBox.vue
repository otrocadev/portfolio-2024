<template>
  <section>
    <div class="presentation-text">
      <p>HI, MY NAME IS</p>
      <h1>OT ROCA</h1>
    </div>
  </section>
  <section class="presentation">
    <div class="scrolling-text">
      <p>👋🏼 Greetings! I'm Ot, a 24 years old software developer.</p>
      <p>
        My speciality is the Front-End of web development, but sometimes I do
        Back-End stuff too when needed. I am proactive and I like to learn from
        new technologies to add value, that is why I am currently geeting the
        Bachelor's Degree in Techniques for Software Application Development at
        <a
          href="http://www.uoc.edu/en/studies/bachelors-degrees/bachelors-degree-software-development"
          target="_blank"
          rel="noopener noreferrer"
          >UOC</a
        >.
      </p>
      <p>
        I feel very confortable in team environments, as I believe that diverse
        perspectives an opinions usually come together to create a better final
        result. As someone who believes in continuous growth, I am convinced
        that being part of a team is allways an oportunitty to add value while
        you learn new things.
      </p>
      <p>
        I like to say:
        <i>
          "It is obvious that a senior will for sure teach a lot of things to a
          Junior, but whatn is actually crazy, is how a senior can learn a lot
          of new things from a junior. It is a symbiosis that creates a really
          special cinergias."
        </i>
      </p>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.from(".scrolling-text", {
      scrollTrigger: {
        trigger: ".scrolling-text",
        start: "-400 bottom",
        end: "30% center",
        scrub: true,
      },
      opacity: 0,
      scale: 0,
      ease: "sine.out",
    });
  },
};
</script>

<style lang="css" scoped>
section {
  height: 80vh;
  padding: 3rem clamp(12rem, 12vw, 20rem);
  display: grid;
  place-content: center;
}

h1 {
  font-size: clamp(3rem, 4vw, 6rem);
}

p {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 600;
  font-family: "CutiveMono-Regular", Arial, sans-serif;
}

.presentation {
  background: var(--forthColor);
}
</style>
