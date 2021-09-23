<script lang="ts">
  import Input from "$lib/components/forms/Input.svelte";
  import TextArea from "$lib/components/forms/TextArea.svelte";
  import HeroHeader from "$lib/components/HeroHeader.svelte";
  import IntroHeading from "$lib/components/IntroHeading.svelte";
  import { onMount } from "svelte";
  import ContactInfo from "./_components/ContactInfo.svelte";

  let input: string | null = null;
  let email: string | null = null;
  let message: string | null = null;
  let status: string = "Send Message";
  const onSubmit = (event: SubmitEvent) => {
    const data = { input, email, message };
    status = "Sending....";

    fetch(
      "https://s0prbjfu27.execute-api.us-east-1.amazonaws.com/Prod/submitForm",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          status = "failed";
        }
        
        console.log(response);
        status = "Sent";
      })
      .catch((err) => {
        status = "Sending Failed";
      });

      const formElement = event.target as HTMLFormElement;
      formElement.reset();
  };
</script>

<HeroHeader
  header="Contact Us"
  quote="We take pride on treating each customer like family"
  --url="url('/images/pork_adobo.jpg')"
  --bg-pos="0 38%"
/>

<main class="contact">
  <section class="contact__header">
    <IntroHeading
      title="Contact form"
      body="Get in Touch"
      footer="Don't hesitate to contact us if you have any questions, we're always happy to help."
    />
  </section>

  <section class="contact__info">
    <a href="tel:4079246902">
      <ContactInfo src="/icons/large_location.svg" alt="location"
        >(386) 416-9030</ContactInfo
      >
    </a>

    <a href="mailto:overrice@gmail.com">
      <ContactInfo src="/icons/large_clock.svg" alt="opening and closing times"
        >OverRice@gmail.com</ContactInfo
      >
    </a>

    <a href="/location">
      <ContactInfo src="/icons/large_mail.svg" alt="email"
        >Find Where Are We Now</ContactInfo
      >
    </a>

    <ContactInfo src="/icons/large_phone.svg" alt="phone number"
      >09:00 AM-05:00 PM</ContactInfo
    >
  </section>

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

      <button type="submit" class="contact__form__submit">{status}</button>
    </form>
  </section>
</main>

<style lang="scss">
  @use '../../lib/scss/0-helpers/vars' as *;
  @use '../../lib/scss/1-plugins/mquery' as mq;

  .contact {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr;

    width: 100%;
    min-height: 1060px;
    background: url("/images/background.jpg");

    &__header {
      margin: 110px 0 80px 0;
      @include mq.media("<tablet") {
        margin: 60px 0;
      }
    }

    &__info {
      margin-bottom: 100px;

      display: flex;

      @include mq.media("<tablet") {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 60px;
      }

      @include mq.media("<phone") {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      }

      a {
        color: inherit;
        margin: 0 2rem;
      }
      place-self: center;
    }

    &__form {
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr min-content;
      gap: 50px;

      form {
        width: 100vw;
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
        font-family: "le-havre";
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
