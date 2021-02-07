<script>
  import Datos from "./Datos.svelte";
  export let name;
  let persona = {
    nombre: "Julio",
    apellido: "Gonzalez",
  };
</script>

<main>
  <h1>Hello my name is {name}!</h1>
  <Datos {...persona} />
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
