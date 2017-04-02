<template lang="html">
  <form class="" action="index.html" method="post">

    <fieldset>
      <legend align="center">Credentials</legend>

      <label for="username">Username</label>
      <input id="username" type="text" name="user_name" placeholder="Username" required autofocus list="username_datalist">
      <datalist id="username_datalist">
        <option value="Vasya"></option>
        <option value="John"></option>
        <option value="Petya"></option>
        <option value="Adolf"></option>
      </datalist>

      <label for="password">Password</label>
      <input id="password" type="password" name="user_password" placeholder="Password">

      <label for="email">Email Address</label>
      <input id="email" type="email" name="user_email" placeholder="Email Address">

      <label for="foo">Supercalifragilistic Label</label>
      <input id="foo" type="text" name="user_blah" placeholder="Enter something here...">

    </fieldset>

    <fieldset>
      <label for="bar">Textarea</label>
      <textarea id="bar" name="user_bar" placeholder="Enter something here..."></textarea>

      <label class="radio-label">Sex:</label>
      <input id="male" value="male" type="radio" name="user_sex"><label class="radio-label" for="male">Male</label>
      <input id="female" value="female" type="radio" name="user_sex"><label class="radio-label" for="female">Female</label>

      <label for="state">State</label>
      <select id="state" name="user_state">
        <option value="">Select state</option>
        <option value="TX">Texas</option>
        <option value="AK">Alaska</option>
        <option value="CA">California</option>
        <option value="OK">Oklahoma</option>
      </select>

      <label for="cb" class="pure-checkbox">
          <input id="cb" type="checkbox"> I've read the terms and conditions
      </label>
    </fieldset>

    <button type="submit" class="">Submit</button>

  </form>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

</style>
