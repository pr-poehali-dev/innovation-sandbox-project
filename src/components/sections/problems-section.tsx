import { useReveal } from "@/hooks/use-reveal"

const problems = [
  {
    title: "Агрессия",
    description: "Царапается и кусается без причины? Разбираем триггеры и учим кошку выражать эмоции безопасно",
    direction: "top",
    emoji: "😾",
  },
  {
    title: "Мочеметки",
    description: "Метит территорию или ходит мимо лотка? Находим причину — стресс, болезнь или конфликт",
    direction: "right",
    emoji: "🚽",
  },
  {
    title: "Ночная активность",
    description: "Носится в 3 ночи и мяукает? Выстраиваем правильный режим игр и питания",
    direction: "left",
    emoji: "🌙",
  },
  {
    title: "Страхи и тревога",
    description: "Прячется, не идёт на контакт? Создаём безопасную среду и восстанавливаем доверие",
    direction: "bottom",
    emoji: "😰",
  },
]

export function ProblemsSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Проблемы поведения
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Решаем вместе</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:gap-x-24">
          {problems.map((problem, i) => (
            <ProblemCard key={i} problem={problem} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  problem,
  index,
  isVisible,
}: {
  problem: { title: string; description: string; direction: string; emoji: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (problem.direction) {
        case "left":
          return "-translate-x-16 opacity-0"
        case "right":
          return "translate-x-16 opacity-0"
        case "top":
          return "-translate-y-16 opacity-0"
        case "bottom":
          return "translate-y-16 opacity-0"
        default:
          return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="text-lg">{problem.emoji}</span>
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{problem.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{problem.description}</p>
    </div>
  )
}
