<template>
    <section id="home">
        <header class="w-full bg-gray-800">
            <section class="container mx-auto py-4 md:w-full w-11/12">
                <section class="flex flex-wrap items-center justify-start">
                    <figure class="w-16">
                        <img src="../assets/images/logo-fake.svg" alt="">
                    </figure>
                    <p class="text-white text-xl px-4 font-bold">
                        Nome da Empresa.
                    </p>
                </section>
            </section>
        </header>
        <section class="container mx-auto min-h-screen md:w-full w-11/12 my-4">
            <JqxGrid
                :width='width'
                :columns='columns'
                :pageable="true"
                :columnsresize="true"
                :source='source'
                :sortable="true"
                :filterable="true"
                :autoshowfiltericon="true"
                :groupable="true"
                :groups="[]"
            >
            </JqxGrid>
        </section>
  </section>
</template>

<script>
/* eslint-disable */
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';

export default {
    name: 'Home',
    data() {
        return {
            width: '99%',
            source: {},
            source: new jqx.dataAdapter(this.source),
            columns: [
                {
                    text: 'Id',
                    datafield: 'id',
                    width: '10%',
                },
                {
                    text: 'Instituições',
                    datafield: 'razaoSocial',
                    width: '90%',
                },
            ],
        };
    },
    beforeCreate() {
        this.source = {
            datafields: [
                { name: 'id', type: 'string' },
                { name: 'razaoSocial', type: 'string' },
            ],
            datatype: 'json',
            url: 'https://609d21d304bffa001792e09f.mockapi.io/api/instituicoes',
            formatdata() {
                return 'my data'
            }
        }
    },
    components: {
        JqxGrid,
    },
};
</script>
