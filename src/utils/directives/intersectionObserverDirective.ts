export const intersectionObserverDirective = {
    beforeMount(el, binding) {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                binding.value(true, el)
            } else {
                binding.value(false, el)
            }
        })

        observer.observe(el)
        el._intersectionObserver = observer
    },
    unmounted(el) {
        el._intersectionObserver.disconnect()
        delete el._intersectionObserver
    }
}
