import { useReveal } from "@/hooks/use-reveal"

const signals = [
  {
    number: "01",
    title: "Мурлыканье",
    category: "Звуковой сигнал",
    description: "Не всегда означает счастье — кошки мурлычут и от стресса или боли",
    direction: "left",
  },
  {
    number: "02",
    title: "Чириканье и трель",
    category: "Охотничий инстинкт",
    description: "Звук при виде птиц или насекомых — возбуждение от добычи",
    direction: "right",
  },
  {
    number: "03",
    title: "Шипение и ворчание",
    category: "Защитная реакция",
    description: "Сигнал страха или агрессии — кошке нужно пространство",
    direction: "left",
  },
  {
    number: "04",
    title: "Тихое мяуканье",
    category: "Просьба",
    description: "Мягкий призыв к вниманию — кошка просит, а не требует",
    direction: "right",
  },
  {
    number: "05",
    title: "Громкий крик",
    category: "Тревожный сигнал",
    description: "Боль, дезориентация или гормональный зов — требует внимания",
    direction: "left",
  },
]

export function SignalsSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Звуки и сигналы
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Что говорит ваша кошка</p>
        </div>

        <div className="space-y-4 md:space-y-5">
          {signals.map((signal, i) => (
            <SignalCard key={i} signal={signal} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SignalCard({
  signal,
  index,
  isVisible,
}: {
  signal: { number: string; title: string; category: string; description: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      return signal.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
    }
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group flex flex-col gap-1 border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 md:flex-row md:items-center md:justify-between md:py-5 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50">
          {signal.number}
        </span>
        <div>
          <h3 className="font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
            {signal.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50">{signal.category}</p>
        </div>
      </div>
      <p className="max-w-sm pl-10 text-sm leading-relaxed text-foreground/70 transition-colors group-hover:text-foreground/90 md:pl-0 md:text-right">
        {signal.description}
      </p>
    </div>
  )
}
