<template>
  <section>
    <h2>MY EXPERIENCE</h2>
    <div class="experience">
      <img
        class="job-img"
        src="../assets/img/first_day_wallbox.png"
        alt="Ot Roca's First day at Wallbox Chargers"
      />
      <h3 class="job-title">WALLBOX CHARGERS | [Full-Stack]</h3>
      <div class="job-text">
        <p>
          Let me walk you through what I've been up to with the Wallbox Digital
          Solutions team.
        </p>
        <p>
          My main gig? Building a platform to manage the SIM cards hooked up to
          specific models of the company's electric vehicle chargers. 🚗⚡ This
          tool was stablished in a VPN secured enviroment inside a bigger team's
          tool.
        </p>
        <p>💼🔒 Here's the breakdown of how I made it happen:</p>
        <ul>
          <li>
            🛠️ The first step was to craft a custom Backend using Typescript.
            This let us dive into all the useful information details, letting us
            handle SIM card operations like a breeze.
          </li>
          <li>
            💻 Once the Backend was good to go, I pivoted to building out the
            Frontend. Of course, I made sure it was super flexible, ready to
            adapt to whatever curveballs the team might find in the field. Plus,
            it's built using SOLID techniques, so it can grow and evolve right
            alongside the team needs. The technology used was Vue.js for this
            bit, and it's been smooth ever since.
          </li>
          <li>
            🔄 During the whole process, I could learn and upgrade some of the
            most tried-and-true software engineering techniques. I used AGILE
            methods and plenty of one-on-ones with our product owners and
            project manager to make sure everything worked out well. This way,
            we made sure the project was ticking all the right boxes and fitting
            snugly with the team's needs.
          </li>
        </ul>

        <h4>Why this tool had a REAL WORLD impact?</h4>
        <p>
          Once finished, the engineers and technicians of the company, had a
          rock-solid software solution to lean on while they're out in the
          field, dealing with real-world stuff.
        </p>
        <p>
          With this flexibilty, any software team that comes later can modify,
          expand and enhance the base product, to adapt it to new needs that may
          arise.
        </p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="css" scoped>
section {
  background: var(--whiteColor);
  padding: 5rem 8rem;
}

h2 {
  margin: 2rem 2rem auto auto;
}

h3 {
  margin: 1rem 0 0 0;
}

.job-img {
  float: right;
  margin: auto;
  width: 40%;
}
</style>
