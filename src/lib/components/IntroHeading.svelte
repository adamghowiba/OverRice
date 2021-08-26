<script lang="ts">
    export let title: string
    export let body: string
    export let footer: string
</script>

<h2>{title}</h2>
<h1>{body}</h1>
<p>{footer}</p>

<style lang="scss">
    @use '../scss/0-helpers/vars' as *;
    @use '../scss/1-plugins/mquery' as mq;

    h2, h1, p { 
        --gap: 1;
        text-align: center; 
    }

    h2 {
        font-family: 'Pristina';
        font-size:  2.3rem;
        font-weight: 400;
        line-height: 44px;

        color: $color-green;
        margin-bottom: calc(23px * var(--gap));
    }

    h1 {
        font-weight: 900;
        font-size: 3.2rem;
        line-height: 57px;
        letter-spacing: 0.02em;
        margin-bottom: calc(17px * var(--gap));
        color: $color-heading;
    }

    p {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: $color-text;
    }

    @include mq.media("<tablet") {
        h2, h1, p { --gap: 0.3; }
        h1 { font-size: 2.3rem }   
    }
</style>