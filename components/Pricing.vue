<template lang="html">
  <div class="pricing-grid">

    <div class="plans plan1">

      <div class="info">
        <h2>Cat</h2>
        <p>Worst house pet</p>
        <hr>
      </div>

      <div class="price">
        <span>free</span>
      </div>

      <ul class="features">
        <li>Scratches everything</li>
        <li>Easily lost for days</li>
        <li>Kind of a bummer</li>
      </ul>

      <a href="#" class="cta">Really?</a>

    </div>

    <div class="plans popular">

      <div class="info">
        <h2>Dog</h2>
        <p>Loving, gentle and caring</p>
        <hr>
      </div>

      <div class="price">
        <span class="dollar">$</span>
        <span>90</span>
        <span class="month">/ mo</span>
      </div>

      <ul class="features">
        <li>Super Fun</li>
        <li>Plays games</li>
        <li>Not a cat</li>
      </ul>



      <a href="#" class="cta">Best Deal</a>
    </div>

    <div class="plans plan3">

      <div class="info">
        <h2>Fish</h2>
        <p>Cheap n' easy</p>
        <hr>
      </div>

      <div class="price">
        <span class="dollar">$</span>
        <span>3</span>
        <span class="month">/ mo</span>
      </div>

      <ul class="features">
        <li>Eats flakes</li>
        <li>Cop out</li>
        <li>Replaceable</li>
      </ul>



      <a href="#" class="cta">Gimme</a>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.pricing-grid {
  max-width:350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // align-items: flex-end;
}
@media (min-width: 48em) {
  .pricing-grid {
    flex-direction: row;
    max-width:1000px;
  }
}

.plans {
  background: rgba(195,195,195,0.4);
  flex: 1;
  margin: 1em 0.5em;
  /*padding: 1em 0.5em;*/
  border-radius: 4px 4px 6px 6px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}


.info {
  // margin: 0;
  margin-top: 1.5em;
  h2 {
    font-size: 3em;
    text-transform: uppercase;
    // color:#FF851B;
    letter-spacing: 2px;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 0.8em;
    opacity: 0.6;
  }
  hr {
    margin: 1em 0 0;
    opacity: 0.2;
  }
}
.plans .features {
  margin: 0;
  padding: 0;
  list-style: none;
}
.features li {
  // border-bottom: 1px solid rgba(0,0,0,0.1);
  padding:10px;
}
.features li:last-child {
  // border-bottom: 0;
}
.features li:nth-of-type(2n+1) {
    background-color: rgba(23, 61, 80, 0.06);
}
.price {
  font-size: 4em;
  margin: 0;
  .dollar {
    display: inline-block;
    font-weight: bold;
    font-size: 1.25rem;
    vertical-align: top;
    margin-top: 2rem;
  }
  .month {
    display: inline-block;
    font-weight: bold;
    font-size: 1rem;
    vertical-align: bottom;
    margin-bottom: 2rem;
  }
}
.plans .cta {
  display: block;
  // margin-top: 3em;
  padding: 1em 0em;
  border-radius: 0 0 6px 6px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  background:#0c1f28;
  color:white;
  &:hover {
    background:#112e3c;
  }
  /*align-self: flex-start;*/
}

.popular .info, .popular .price {
  color: #e97d68;
}
.popular .cta {
  background-color: #e97d68;
  &:hover {
    background-color: #ec907e;
  }
}
</style>
