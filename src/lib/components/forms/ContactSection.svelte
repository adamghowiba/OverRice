<script lang="ts">
  import Input from '$lib/components/forms/Input.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import Button from '../Button.svelte';

  let name: string | null = null;
  let email: string | null = null;
  let message: string | null = null;
  let loading: boolean = false;
  let status: 'error' | 'success';
  let statusMessage: string;

  const onSubmit = async () => {
    const formElement = event.target as HTMLFormElement;
    const data = { name, email, message };

    try {
      loading = true;
      const response = await fetch('https://webrevived.com/api/form/3/submissions', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        statusMessage = 'Submission failed please try again.';
        status = 'error';
        return;
      }

      statusMessage = "Message sent sucessfully, we'll be in touch shortly.";
      status = 'success';
      formElement.reset();
    } catch {
      statusMessage = 'Submission failed please try again.';
      status = 'error';
    } finally {
      loading = false;
    }
  };

  function handleTestSubmit(event: SubmitEvent) {
    console.log('Attempted to submit form');
    const target = event.target as HTMLFormElement;
  }
</script>

<h1>Form Testing</h1>
<section class="contact__form">
  {#if status}
    <p class="status {status}">{statusMessage}</p>
  {/if}
  <form action="https://webrevived.com/api/form/1/submissions" method="post" on:submit={handleTestSubmit}>
    <div class="contact__form__container">
      <Input id="name" bind:value={name} placeholder="Full Name" required />
    </div>

    <div id="email" class="contact__form__container">
      <Input id="email" bind:value={email} placeholder="Email Address" required />
    </div>

    <div id="message" class="contact__form__container">
      <TextArea id="message" bind:value={message} placeholder="Message" required />
    </div>

    <Button form>
      {loading ? 'Sending...' : 'Send Message'}
    </Button>
    <!-- <button class="contact__form__submit">Send Message</button> -->
  </form>
</section>

<style lang="scss">
  @use '../../scss/0-helpers/vars' as *;
  @use '../../scss/1-plugins/mquery' as mq;

  .status {
    text-align: center;
    font-size: 24px;
    &.error {
      color: $color-red;
    }
    &.success {
      color: $color-green;
    }
  }

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

        @include mq.media('<phone') {
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

        @include mq.media('<phone') {
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

        @include mq.media('<phone') {
          grid-column: 1 / 2;
          padding: 8px 32px;
        }
      }
    }
  }
</style>
