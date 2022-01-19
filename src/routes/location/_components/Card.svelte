<script>
    export let day = "Monday";
    export let location = "1020 Waverly Dr. Longwood FL"
    export let times = "Call me"
    export let src = "/images/location.jpg";
    export let active = false

    // breaded_chicken.jpg
    // location.jpg
</script>

<div class="card" class:active on:click>
    <div class="card__img-wrap">
        <img {src} alt={location} class="card__img" />
    </div>
  
  <div class="card__content">

      <h3 class="card__date">{day}</h3>
    
      <ol>
          <li class="card__address">{location}</li>
          <li class="card__time">{times}</li>
      </ol>
    
      <a class="card__directions" href="google.com">Get Directions</a>
  </div>

</div>

<style lang="scss">
    @use '../../../lib/scss/0-helpers/vars' as *;

    .card {
        position: relative;
        width:100%;
        padding: 10px;
        display: flex;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        border: 1px solid rgba(0, 0, 0, 0);
        background-color: white;
        
        &__img {
            position: absolute;
            object-fit: cover;
            height: 100%;
            width: 100%;
            border-radius: 10px;
        }
        
        &__img-wrap {
            margin-right: 5%;
            position: relative;
            width: 30%;
            min-width: 80px;
        }
        
        &__date {
            font-size: 22px;
            font-weight: 700;
            color: $color-green;
            margin-bottom: 10px;
        }

        li {
             margin: 10px 0;
             color: #5f5f5f;
             list-style-type: none;
        }
        ol {
            list-style-type: none;
        }

        a {
            color: $color-green;
        }

        &:hover, &.active {
            border: 1px solid $color-green;
            cursor: pointer;
        }

        /* PSUEDO ICONS */
        &__address::before {
            content: url('/icons/small_location.svg');
            display: inline;
            margin-right: 9px;
        }

        &__time::before {
            content: url('/icons/small_clock.svg');
            display: inline;
            margin-right: 9px;
        }

        &__directions::before {
            content: url('/icons/small_compass.svg');
            display: inline;
            margin-right: 9px;
        }
    }
</style>
