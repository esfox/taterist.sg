<script>
  import classNames from 'classnames';
</script>

<section class={classNames('grid place-items-center overflow-hidden', $$props.class)}>
  <div class="text-center">
    <h1>
      <slot name="heading" />
    </h1>
    <p class="max-w-[500px] mt-2">
      <slot />
    </p>
  </div>
</section>
