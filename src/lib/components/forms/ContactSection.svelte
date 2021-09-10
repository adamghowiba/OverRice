<script lang="ts">
    import Input from '$lib/components/forms/Input.svelte';
    import TextArea from '$lib/components/forms/TextArea.svelte';

    let input: string | null = null
    let email: string | null = null
    let message: string | null = null

    const onSubmit = () => {
        console.table( [input, email, message] )
    }
</script>

    <section class="contact__form">
        <form on:submit|preventDefault={onSubmit}>
            
            <div class="contact__form__container">
                <Input id="name" bind:value={input} placeholder="Full Name" />
            </div>
            
            <div id="email" class="contact__form__container">
                <Input id="email" bind:value={email} placeholder="Email Address" />
            </div>
            
            <div id="message" class="contact__form__container">
                <TextArea id="message" bind:value={message} placeholder="Message" />
            </div>
            
            <slot>
                <button class="contact__form__submit">Send Message</button>
            </slot>
        
        </form>
    </section>

<style lang="scss">
    @use '../../scss/0-helpers/vars' as *;
    @use '../../scss/1-plugins/mquery' as mq;

    .contact {
        &__form {
            justify-self: center;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr min-content;
            gap: 50px;
            flex-grow: 1;

            form {
                /* Changed to 100% */
                width: 100%;
                min-width: 250px;
                max-width: 630px;
                display: grid;
                place-self: center;
                
                grid-template-columns: 1fr 1fr;
                grid-template-rows: min-content 1fr;
                gap: 19px;

                @include mq.media("<phone") {
                    grid-template-columns: 1fr;
                    grid-template-rows: min-content min-content 1fr;

                    padding: 0 20px;
                }
            }

            &__container {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            #message {
                width: 100%;
                grid-column: 1 / 3;
                grid-row: 2 / 3;

                @include mq.media("<phone") {
                    grid-column: 1 / 2;
                    grid-row: 3 / 4;
                }
            }

            &__submit {
                background: $color-green;
                padding: 12px 56px;
                color: white;
                font-family: 'le-havre';
                font-size: 1.75rem;
                border-radius: 11px;
                border: none;
                cursor: pointer;
                justify-self: center;
                grid-column: 1 / 3;

                @include mq.media("<phone") {
                    grid-column: 1 / 2;
                    padding: 8px 32px;
                }
            }
        }
    }
</style>