import { Heading } from "@/components/heading";
import { Users } from "lucide-react"

const ClientesPage = () => {
  return (
    <div>
      <Heading 
      title="Insights de Cliente"
      description="Supply"
      icon={Users}
      iconColor="text-orange-500"
      bgColor="text-orange-500/10"
      />
  

    </div>
  )
}

export default ClientesPage;