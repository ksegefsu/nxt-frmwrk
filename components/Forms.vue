<template lang="html">
  <form class="" action="index.html" method="post">

    <fieldset>
      <legend align="center">Credentials</legend>

      <label for="username">Username</label>
      <input id="username" type="text" name="user_name" placeholder="Username" required autofocus>

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

<style lang="scss">
form {
  // background-color: rgb(209, 209, 209);
  border-radius: 5px;
  max-width: 500px;
  margin: 1em auto;
  padding: 0;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
  // background-color: red;
}
label {
  display: block;
}
textarea {
  resize: vertical;
}
input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  // background: rgba(255,255,255,0.1);
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 1em;
  width: 100%;
  background-color: white;
  color: black;
  // box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 1em;
  user-select: none;
}
input[type="text"]:focus,
input[type="password"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="time"]:focus,
input[type="url"]:focus,
textarea:focus,
select:focus {
  outline: 0;
  border-color: orange;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 1em;
}

.radio-label {
  display: inline-block;
}
</style>
