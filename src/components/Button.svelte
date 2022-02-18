<script>
  import classNames from 'classnames';
</script>

<button
  class={classNames(
    'bg-secondary text-primary text-lg font-bold p-3 hover:bg-secondary-hover',
    $$props.class
  )}
  on:click
>
  <slot />
</button>
