import { gsap, ScrollTrigger } from '$lib/gsap/all'

gsap.registerPlugin(ScrollTrigger)

export let to = (node: HTMLElement, options: any) => {
    gsap.to(node, options)
}