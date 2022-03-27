import { accessorType } from "@/stores"

declare module "vue/types/vue" {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }

  interface Context {
    $accessor: typeof accessorType
  }
}