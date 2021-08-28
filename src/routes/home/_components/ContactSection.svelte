<script>
 import Input from '$lib/components/forms/Input.svelte';
 import TextArea from '$lib/components/forms/TextArea.svelte';

    let input = null
    let email = null
    let message = null

    const onSubmit = () => {
        console.table( [input, email, message] )
    }

</script>

    
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
    
    <button class="contact__form__submit">Send Message</button>

</form>

<style>

</style>