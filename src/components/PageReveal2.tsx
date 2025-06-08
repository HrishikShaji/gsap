import gsap from "gsap"
import { useEffect } from "react"

export default function PageReveal2() {
	useEffect(() => {
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
		<div className="w-full h-screen">
			<div
				className="container relative w-full h-full overflow-hidden flex flex-col justify-between z-[2]"
				style={{ clipPath: "polygon(0 48%,0 48%,0 52%,0 52%)" }}
			>
				<img
					className="h-full w-full object-cover block"
					alt="forest"
					src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
			</div>
		</div>
	)
}
