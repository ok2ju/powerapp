<script>
  export let title
  export let description

  const getAbbr = (title) => title.charAt(0)

  const handleClick = (event) => {
    event.preventDefault()
    console.log('Clicked on the card', title)
  }
</script>

<div class="card">
  <a href="/" on:click={handleClick}>
    <div class="card-inner">
      <div class="card__body">
        <span class="card__abbr">{getAbbr(title)}</span>
      </div>
      <div class="card__footer">
        <h1 class="card__title">{title}</h1>
        <p class="card__description">{description}</p>
      </div>
    </div>
  </a>
</div>

<style>
  .card {
    width: 16.666666666666667%;
    padding: 8px;
  }

  .card a {
    text-decoration: none;
    color: initial;
  }

  .card-inner {
    background-color: #f7ece8;
    border-radius: 4px;
    box-shadow: 0 2px 3px #d0d0d0;
  }

  .card__body {
    background-color: #f5f7f9;
    height: 0;
    padding-top: 75%;
    position: relative;
  }

  .card__abbr {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    font-weight: 700;
  }

  .card__footer {
    border-top: 1px solid #000;
    padding: 8px 16px;
  }

  .card__title,
  .card__description {
    text-align: left;
  }

  .card__title {
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 4px 0;
  }

  .card__description {
    font-size: 14px;
    font-weight: 300;
    margin: 0;
  }
</style>
