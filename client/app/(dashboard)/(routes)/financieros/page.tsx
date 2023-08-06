import { Heading } from "@/components/heading";
import { Wallet } from "lucide-react"

const FinancierosPage = () => {
  return (
    <div>
      <Heading 
      title="Insights Financieros"
      description="Supply"
      icon={Wallet}
      iconColor="text-green-500"
      bgColor="text-green-500/10"
      />
       <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold
        text-center">
            Superpowers Insights
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          La combinaciones de los mejores indicadores para el performance de tu negocio
        </p>
      </div>

    </div>
  )
}

export default FinancierosPage;