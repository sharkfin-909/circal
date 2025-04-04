<template>
  <div class="flex gap-4 items-center w-[200px]">
    <div>designs:</div>
    <div>
      <USelectMenu
        class="w-[130px]"
        v-model="selected"
        :items="options"
        size="xs"
        :ui="{
          trailingIcon:
            'group-data-[state=open]:rotate-180 transition-transform duration-200',
        }"
        :searchInput="false"
        @update:modelValue="setDesign()"
      />
    </div>
  </div>
</template>

<script setup>
  import { useCircalStore } from "~/stores/circal";
  const { getItems } = useDirectusItems();

  const store = useCircalStore();
  let options = ref([]);

  try {
    let res = await getItems({
      collection: "designs",
      params: {
        fields: [
          "id",
          "name",
          "json",
          "background_image.id",
          "center_image.id",
          "date_items.id",
          "date_items.name",
          "date_items.date",
          "date_items.image",
        ],
        filter: {},
      },
    });
    options.value = res.map((item) => ({
      label: item.name,
      value: item,
    }));
  } catch (e) {
    console.log(e);
  }

  const selected = ref();
  const config = useRuntimeConfig();

  const setDesign = () => {
    let data = selected.value.value;
    store.setDesignJson(data.json);
    let dateItems = data["date_items"].map((item) => ({
      date: new Date(item.date),
      name: item.name,
      imageUrl: `${config.public.directus.url}/assets/${item.image}`,
    }));

    store.setDateItems(dateItems);
    store.setId(data.id);
    store.setImages(
      `${config.public.directus.url}/assets/${data["background_image"].id}`,
      `${config.public.directus.url}/assets/${data["center_image"]}`
    );
    const design = computed(() => store.design);
    const fonts = [
      design.value.monthNames.fontFamily.link,
      design.value.dateItems.text.fontFamily.link,
      design.value.center.text.fontFamily.link,
    ];

    fonts.forEach((item) => store.addFontLinkToHead(item));
  };
</script>
