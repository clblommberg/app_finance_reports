import { AxeIcon } from "lucide-react"
import { cn } from "@/lib/utils";
type Icon = typeof AxeIcon;

interface HeadingProps{
    title: string;
    description: string;
    icon: Icon;
    iconColor?: string;
    bgColor?: string;

}

export const Heading = ({
    title,
    description,
    icon: AxeIcon,
    iconColor,
    bgColor,
}: HeadingProps) => {

  return (
    <>
      <div className="px-4 log:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <AxeIcon className={cn("w-10 h-10", iconColor)} />
        </div>
          <div>
            <h2 className="text-3x1 font-bold">{title}</h2>
            <p className="text-sm text-muded-foreground">
              {description}
            </p>
          </div>
      </div>
    </>
  )
}
