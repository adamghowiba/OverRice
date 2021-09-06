import gsap from 'gsap/all'

export let to = async (node: HTMLElement, options: any) => {
    const { gsap, ScrollTrigger } = await import('gsap/all')
    gsap.registerPlugin( ScrollTrigger )
    gsap.to(node, options)
}
