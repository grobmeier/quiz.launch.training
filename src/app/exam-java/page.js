import styles from './exam.module.css'
import { StartButton } from '@/app/ui/StartButton'
import { Rating } from '@smastrom/react-rating'

export default function Page() {
    return (
        <main className={styles.main}>
            <h1>JAVA</h1>
            <div className={styles.topArea}>
                <div>Difficulty: </div>
                <div>
                    <Rating
                        style={{ maxWidth: 100 }}
                        className={styles.stars}
                        value={4.5}
                        readOnly
                    />
                </div>
            </div>
            <div className={styles.examBox}>
                <p>
                    Programming languages are the backbone of the digital world,
                    serving as the communication bridge between humans and
                    computers. This topic delves into the fascinating realm of
                    programming languages, exploring their various types,
                    characteristics, and the key differences that set them
                    apart.
                </p>
                <p>
                    Discover the intricacies of high-level and low-level
                    languages, scripting languages, and domain-specific
                    languages. Uncover the strengths and weaknesses of each
                    language, and learn how to choose the right one for your
                    specific project.
                </p>
                <p>
                    From the timeless versatility of C++ to the elegant
                    simplicity of Python, from the dynamic nature of JavaScript
                    to the robustness of Java – this exploration provides
                    insights into the diverse universe of programming languages.
                    Understand how they shape the way we code, design, and
                    innovate in the ever-evolving landscape of technology.
                </p>
                <p>
                    Explore the nuances of syntax, paradigms, and the impact of
                    each language on software development. Whether you&apos;re a
                    seasoned developer or just embarking on your coding journey,
                    this topic will shed light on the distinctive features that
                    make each programming language a unique tool in the world of
                    software creation.
                </p>
                <p>
                    Explore the nuances of syntax, paradigms, and the impact of
                    each language on software development. Whether you&apos;re a
                    seasoned developer or just embarking on your coding journey,
                    this topic will shed light on the distinctive features that
                    make each programming language a unique tool in the world of
                    software creation.
                </p>
            </div>
            <StartButton examName={'java'}> Start </StartButton>
        </main>
    )
}
