<script>
  import Button from "./Button.svelte";
  import Datos from "./Datos.svelte";
  export let name;

  let persona = {
    nombre: "Julio",
    apellido: "Gonzalez",
  };
  let button2 = {
    disabled: false,
    text: "login",
  };
</script>

<main>
  <h1>Hello my name is {name}!</h1>
  <Datos {...persona} />
  <Button {...button2} />
  <!-- Scope para css global -->
  <div>
    <Button {...button2} />
  </div>
  <!-- Directiva debug -->
  {@debug button2}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  /* Scope para css global */
  div :global(button) {
    border: 1px solid red;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
