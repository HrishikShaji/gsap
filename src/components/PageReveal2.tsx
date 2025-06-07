import gsap from "gsap"
import { useEffect } from "react"

export default function PageReveal2() {
	useEffect(() => {
		gsap.set(".preloader", {
			clipPath: "polygon(0 0,100% 0,100% 50%,0 50%)",
		});
		gsap.set(".split-overlay", {
			clipPath: "polygon(0 50%,100% 50%,100% 100%,0 100%)"
		})
		const tl = gsap.timeline({ defaults: { ease: "hop" } })

		tl.to(".container", {
			clipPath: "polygon(0% 48%,100% 48%,100% 52%,0% 52%)",
			duration: 1
		})

		tl.to(".container", {
			clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
			duration: 1
		})

	}, [])


	return (
		<div>
			<div className="container bg-red-500 relative w-[100%] h-[100%] min-h-[100svh] flex flex-col justify-between z-[2]"
				style={{ clipPath: "polygon(0 48%,0 48%,0 52%,0 52%)" }}
			>
			</div>

		</div>
	)
}
