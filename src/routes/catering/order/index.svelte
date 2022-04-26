<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/forms/Input.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import HeroHeader from '$lib/components/HeroHeader.svelte';

  let input: string;
  let errorMessage: string;
  let loading: boolean = false;

  const formInputs = {
    name: '',
    email: '',
    phone: '',
    date: '',
    reference: '',
    details: '',
  };
  let formSubmitted: boolean;

  const handleFormSubmit = async (event: Event) => {
    try {
      loading = true;
      const response = await fetch('webrevived.com/api/form/4/submissions', {
        method: 'POST',
        body: JSON.stringify(formInputs),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        errorMessage = 'Submission failed please try again.';
        return;
      }

      formSubmitted = true;
    } catch {
      errorMessage = 'Submission failed please try again.';
    } finally {
      loading = false;
    }
  };
</script>

<HeroHeader
  header="Place Order"
  quote="Interested to bring our kitchen on wheels to your event?
  Our big green has a great fit for Luaus, weddings, birthday parties, corporate events, etc…. 
  We invite you to fill the following form to reach us with all the details of your celebration. "
  --url="url('/images/over_rice_chicken_platter.jpg')"
  --bg-pos="0 38%"
  height="560px"
/>

<section class="section section--white section--small">
  {#if !formSubmitted}
    <form class="form container" on:submit|preventDefault={handleFormSubmit}>
      {#if errorMessage}
        <p style:color="#D75959">{errorMessage}</p>
      {/if}
      <div class="form__group">
        <Input id="name" bind:value={formInputs.name} required placeholder="Full Name" />
        <Input id="email" bind:value={formInputs.email} required placeholder="Email" type="email" />
      </div>
      <Input id="phone" bind:value={formInputs.phone} required type="phone" placeholder="Phone" />
      <Input id="date" bind:value={formInputs.date} label="Requested Date" required type="date" />
      <Input
        id="reference"
        required
        bind:value={formInputs.reference}
        label="Where did you find us?"
        placeholder="E.g Facebook, Event"
      />
      <TextArea
        id="details"
        bind:value={formInputs.details}
        label="Tell us about your request"
        placeholder="Party, event, festival?"
      />
      <Button form>{loading ? 'Sending...' : 'Submit Request'}</Button>
    </form>
  {:else}
    <div class="form__submitted">
      <p><b>Success!</b> Thanks for your request! One of our team members will follow up with you shortly.</p>
      <Button href="/">Return Home</Button>
    </div>
  {/if}
</section>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    &__group {
      width: 100%;
      gap: 2rem;
      display: flex;
    }
  }

  .form__submitted {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;

    p {
      font-size: 1.7em;
      max-width: 400px;
      margin: 0 2rem;
      border-radius: 7px;
    }
  }

  @media screen and (max-width: 767px) {
    .form__group {
      flex-direction: column;
    }
  }
</style>
