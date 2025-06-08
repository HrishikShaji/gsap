import gsap from "gsap"
import "../styles/page-reveal.css"
import { CustomEase, SplitText } from "gsap/all"
import { useEffect } from "react"

gsap.registerPlugin(CustomEase, SplitText)

CustomEase.create("hop", ".8,0,.3,1")

const splitTextElements = (selector, type = "words,chars", addFirstChar = false) => {
	const elements = document.querySelectorAll(selector)

	elements.forEach((element) => {
		const splitText = new SplitText(element, {
			type,
			wordsClass: "word", charsClass: "char"
		})

		if (type.includes("chars")) {
			splitText.chars.forEach((char, index) => {
				const originalText = char.textContent;
				char.innerHTML = `<span>${originalText}</span>`

				if (addFirstChar && index === 0) {
					char.classList.add("first-char")
				}
			})
		}
	})
}

export default function TextAnimation() {

	useEffect(() => {
		splitTextElements(".intro-title h1", "words,chars", true)
		splitTextElements(".outro-title h1")
		splitTextElements(".tag p", "words")
		splitTextElements(".card h1", "words, chars", true)


		const tl = gsap.timeline({ defaults: { ease: "hop" } })


		tl.to(".intro-title .char span", {
			y: "0%",
			duration: 0.75,
			stagger: 0.05
		}, 0.5).to(".intro-title .char span",
			{
				y: "100%",
				duration: 0.75,
				stagger: 0.05
			}, 2)
	}, [])



	return (
		<div className="h-screen relative w-full flex justify-center items-center bg-black">
			<div className="intro-title  w-full text-center text-white">
				<h1>Nullspace Studio</h1>
			</div>

		</div>
	)
}
