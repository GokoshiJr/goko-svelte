<script>
  import Button from "./Button.svelte";
  import Datos from "./Datos.svelte";
  export let name;
  export let disabled = false;
  let persona = {
    nombre: "Julio",
    apellido: "Gonzalez",
  };
  let button2 = {
    disabled: true,
    text: "click",
  };
</script>

<main>
  <h1>Hello my name is {name}!</h1>
  <Datos {...persona} />
  <Button {...button2} />
  <!-- Todo lo que este en corchetes son expresiones de js -->
  <button {disabled}>register</button>
  <input type="text" />
  <a href="http://mipaginaweb.com/{name}">{name}</a>
  <!-- sintaxis equivalentes, es mejor la primera -->
  <a href={`http://mipaginaweb.com/${name}`}>{name}</a>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
