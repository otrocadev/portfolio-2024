<template>
  <section>
    <div class="presentation-title">
      <p class="hi-my-name">HI, MY NAME IS</p>
      <h1><span class="text"></span> <span class="cursor">_</span></h1>
      <p class="job-title">[Front-end developer]</p>
    </div>
  </section>
  <section class="presentation" :class="{ presentationMobile: isMobile }">
    <div class="text-card scrolling-text">
      <p>👋🏼 Greetings! I'm Ot, a 24 years old software developer.</p>
      <p>
        My speciality is the Front-End of web development, but sometimes I do
        Back-End stuff too when needed. I am proactive and I like to learn from
        new technologies to add value, that is why I am currently getting the
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
        that being part of a team is always an opportunity to add value while
        you learn new things.
      </p>
      <p>
        I like to say:
        <i>
          "It is obvious that a senior will for sure teach a lot of things to a
          Junior, but what is actually crazy, is how a senior can learn a lot of
          new things from a junior. It is a symbiosis that creates a really
          special synergies."
        </i>
      </p>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  props: {
    isMobile: Boolean,
  },

  mounted() {
    // Name
    //Cursor animation

    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      duration: 1.2,
    });

    // Name text writting animation
    gsap.to(".text", {
      text: "Ot Roca",
      delay: 1,
      duration: 1.5,
    });

    // Text presentation (just animated in desktop)//
    if (!this.isMobile) {
      console.log(this.isMobile);
      // "mini jumps"
      let miniJumps = gsap.timeline({
        delay: 3,
        repeat: 1,
      });
      miniJumps.to(".scrolling-text", {
        y: -15,
        duration: 0.2,
        ease: "sine.inOut",
      });
      miniJumps.to(".scrolling-text", {
        y: 0,
        duration: 0.2,
        ease: "sine.inOut",
      });

      // scrolling
      gsap.from(".scrolling-text", {
        scrollTrigger: {
          trigger: ".scrolling-text",
          start: "-400 bottom",
          end: "30% center",
          scrub: true,
        },
        rotation: 80,
        ease: "sine.out",
      });
    }
  },
};
</script>

<style lang="css" scoped>
h1 {
  width: 5em;
  font-size: clamp(3rem, 4rem, 6rem);
  margin: 1rem 0;
  padding: 0.2rem 1rem;
  border: 3px solid var(--primaryColor);
  border-radius: 0.6rem;
}

p {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 600;
  font-family: "CutiveMono-Regular", Arial, sans-serif;
}

.presentation-title {
  height: 80vh;
  padding: 1rem clamp(8rem, 10rem, 12rem);
  display: grid;
  place-content: center;
}

.hi-my-name {
  text-align: left;
  margin-left: 1rem;
}

.job-title {
  margin-top: 0;
  text-align: center;
}

.presentation {
  background: var(--forthColor);
  height: fit-content;
  padding: 6rem clamp(2rem, 10rem, 12rem);
  display: grid;
  place-content: center;
}

.presentationMobile {
  padding: 3rem;
}

.text-card {
  background-color: var(--whiteColor);
  padding: 2rem;
  border: 3px solid var(--primaryColor);
  border-radius: 0.8rem;
}
</style>
