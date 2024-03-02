export const intersectionObserverDirective = {
    beforeMount(el: any, binding: any) {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                binding.value(true)
            } else {
                binding.value(false)
            }
        })

        observer.observe(el)
        el._intersectionObserver = observer
    },
    unmounted(el: any) {
        el._intersectionObserver.disconnect()
        delete el._intersectionObserver
    }
}
