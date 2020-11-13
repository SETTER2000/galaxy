<template>
    <div id="wrapper" class="pink lighten-4 front-layout ">
        <div class="container">
            <Header/>
            <Menu/>
            <div class="section white" >
                <div class="row">
                    <router-view/>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
</template>


<script>
    import messages from "../utils/messages";
    import Header from "../components/app/Header";
    import Menu from "../components/app/Menu"
    import Footer from "@/components/app/Footer"

    export default {
        name: "clear-layout",
        data: () => ({
            loading: true
        }),
        mounted() {
            setTimeout(function(){
                $('body').addClass('body_visible');
            }, 200);
        },
        computed: {
            error() {
                return this.$store.getters.error
            },
            locale() {
                return this.$store.getters.info.locale
            }
        },
        watch: {
            error(fbError) {
                this.$error(messages[fbError.code] || 'Что-то пошло не так')
            }
        },
        components: {
            Header, Menu, Footer
        }
    }
</script>

<style scoped>

</style>

