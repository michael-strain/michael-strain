<template>

</template>

<script setup>
  const search = useState('search', '');
  const brewMethods = useState('brewMethods', []);
  const page = useState('page', 1);

  const queryString = computed(() => {
      let values = '?page='+page.value+'&take=12';

      values += search.value != '' ? '&search='+search.value : '';
      values += brewMethods.value.length > 0 ? '&brew_methods='+brewMethods.value.join(',') : '';

      return values;
  });

  const { data:cafes, pending, refresh } = await useLazyAsyncData(
      'cafes',
      () => $fetch( `https://api.roastandbrew.coffee/cafes${queryString.value}`)
  )

  // When query string changes, refresh
  watch(() => queryString.value, () => refresh() );
</script>