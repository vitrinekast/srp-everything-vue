]<template lang="html">

      <div class="p--fixed ev--none " >
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo"  x="-100%" y="-100%" width="400%" height="400%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
            </filter>
          </defs>
      </svg>
        <ul class="dots p--center" ref='dots' :dots='index'>
          <li ref='dot' class="dot select"></li>
          <li ref='dot' class="dot"></li>
          <li ref='dot' class="dot"></li>
          <li ref='dot' class="dot"></li>
          <li ref='dot' class="dot"></li>
        </ul>
      </div>
</template>

<script>
import anime from 'animejs'
export default {
  props: {
    index: {
      required: false,
      type: Number
    }
  },
  mounted () {
    if (this.$refs[ 'dots' ]) {
      let children = Array.from(this.$refs[ 'dots' ].children)
      children.forEach((elem, index) => {
        elem.style.setProperty('--dot-size', anime.random(200, 400) + 'px')
        elem.style.setProperty('--x', anime.random(-100, 100) + 'px')
        elem.style.setProperty('--y', anime.random(-100, 100) + 'px')
      })
      anime({
        targets: children,
        // easing: 'easeInCirc',
        easing: 'easeOutElastic(5, .8)',
        delay: anime.stagger(800, { start: 0 }),
        keyframes: [
          {
            translateY: 100,
            translateX: 200,
            rotate: 90
          },
          {
            translateY: 0,
            translateX: -10,
            rotate: 120
          },
          {
            translateY: -50,
            translateX: -140,
            rotate: 180
          },
          {
            translateY: 50,
            translateX: 0,
            rotate: 260
          },
          {
            translateY: 90,
            translateX: 20,
            rotate: 360
          }
        ],
        duration: 88000,
        rotate: 360,
        translateZ: 0,
        direcrtion: 'alternate',
        loop: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dots {
    --dot-color: red;
    padding: 0;
    margin: 0;
    position: relative;
    padding: 90px;
    width: 50vw;
    height: 50vh;
    -webkit-filter: url( "#goo");
    filter: url( "#goo");

    @for $i from 0 through 10 {
        $random-color: rgb(random(255),random(255),random(255));
        &[dots='#{$i}'] {
            --dot-color: #{$random-color};
            .dot:nth-of-type(n + #{$i + 2}) {
                opacity: 0;
            }
        }
    }

}
.dot {
    display: inline-block;
    border-radius: 100%;
    transform-origin: left;
    opacity: 1;
    top: var(--x);
    transform: translateZ(0);
    will-change: transform;
    backface-visibility: visible;
    left: var(--y);
    width: var(--dot-size);
    height: var(--dot-size);
    background: var(--dot-color);
    transition: background 3s cubic-bezier(.2, 0, 0, 1), opacity 0.4s linear;
    position: fixed;
}
</style>
